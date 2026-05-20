import { ReactNode } from "react";

export function Button({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "px-6 py-3 rounded-full transition-all duration-300 text-sm tracking-wide";

  const styles = {
    primary:
      "bg-[var(--color-black)] text-white hover:bg-[var(--color-accent-3)]",
    secondary:
      "border border-[var(--color-black)] text-black hover:bg-[var(--color-accent-2)]",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
