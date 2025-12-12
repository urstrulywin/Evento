import { ArrowLeft, ArrowRight } from "lucide-react";
import next from "next";
import Link from "next/link";

const styles = 'flex gap-2 px-4 py-2 text-white rounded-lg opacity-75 hover:opacity-100 bg-white/10';

export default function Pagination( {
    prevPath, 
    nextPath,
} : {
    prevPath: string | null;
    nextPath: string | null;
}) {
  return (
    <section className="flex w-full justify-between">
        {prevPath ?
            <Link 
                href={prevPath || "?page=1"}
                className={styles}
            >
                <ArrowLeft/>
                Prev
            </Link>
            : <div/>
        }
        {nextPath &&
            <Link 
                href={nextPath || "?page=1"}
                className={styles}
            >
                Next
                <ArrowRight/>
            </Link>
        }
    </section>
  )
}
