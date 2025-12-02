import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { EventoEvent } from "@prisma/client";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export async function getEvents(city: string): Promise<EventoEvent[]> {

  //const events = await prisma.eventoEvent.findMany();

  console.log("City:", city);

  const events = await prisma.eventoEvent.findMany({ // findMany never returns null, only an array.
    where: city === "all"
      ? {}   // no filter
      : {
          city: {
            equals: city,
            mode: "insensitive",
          },
        },
    orderBy: { date: "asc" },
  });
  if (events.length === 0) {
    notFound();           // ⬅️ will show /events/not-found.tsx if you have one
  }
  return events;
}

export async function getEvent(slug: string): Promise<EventoEvent | null> {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });
  if(!event) {
    notFound();
  }
  return event;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}