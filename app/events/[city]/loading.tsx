import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-240 mx-auto px-5 py-6 gap-5">
        {
            Array.from({length: 6}).map((_, index) => (
                <SkeletonCard key={index}/>
            ))
        }
    </div>
  )
}
