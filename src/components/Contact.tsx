const links = [
  { label: "Email", href: "mailto:andres.ruiz.jolivert@gmail.com" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Contacto
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-300">
          ¿Buscas a alguien con ganas de aprender y construir? Hablemos.
        </p>
        <ul className="mt-6 flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
