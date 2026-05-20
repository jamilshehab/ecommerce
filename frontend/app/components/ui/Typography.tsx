import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight">
      {children}
    </h1>
  );
}

export function Subtitle({ children }: { children: ReactNode }) {
  return <h2 className="font-medium text-2xl md:text-3xl">{children}</h2>;
}

export function Text({ children }: { children: ReactNode }) {
  return (
    <p className="font-light text-base md:text-lg leading-relaxed">
      {children}
    </p>
  );
}
