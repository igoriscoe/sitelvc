import { createClient } from "@supabase/supabase-js";
import {
  MercadoPagoConfig,
  Payment,
  WebhookSignatureValidator,
  InvalidWebhookSignatureError,
} from "mercadopago";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

const mercadoPago = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

const paymentClient = new Payment(mercadoPago);

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);

    const dataId = url.searchParams.get("data.id");
    const type = url.searchParams.get("type");

    const xSignature = request.headers.get("x-signature");
    const xRequestId = request.headers.get("x-request-id");

    if (!dataId || type !== "payment") {
      return NextResponse.json({ received: true }, { status: 200 });
    }

    const webhookSecret = process.env.MERCADOPAGO_WEBHOOK_SECRET;

    if (!webhookSecret || !xSignature || !xRequestId) {
      return NextResponse.json(
        { error: "Webhook sem assinatura válida." },
        { status: 401 }
      );
    }

    try {
      WebhookSignatureValidator.validate({
        xSignature,
        xRequestId,
        dataId,
        secret: webhookSecret,
      });
    } catch (error) {
      if (error instanceof InvalidWebhookSignatureError) {
        return NextResponse.json(
          { error: "Assinatura inválida." },
          { status: 401 }
        );
      }

      throw error;
    }

    const pagamento = await paymentClient.get({
      id: dataId,
    });

    const inscricaoId = pagamento.external_reference;

    if (!inscricaoId) {
      return NextResponse.json({ received: true }, { status: 200 });
    }

    let statusPagamento = pagamento.status ?? "desconhecido";
    let pagoEm: string | null = null;

    if (pagamento.status === "approved") {
      statusPagamento = "pago";
      pagoEm = pagamento.date_approved ?? new Date().toISOString();
    }

    const { error } = await supabase
      .from("inscricoes")
      .update({
        status_pagamento: statusPagamento,
        mercadopago_payment_id: String(pagamento.id),
        pago_em: pagoEm,
      })
      .eq("id", inscricaoId);

    if (error) {
      console.error("Erro ao atualizar pagamento:", error);

      return NextResponse.json(
        { error: "Erro ao atualizar inscrição." },
        { status: 500 }
      );
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Erro no webhook:", error);

    return NextResponse.json(
      { error: "Erro interno no webhook." },
      { status: 500 }
    );
  }
}