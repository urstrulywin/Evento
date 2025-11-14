import EventList from "@/components/event-list";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";

interface EventsPageParams {
    params: Promise<{ city: string }>;
}

export default async function CityEventPage({ params }: EventsPageParams ) {
    const { city } = await params; // ← unwrap the Promise

    const response = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );

    if (!response.ok) {
        const text = await response.text();
        console.error("API error:", text);
        throw new Error(`API returned ${response.status}`);
    }

    const events : EventoEvent[] = await response.json();
    console.log(events);
  
    if (!city) {
        return (
        <main className="container mx-auto px-4 py-8">
        <H1>Events</H1>
        <p>No city provided.</p>
        </main>
        );
    }

    const title = city.charAt(0).toUpperCase() + city.slice(1);

    return (
        <main className="container flex flex-col items-center px-4 py-8">
            <H1>
                {title === 'all' ? 'All Events' : `Events in ${title}`}
            </H1>            
            <EventList events={events} />        
        </main>
    );
}
