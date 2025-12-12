import { cn } from "@/lib/client-utils"
import { twMerge } from "tailwind-merge"

type H1Props = {
    children: React.ReactNode,
    className?: string
}

export default function h1({children, className}: H1Props) {
  return (
    <h1 className={cn("text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50",
      className
    )}>
        {children}
    </h1>
  )
}
