import Image from "next/image";

const partners = [
  {
    name: "Laboratório de Protozoologia",
    logo: "/logo_proto.png",
    size: "w-64 h-24",
    scale: "scale-125",
  },
  {
    name: "Universidade Federal de Santa Catarina",
    logo: "/logo_ufsc.png",
    size: "w-40 h-28",
    scale: "scale-110",
  },
  {
    name: "Universidade do Sul de Santa Catarina",
    logo: "/logo-unisul.svg",
    size: "w-56 h-24",
    scale: "scale-100",
  },
];

export default function InstitutionalPartners() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary-700 mb-3">
            Instituições parceiras
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center min-h-28"
            >
              <div className={`relative ${partner.size}`}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className={`object-contain ${partner.scale}`}
                  sizes="256px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}