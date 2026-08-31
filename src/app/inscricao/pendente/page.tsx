import Link from "next/link";
import {
  ClockIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function InscricaoPendentePage() {
  return (
    <main className="min-h-[70vh] flex items-center py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 text-center">

          <ClockIcon
            className="w-16 h-16 text-amber-500 mx-auto mb-6"
            aria-hidden="true"
          />

          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Pagamento em processamento
          </p>

          <h1 className="font-heading font-bold text-[#1A2B35] text-2xl md:text-3xl mb-4">
            Seu pagamento está pendente
          </h1>

          <p className="text-slate-600 leading-relaxed mb-8">
            Recebemos sua inscrição, mas o pagamento ainda está sendo
            processado pelo Mercado Pago.
          </p>

          <div className="bg-slate-50 rounded-xl p-5 mb-8 text-left">
            <div className="flex items-start gap-3">
              <EnvelopeIcon
                className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />

              <div>
                <p className="font-semibold text-[#1A2B35] mb-1">
                  O que acontece agora?
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Assim que o pagamento for confirmado, sua inscrição será
                  efetivada. As orientações relacionadas à participação no
                  curso serão encaminhadas para o e-mail informado na
                  inscrição.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Voltar para a página inicial
          </Link>

        </div>
      </div>
    </main>
  );
}