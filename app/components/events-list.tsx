import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";
import { sleep } from "@/lib/utils";

interface EventsListProps {
    city: string;
}

export default async function EventList({city}: EventsListProps) {
    // Simulate network delay for demo purposes
    // await sleep(2000);
    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
        {
            next:
            { 
                revalidate: 300 
            }
        }
    );

    if (!response.ok) {
        const text = await response.text();
        console.error("API error:", text);
        throw new Error(`API returned ${response.status}`);
    }

    const events : EventoEvent[] = await response.json();
    console.log(events);

  return (
    <section className="max-w-[1100px] flex flex-wrap justify-center gap-6 px-[20p]">
        {events.map((event: EventoEvent) => (
            <EventCard event={event} key={event.id}/>
        ))}
    </section>
  )
}
