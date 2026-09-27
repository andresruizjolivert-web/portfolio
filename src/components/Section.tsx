import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">{children}</div>
    </section>
  );
}
