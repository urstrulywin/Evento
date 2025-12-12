import EventList from "@/components/events-list";
import H1 from "@/components/h1";   
import { Suspense } from "react";
import Loading from "./loading";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Metadata } from "next";
import z from "zod";

interface Props {
    params: Promise<{ city: string }>;
}
type EventsProps = Props & {
    searchParams : Promise<{ [key:string]: string| string[]| undefined}>;
}

export async function generateMetadata({ params }: EventsProps) : Promise<Metadata> {
    const { city } = await params;
    const titleCity = capitalizeFirstLetter(city);

    return {
        title: city === 'all' ? 'All Events' : `Events in ${titleCity}`,
        description: city === 'all' ? 'Browse all events' : `Browse events in ${titleCity}`,
    };
}
const pageNumberSchema = z.coerce.number().int().min(1).catch(1).optional();

export default async function EventsPage({ params, searchParams }: EventsProps) {
    const { city } = await params; // ← unwrap the Promise
    const parsedPage = pageNumberSchema.safeParse(await searchParams);
    if(!parsedPage.success) {
        throw new Error("Invalid page number");
    }

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
        <main className="container mx-auto flex flex-col items-center">
            <H1 className="p-6">
                {city === 'all' ? 'All Events' : `Events in ${title}`}
            </H1>
            <Suspense key={parsedPage.data} fallback={<Loading/>}>
                <EventList city={city} page={parsedPage.data}/>        
            </Suspense>         
        </main>
    );
}
