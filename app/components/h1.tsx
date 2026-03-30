import { cn } from "@/lib/client-utils";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function h1({ children, className }: H1Props) {
  return (
    <h1 className={cn("text-4xl md:text-5xl font-bold", className)}>
      {children}
    </h1>
  );
}
