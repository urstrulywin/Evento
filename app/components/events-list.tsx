import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { getEvents, sleep } from "@/lib/utils";

interface EventsListProps {
    city: string;
}

export default async function EventList({city}: EventsListProps) {
    // Simulate network delay for demo purposes
    // await sleep(2000);
    const events = await getEvents(city)

  return (
    <section className="max-w-6xl flex flex-wrap justify-center gap-10">
        {events.map((event: EventoEvent) => (
            <EventCard event={event} key={event.id}/>
        ))}
    </section>
  )
}
