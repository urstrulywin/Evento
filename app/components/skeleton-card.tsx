import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div className="space-y-6">
        <Skeleton className="h-15 w-15 rounded-xl"/>
        <Skeleton className="h-6 w-60"/>
        <Skeleton className="h-6 w-55"/>
    </div>
  )
}
