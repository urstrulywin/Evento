import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { getEvents } from "@/lib/server-utils";
import Pagination from "./pagination";

interface EventsListProps {
    city: string;
    page?: number;
}

export default async function EventList({city, page=1}: EventsListProps) {
    // Simulate network delay for demo purposes
    // await sleep(2000);
    const {events, eventCount} = await getEvents(city, page)

    const prevPath = page > 1 ? `?city=${city}&page=${page - 1}` : '';
    const nextPath = eventCount > 6*page ? `?city=${city}&page=${page + 1}` : '';

  return (
    <section className="max-w-6xl flex flex-wrap justify-center gap-10 mb-10">
        {events.map((event: EventoEvent) => (
            <EventCard event={event} key={event.id}/>
        ))}
        <Pagination prevPath={prevPath} nextPath={nextPath} />
    </section>
  )
}
