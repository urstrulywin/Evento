import Skeleton from "./components/skeleton";

export default function loading() {
  return (
  <div className="flex flex-col items-center gap-4 p-5">
    <Skeleton className="h-4 w-100"/>
    <Skeleton className="h-4 w-80"/>
    <Skeleton className="h-4 w-90"/>
  </div>
  )
}
