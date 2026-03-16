import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }: { event: EventoEvent }) {
  const date = new Date(event.date);

  return (
    <Link
      href={`/event/${event.slug}`}
      className="flex-1 basis-80 max-w-sm h-80"
    >
      <article className="relative h-full w-full overflow-hidden rounded-xl bg-white/40 shadow-xl transition hover:scale-105 active:scale-102">
        {/* Image */}
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={400}
          height={240}
          className="h-[60%] w-full object-cover"
        />

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-5 gap-1">
          <h2 className="text-xl font-semibold">{event.name}</h2>

          <p className="text-sm italic text-muted-foreground">
            By {event.organizerName}
          </p>

          <p className="text-sm text-muted-foreground">{event.location}</p>
        </div>

        {/* Date badge */}
        <div className="absolute left-3 top-3 flex flex-col items-center justify-center w-12 h-12 rounded-md bg-black/70 text-white/90 shadow">
          <span className="text-lg font-bold leading-none">
            {date.toLocaleDateString("default", { day: "2-digit" })}
          </span>

          <span className="text-[10px] uppercase">
            {date.toLocaleDateString("default", { month: "short" })}
          </span>
        </div>
      </article>
    </Link>
  );
}
