import Reveal from "@/components/motion/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import TagList from "@/components/TagList";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "Portfolio personal",
    description:
      "Este sitio, construido con Next.js, TypeScript y Tailwind CSS. Código abierto en GitHub.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://github.com/andresruizjolivert-web/portfolio",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading>Proyectos</SectionHeading>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <h3 className="text-lg font-semibold text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <TagList tags={project.tags} />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
