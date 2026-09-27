import Reveal from "@/components/motion/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

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
    <Section id="skills">
      <Reveal>
        <SectionHeading>Skills</SectionHeading>
      </Reveal>
      <div className="mt-8 flex flex-col gap-6">
        {categories.map((category, index) => (
          <Reveal key={category.label} delay={index * 0.1}>
            <h3 className="text-sm font-medium text-zinc-400">
              {category.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/20"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
