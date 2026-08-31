"use client";

import { useState } from "react";

export default function SubscriptionPage() {
  const [profile, setProfile] = useState("");
  const [otherProfile, setOtherProfile] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

     const dados = {
    nome: formData.get("name"),
    email: formData.get("email"),
    whatsapp: formData.get("phone"),
    cpf: formData.get("cpf"),
    data_nascimento: formData.get("birthDate"),
    perfil: formData.get("profile"),
    outro_perfil: formData.get("otherProfile"),
    crmv: formData.get("crmv"),
    instituicao: formData.get("institution"),
    municipio_estado: formData.get("location"),
    rotina_lvc: formData.get("lvcRoutine"),
    experiencia_lvc: formData.get("experienceLevel"),
  };

  try {
  const response = await fetch("/api/inscricoes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  const resultado = await response.json();

 if (!response.ok) {
  console.error("Erro:", resultado);
  alert("Não foi possível registrar a inscrição.");
  return;
}

window.location.href = resultado.checkoutUrl;

} catch (error) {
  console.error("Erro ao enviar inscrição:", error);
  alert("Ocorreu um erro ao enviar a inscrição.");
}

}


  const inputClass =
    "w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100";

  const labelClass =
    "block text-sm font-medium text-slate-700 mb-2";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Cabeçalho */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Inscrição
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Curso de Capacitação em Leishmaniose Visceral Canina
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Diagnóstico Clínico, Laboratorial e Monitoramento do Tratamento
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* FORMULÁRIO */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Ciência e compromisso */}
              <div className="bg-primary-50 rounded-2xl border border-primary-100 p-6">
                <h2 className="font-semibold text-slate-900">
                  Declaração de Ciência e Compromisso
                </h2>

                <label className="mt-4 flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="attendanceCommitment"
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />

                  <span className="text-sm leading-relaxed text-slate-700">
                    Declaro estar ciente de que o curso é presencial e de que
                    minha participação exige presença em 100% da carga horária.
                    *
                  </span>
                </label>
              </div>

              {/* DADOS PESSOAIS */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">
                  Dados pessoais
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Informe os dados da pessoa que participará do curso.
                </p>

                <div className="mt-7 space-y-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Nome completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        E-mail principal para contato *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Telefone / WhatsApp com DDD *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(48) 99999-9999"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="cpf" className={labelClass}>
                        CPF *
                      </label>
                      <input
                        id="cpf"
                        name="cpf"
                        type="text"
                        required
                        inputMode="numeric"
                        placeholder="000.000.000-00"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="birthDate" className={labelClass}>
                        Data de nascimento *
                      </label>
                      <input
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* PERFIL PROFISSIONAL */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">
                  Perfil profissional e institucional
                </h2>

                <div className="mt-7 space-y-5">
                  <div>
                    <label htmlFor="profile" className={labelClass}>
                      Perfil profissional *
                    </label>

                    <select
                      id="profile"
                      name="profile"
                      required
                      value={profile}
                      onChange={(event) => setProfile(event.target.value)}
                      className={`${inputClass} bg-white`}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="vet-clinica">
                        Médico(a) Veterinário(a) — Atuação Clínica
                      </option>
                      <option value="vet-laboratorial">
                        Médico(a) Veterinário(a) — Atuação Laboratorial
                      </option>
                      <option value="vet-saude-publica">
                        Médico(a) Veterinário(a) — Saúde Pública / Vigilância em Saúde
                      </option>
                      <option value="residente">
                        Residente em Medicina Veterinária
                      </option>
                      <option value="graduacao">
                        Estudante de Graduação em Medicina Veterinária
                      </option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  {profile === "outro" && (
                    <div>
                      <label htmlFor="otherProfile" className={labelClass}>
                        Informe seu perfil *
                      </label>
                      <input
                        id="otherProfile"
                        name="otherProfile"
                        type="text"
                        required
                        value={otherProfile}
                        onChange={(event) =>
                          setOtherProfile(event.target.value)
                        }
                        className={inputClass}
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="crmv" className={labelClass}>
                      Número do CRMV e UF
                    </label>
                    <input
                      id="crmv"
                      name="crmv"
                      type="text"
                      placeholder="Ex.: CRMV-SC 12345"
                      className={inputClass}
                    />
                    <p className="mt-1.5 text-xs text-slate-500">
                      Preenchimento destinado aos profissionais que possuem
                      registro no CRMV.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="institution" className={labelClass}>
                      Instituição / Empresa / Órgão de vínculo
                    </label>
                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className={labelClass}>
                      Município e Estado de atuação principal *
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      placeholder="Ex.: Florianópolis/SC"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* EXPERIÊNCIA */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">
                  Experiência com Leishmaniose Visceral Canina
                </h2>

                <div className="mt-7 space-y-7">
                  <fieldset>
                    <legend className="text-sm font-medium text-slate-700 mb-3">
                      Você já realiza atendimento ou diagnóstico de cães com
                      suspeita de Leishmaniose Visceral Canina na sua rotina? *
                    </legend>

                    <div className="space-y-3">
                      {[
                        ["frequentemente", "Sim, frequentemente."],
                        ["ocasionalmente", "Sim, ocasionalmente."],
                        [
                          "nao",
                          "Não, mas tenho interesse em atuar/aprender.",
                        ],
                      ].map(([value, label]) => (
                        <label
                          key={value}
                          className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="lvcRoutine"
                            value={value}
                            required
                            className="h-4 w-4"
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="text-sm font-medium text-slate-700 mb-3">
                      Qual é o seu nível de experiência prévia com coleta e
                      interpretação de exames parasitológicos, sorológicos e
                      moleculares para LVC? *
                    </legend>

                    <div className="space-y-3">
                      {[
                        [
                          "iniciante",
                          "Iniciante — pouco ou nenhum contato prático.",
                        ],
                        [
                          "intermediario",
                          "Intermediário — realizo/interpreto eventualmente.",
                        ],
                        [
                          "avancado",
                          "Avançado — domino as técnicas laboratoriais.",
                        ],
                      ].map(([value, label]) => (
                        <label
                          key={value}
                          className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="experienceLevel"
                            value={value}
                            required
                            className="h-4 w-4"
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>

              {/* LGPD */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />

                  <span className="text-sm leading-relaxed text-slate-600">
                    Declaro que os dados informados são verdadeiros e concordo
                    com o tratamento dos meus dados pessoais para as
                    finalidades relacionadas à inscrição, comunicação e
                    realização do curso. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary-600 px-6 py-4 font-semibold text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                Continuar para pagamento
              </button>

              <p className="text-xs text-center text-slate-500">
                O preenchimento do formulário não garante a vaga. A inscrição
                será confirmada após a aprovação do pagamento.
              </p>
            </form>
          </div>

          {/* RESUMO DA TURMA */}
          <aside>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm lg:sticky lg:top-24">
              <p className="text-sm font-semibold text-primary-600">
                Turma 2026
              </p>

              <h2 className="mt-2 font-semibold text-slate-900 leading-snug">
                Leishmaniose Visceral Canina
              </h2>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <p className="text-slate-500">Data</p>
                  <p className="font-medium text-slate-800">
                    02 e 03 de outubro de 2026
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Carga horária</p>
                  <p className="font-medium text-slate-800">
                    16 horas · Presencial teórico-prático
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Público-alvo</p>
                  <p className="font-medium text-slate-800">
                    Médicos-veterinários e acadêmicos de Medicina Veterinária
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Coordenação</p>
                  <p className="font-medium text-slate-800">
                    Profa. Dra. Patricia Flavia Quaresma (UFSC)
                    <br />
                    Profa. Cibele Fraga (Unisul)
                  </p>
                </div>
              </div>

              <div className="my-6 border-t border-slate-200" />

              <div>
                <p className="text-sm text-slate-500">Investimento</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  R$ 2.400
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Pix, boleto ou cartão de crédito
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}