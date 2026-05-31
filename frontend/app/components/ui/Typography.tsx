import { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight">
      {children}
    </h1>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-extrabold text-3xl md:text-5xl tracking-tight">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-medium text-2xl md:text-3xl tracking-tight">
      {children}
    </h3>
  );
}

export function Text({ children }: { children: ReactNode }) {
  return (
    <p className="font-light text-base md:text-lg leading-relaxed">
      {children}
    </p>
  );
}
