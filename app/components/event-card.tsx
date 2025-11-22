import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({event}: {event: EventoEvent}) {
    return (
        <Link href={`/event/${event.slug}`} className="flex-1 basis-80 w-[400px] h-[300px] " >
            <section className="h-full w-full flex flex-col mb-6 border p-4 rounded-xl overflow-hidden shadow state-effects relative">
                <Image 
                    src={event.imageUrl} 
                    alt={event.name} 
                    width={400} 
                    height={200} 
                    className="w-full h-auto rounded"
                />
                <div className="flex flex-col flex-1 justify-center">
                    <h2 className="text-xl font-semibold mb-2">{event.name}</h2>    
                    <p className="text-gray-600">Date: {event.organizerName}</p>
                    <p className="text-gray-600">Location: {event.location}</p>
                </div>
                <section className="absolute flex flex-col justify-center items-center left-3 top-3 h-[45px] w-[45px] bg-black/30 rounded-md shadow-md">
                    <p className="text-xl font-bold -mb-[5px]">
                        {new Date(event.date).toLocaleDateString('default', { day: '2-digit' })}
                    </p>
                    <p className="text-xs uppercase text-primary">
                        {new Date(event.date).toLocaleDateString('default', { month: 'short' })}
                    </p>
                </section>
            </section>
        </Link>
    )
}
