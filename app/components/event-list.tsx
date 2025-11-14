import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";

export default function EventList({ events }: { events: EventoEvent[] }){
  return (
    <section className="max-w-[1100px] flex flex-wrap justify-center gap-6 px-[20p]">
        {events.map((event: EventoEvent) => (
            <EventCard event={event} key={event.id}/>
        ))}
    </section>
  )
}
