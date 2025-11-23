import EventList from "@/components/event-list";
import H1 from "@/components/h1";   
import { Suspense } from "react";
import Loading from "./loading";

interface EventsPageParams {
    params: Promise<{ city: string }>;
}

export default async function EventsPage({ params }: EventsPageParams ) {
    const { city } = await params; // ← unwrap the Promise

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
                {city === 'all' ? 'All Events' : `Events in ${title}`}
            </H1>
            <Suspense fallback={<Loading/>}>
                <EventList city={title}/>        
            </Suspense>         
        </main>
    );
}
