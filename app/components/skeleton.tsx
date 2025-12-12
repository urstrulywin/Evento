import { cn } from "@/lib/client-utils";

export default function Skeleton({className}: {className?: string}) {
  return (
    <div className={cn("h-6 w-100 rounded-mg pulse bg-white/5 ",
        className
    )}/>
  )
}
