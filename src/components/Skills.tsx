const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "Node.js",
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Skills
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
