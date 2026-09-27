import Reveal from "@/components/motion/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading>Sobre mí</SectionHeading>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
          Desarrollador de software con más de 5 años de experiencia en
          entornos .NET, diseñando y manteniendo aplicaciones para banca
          (BBVA) e industria (ANAV) — desde backends en C# y ASP.NET hasta
          la gestión de bases de datos SQL Server y Oracle. Ahora estoy
          ampliando mi perfil hacia el desarrollo web moderno con React,
          TypeScript y Next.js, combinando esa base sólida de backend con
          las herramientas que el mercado frontend demanda hoy.
        </p>
      </Reveal>
    </Section>
  );
}
