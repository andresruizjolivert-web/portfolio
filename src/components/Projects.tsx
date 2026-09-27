type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "To-Do List",
    description:
      "Gestor de tareas en JavaScript puro con filtros y persistencia en localStorage.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio personal",
    description:
      "Este sitio, construido con Next.js, TypeScript y Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Proyectos
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
            >
              <h3 className="text-lg font-semibold text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
