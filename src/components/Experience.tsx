import Reveal from "@/components/motion/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import TagList from "@/components/TagList";

type Job = {
  role: string;
  company: string;
  period: string;
  project?: string;
  stack: string[];
  bullets: string[];
};

const jobs: Job[] = [
  {
    role: "Analista Programador",
    company: "Neoris",
    period: "05/2023 — Actualidad",
    project: "Proyecto AMIWEB para BBVA",
    stack: [".NET", ".NET Core", "AngularJS", "SQL Server", "T-SQL", "SSIS"],
    bullets: [
      "Diseño y desarrollo de múltiples aplicaciones .NET para el ecosistema AMIWEB.",
      "Creación y modificación de procedimientos almacenados y cambios estructurales de BBDD.",
      "Modificación de paquetes SSIS vinculados a distintos orígenes de datos.",
    ],
  },
  {
    role: "Analista Programador de aplicaciones",
    company: "Izertis S.A.",
    period: "02/2022 — 05/2023",
    project: "Proyecto GESTEC para ANAV",
    stack: ["C#", "VB.NET", ".NET Core", "Oracle SQL", "Crystal Reports"],
    bullets: [
      "Desarrollo de múltiples aplicaciones en VB.NET y C# para el ecosistema GESTEC.",
      "Gestión de tablas y procedimientos en SQL Server.",
    ],
  },
  {
    role: "Desarrollador de aplicaciones",
    company: "Sabacoinsa S.L.",
    period: "08/2020 — 02/2022",
    stack: ["C#", "VB.NET", "ASP.NET", "SQL Server", "Angular", "Entity Framework"],
    bullets: [
      "Desarrollo de la aplicación de escritorio de gestión de horarios en VB.NET.",
      "Desarrollo del backend del portal del empleado en ASP.NET C#.",
      "Soporte y contacto directo con clientes.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading>Experiencia</SectionHeading>
      </Reveal>
      <div className="mt-8 flex flex-col gap-8">
        {jobs.map((job, index) => (
          <Reveal key={`${job.company}-${job.period}`} delay={index * 0.1}>
            <article className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/20">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-zinc-50">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-zinc-500">{job.period}</span>
              </div>
              {job.project && (
                <p className="mt-1 text-sm text-sky-400">{job.project}</p>
              )}
              <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-zinc-400">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <TagList tags={job.stack} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
