import Reveal from "@/components/motion/Reveal";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

const links = [
  { label: "Email", href: "mailto:andres.ruiz.jolivert@gmail.com" },
  { label: "GitHub", href: "https://github.com/andresruizjolivert-web" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andr%C3%A9s-quir%C3%B3s-ruiz-53b8411ba/",
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading>Contacto</SectionHeading>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-300">
          ¿Buscas un desarrollador con experiencia sólida en backend y ganas
          de crecer en el stack web moderno? Hablemos.
        </p>
        <ul className="mt-6 flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-block rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-50 transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
