import Link from "next/link";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  target
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  target?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition border";
  const styles =
    variant === "primary"
      ? "bg-skybrand-400/20 border-skybrand-300/30 hover:bg-skybrand-400/30"
      : "bg-white/5 border-white/10 hover:bg-white/10";
  return (
    <Link href={href} target={target} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
