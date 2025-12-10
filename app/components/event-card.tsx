import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({event}: {event: EventoEvent}) {
    return (
        <Link href={`/event/${event.slug}`} className="flex-1 basis-80 max-w-100 h-80" >
            <section className="h-full w-full bg-white/10 flex flex-col  rounded-xl overflow-hidden shadow state-effects relative transition hover:scale-105 active:scale-[1.02]"> 
                <Image 
                    src={event.imageUrl} 
                    alt={event.name} 
                    width={400} 
                    height={240} 
                    className="h-[60%] w-full object-fit rounded"//h-auto
                />
                <div className="flex flex-col flex-1 justify-center items-center">
                    <h2 className="text-2xl font-semibold">{event.name}</h2>    
                    <p className="italic text-white/75">By {event.organizerName}</p>
                    <p className="text-sm text-white/50">{event.location}</p>
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
