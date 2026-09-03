import { createClient } from "@supabase/supabase-js";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SECRET_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const mercadoPago = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

const preference = new Preference(mercadoPago);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data, error } = await supabase
      .from("inscricoes")
      .insert([
        {
          nome: body.nome,
          email: body.email,
          whatsapp: body.whatsapp,
          cpf: body.cpf,
          data_nascimento: body.data_nascimento,
          perfil: body.perfil,
          outro_perfil: body.outro_perfil || null,
          crmv: body.crmv || null,
          instituicao: body.instituicao || null,
          municipio_estado: body.municipio_estado,
          rotina_lvc: body.rotina_lvc,
          experiencia_lvc: body.experiencia_lvc,
          turma: "turma-01",
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Erro do Supabase:", error);

      return NextResponse.json(
        { error: "Não foi possível registrar a inscrição." },
        { status: 500 }
      );
    }

   const pagamento = await preference.create({
  body: {
    items: [
      {
        id: "LVC-2026-01",
        title: "Curso de Leishmaniose Visceral Canina - Turma 2026",
        quantity: 1,
        unit_price: 1,
        currency_id: "BRL",
      },
    ],
    payer: {
      name: body.nome,
      email: body.email,
    },

    external_reference: data.id,

    back_urls: {
      success: "https://sitelvc.vercel.app/inscricao/sucesso",
      failure: "https://sitelvc.vercel.app/inscricao/erro",
      pending: "https://sitelvc.vercel.app/inscricao/pendente",
    },

    auto_return: "approved",
  },
});

    return NextResponse.json(
      {
        success: true,
        id: data.id,
        checkoutUrl: pagamento.init_point,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao processar inscrição:", error);

    return NextResponse.json(
      { error: "Erro interno ao processar a inscrição." },
      { status: 500 }
    );
  }
}