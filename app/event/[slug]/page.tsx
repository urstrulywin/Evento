import H1 from "@/components/h1";
import { Metadata } from "next";
import Image from "next/image";
import { getEvent } from "@/lib/server-utils";

interface EventSlug {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: EventSlug): Promise<Metadata> {
  const { slug } = await params;

  const event = await getEvent(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: event.name,
  };
}

export default async function CityEventPage({ params }: EventSlug) {
  const { slug } = await params;

  // Simulate network delay for demo purposes
  // await sleep(2000);
  const event = await getEvent(slug);

  if (!event) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen px-5 text-center">
        <H1 className="text-4xl mb-4">Event Not Found</H1>
        <p className="text-lg max-w-2xl">
          Sorry, we couldn't find the event you're looking for. Please check the
          URL or return to the homepage.
        </p>
      </main>
    );
  }

  return (
    <main>
      <section className="relative w-full overflow-hidden flex items-center justify-center py-15 md:py-20">
        <Image
          src={event.imageUrl}
          alt={event.name}
          className="object-cover z-0 blur-lg"
          quality={50}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          // height={400}
          priority
        />
        {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}
        <div className="relative z-10 flex gap-6 lg:gap-x-12 text-white/80 flex-col md:flex-row items-center">
          <Image
            src={event.imageUrl}
            alt={event.name}
            className="rounded-xl border-2 border-white/50 object-cover"
            width={300}
            height={200}
            sizes="(max-width: 600px) 100vw, 600px"
            // priority
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            {/* display date of event */}
            <p>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <H1 className="whitespace-nowrap">{event.name}</H1>
            <p className="italic text-xl">
              Organized by <span>{event.organizerName}</span>
            </p>
            <p>{event.location}</p>
            <button className="text-lg p-2 w-full rounded-full bg-white/20 border-white/20 border-2 bg-blur state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center">
        <Section>
          <SectionHeader>About the event</SectionHeader>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeader>Location</SectionHeader>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="m-8">{children}</section>;
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return <div className="text-lg leading-8 max-w-4xl mx-auto ">{children}</div>;
}
