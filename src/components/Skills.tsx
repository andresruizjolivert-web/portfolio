const categories: { label: string; skills: string[] }[] = [
  {
    label: "Web moderno (en desarrollo)",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & lenguajes",
    skills: ["C#", "VB.NET", ".NET / .NET Core", "ASP.NET", "Java", "Python", "PHP"],
  },
  {
    label: "Bases de datos",
    skills: ["SQL Server", "Oracle SQL", "MySQL", "MongoDB"],
  },
  {
    label: "Frameworks & herramientas",
    skills: ["Angular", "Entity Framework", "Spring", "Hibernate", "Laravel", "Git", "Visual Studio"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Skills
        </h2>
        <div className="mt-8 flex flex-col gap-6">
          {categories.map((category) => (
            <div key={category.label}>
              <h3 className="text-sm font-medium text-zinc-400">
                {category.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
