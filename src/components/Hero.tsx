export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-24 pb-20">
      <p className="text-sm font-medium text-sky-400">Hola, soy</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
        Andrés Quirós
      </h1>
      <h2 className="mt-3 text-2xl font-semibold text-zinc-400 sm:text-3xl">
        Desarrollador de Software
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
        Más de 5 años de experiencia desarrollando aplicaciones .NET, C# y
        SQL Server para clientes como BBVA y ANAV. Actualmente ampliando
        hacia el ecosistema web moderno con React, TypeScript y Next.js.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#experience"
          className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-sky-300"
        >
          Ver experiencia
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-50 transition-colors hover:bg-white/5"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
