import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import { capitalizeFirstLetter, sleep } from "@/lib/client-utils";
import { Metadata } from "next";
import Image from "next/image";
import { getEvent } from "@/lib/server-utils";

interface EventSlug {
    params: Promise<{ slug: string }>;
} 

export async function generateMetadata({ params }: EventSlug) : Promise<Metadata>{
    const { slug } = await params;

    const event = await getEvent(slug);

    if(!event) {
        return {
            title: "Event Not Found",
        };
    }

    return {
        title: event.name,
    };
}

export default async function CityEventPage({params}: EventSlug) {
  const { slug } = await params;

  // Simulate network delay for demo purposes
  // await sleep(2000);
  const event = await getEvent(slug);

  if(!event) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-5 text-center">  
        <H1 className="text-4xl mb-4">Event Not Found</H1>
        <p className="text-lg text-white/75 max-w-2xl">Sorry, we couldn't find the event you're looking for. Please check the URL or return to the homepage.</p>
      </main>
    );
  }

  return (
    <main >
      <section className="relative w-full overflow-hidden flex items-center justify-center py-15 md:py-20">
        <Image 
          src={event.imageUrl} 
          alt={event.name} 
          className="object-cover z-0 blur-2xl" 
          quality={50}
          fill 
          sizes="(max-width: 1280px) 100vw, 1280px" 
          // height={400} 
          priority
        />
        <div className="relative z-1 flex gap-6 lg:gap-x-12 flex-col md:flex-row items-center">
          <Image 
            src={event.imageUrl} 
            alt={event.name} 
            className="rounded-xl border-2 border-white/50 object-cover"
            width={300}
            height={200}
            sizes="(max-width: 600px) 100vw, 600px" 
            // priority
          />
          <div className="flex flex-col sm:items-center md:items-start">
            {/* display date of event */}
            <p className= "text-white/75">
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <H1 className="py-2 whitespace-nowrap lg:text-5xl">{event.name}</H1>
            <p className="pb-1 italic whitespace-nowrap text-xl text-white/75"> Organized by <span>{event.organizerName}</span> </p>
            <p className="text-white drop-shadow-lg">{event.location}</p>
            <button className=" bg-white/20 text-lg p-1 mt-5 capitalize w-[95vw] sm:w-full rounded-md border-white/20 border-2 bg-blur state-effects"> Get Tickets </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-10 min-h-[75vh]">
        <Section>
              <SectionHeader >About the event</SectionHeader>
              <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>          
              <SectionHeader >Location</SectionHeader>
              <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({children}: {children: React.ReactNode}) {
  return <section className="mb-12">
    {children}
  </section>
}

function SectionHeader({children}: {children: React.ReactNode}) {
  return <h2 className="text-2xl mb-4">{children}</h2>
}

function SectionContent({children}: {children: React.ReactNode}) {
  return <div className="text-lg leading-8 text-white/75 max-w-4xl mx-auto ">
    {children}
  </div>
}