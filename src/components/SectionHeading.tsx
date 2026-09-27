import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
      {children}
    </h2>
  );
}
