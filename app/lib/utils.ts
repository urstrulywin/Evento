import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { EventoEvent } from "@prisma/client";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export async function getEvents(city: string): Promise<EventoEvent[]> {
  //const events = await prisma.eventoEvent.findMany();
  const events = await prisma.eventoEvent.findMany({
    where: { 
      city: {  
        equals: city=== "all" ? undefined : city,
        // equals: capitalizeFirstLetter(city),
        mode: "insensitive",
      }
    },
    orderBy: { date: "asc" },
  });
  return events;
}

export async function getEvent(slug: string): Promise<EventoEvent | null> {
  const event =  prisma.eventoEvent.findUnique({
    where: { slug },
  });
  if(!event) {
    return notFound();
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