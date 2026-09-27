const education = [
  {
    title: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    subtitle: "Perfil profesional: Videojuegos y ocio digital · INS Sabadell",
    period: "2018 — 2020",
  },
  {
    title: "CFGM Sistemas Microinformáticos y Redes",
    subtitle: "INS Sabadell",
    period: "2016 — 2018",
  },
];

const languages = [
  { name: "Castellano", level: "Nativo" },
  { name: "Catalán", level: "Nativo" },
  { name: "Inglés", level: "Medio-Alto" },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              Formación
            </h2>
            <ul className="mt-6 flex flex-col gap-5">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="font-medium text-zinc-50">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.subtitle}</p>
                  <p className="text-sm text-zinc-500">{item.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
              Idiomas
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-baseline justify-between max-w-xs">
                  <span className="text-zinc-50">{lang.name}</span>
                  <span className="text-sm text-zinc-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
