import Link from "next/link";
import {
  ExclamationCircleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function InscricaoErroPage() {
  return (
    <main className="min-h-[70vh] flex items-center py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 text-center">

          <ExclamationCircleIcon
            className="w-16 h-16 text-red-500 mx-auto mb-6"
            aria-hidden="true"
          />

          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
            Pagamento não concluído
          </p>

          <h1 className="font-heading font-bold text-[#1A2B35] text-2xl md:text-3xl mb-4">
            Não foi possível concluir o pagamento
          </h1>

          <p className="text-slate-600 leading-relaxed mb-8">
            Sua tentativa de pagamento não foi concluída. Nenhuma confirmação
            de pagamento foi registrada.
          </p>

          <div className="bg-slate-50 rounded-xl p-5 mb-8 text-left">
            <div className="flex items-start gap-3">
              <ArrowPathIcon
                className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />

              <div>
                <p className="font-semibold text-[#1A2B35] mb-1">
                  Tente novamente
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Você pode retornar à página de inscrição e realizar uma nova
                  tentativa de pagamento.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/subscriptions"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Voltar para a inscrição
          </Link>

        </div>
      </div>
    </main>
  );
}