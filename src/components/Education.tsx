import Reveal from "@/components/motion/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

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
    <Section id="education">
      <div className="grid gap-12 sm:grid-cols-2">
        <Reveal>
          <SectionHeading>Formación</SectionHeading>
          <ul className="mt-6 flex flex-col gap-5">
            {education.map((item) => (
              <li key={item.title}>
                <p className="font-medium text-zinc-50">{item.title}</p>
                <p className="text-sm text-zinc-400">{item.subtitle}</p>
                <p className="text-sm text-zinc-500">{item.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading>Idiomas</SectionHeading>
          <ul className="mt-6 flex flex-col gap-3">
            {languages.map((lang) => (
              <li key={lang.name} className="flex max-w-xs items-baseline justify-between">
                <span className="text-zinc-50">{lang.name}</span>
                <span className="text-sm text-zinc-500">{lang.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
