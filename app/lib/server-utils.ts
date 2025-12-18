import "server-only";

import { EventoEvent, Prisma } from "@prisma/client";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export const getEvents = unstable_cache (async (city: string, page = 1): Promise<{ events: EventoEvent[]; eventCount: number }> => {

  //const events = await prisma.eventoEvent.findMany(); // findMany never returns null, only an array.

  console.log("City:", city);

  const where:Prisma.EventoEventWhereInput = 
    city === "all"
    ? {}   // no filter
    : {
        city: {
          equals: city,
          mode: "insensitive",
        },
      };

  const [events, eventCount] = await Promise.all([
    prisma.eventoEvent.findMany({
      where : where,
      orderBy: { date: "asc" },
      take: 6,
      skip: (page - 1) * 6,
    }),
    prisma.eventoEvent.count({ where }),
  ]);
  
  if (eventCount === 0) {
    notFound();           // ⬅️ will show /events/not-found.tsx if you have one
  }
  return {
    events,
    eventCount
  }
});

export const getEvent = unstable_cache(async (slug: string): Promise<EventoEvent | null> => {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });
  if(!event) {
    notFound();
  }
  return event;
});