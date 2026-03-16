import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const base =
  "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/40 transition hover:bg-white/80";

export default function Pagination({
  prevPath,
  nextPath,
}: {
  prevPath: string | null;
  nextPath: string | null;
}) {
  return (
    <section className="mx-auto mt-10 flex w-full max-w-6xl items-center justify-between px-6">
      {prevPath ? (
        <Link href={prevPath} className={base}>
          <ArrowLeft size={18} />
          <span>Prev</span>
        </Link>
      ) : (
        <span className="px-4 py-2" />
      )}

      {nextPath ? (
        <Link href={nextPath} className={base}>
          <span>Next</span>
          <ArrowRight size={18} />
        </Link>
      ) : (
        <span className="px-4 py-2" />
      )}
    </section>
  );
}
