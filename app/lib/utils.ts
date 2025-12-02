import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import type { EventoEvent } from "@prisma/client"; // type-only import

type EventoEventDTO = {
  id: number;
  name: string;
  slug: string;
  description: string;
  city: string;
  location: string;
  date: string; // API returns strings
  organizerName: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export async function getEvents(city: string): Promise<EventoEvent[]> {
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("API error:", text);
    throw new Error(`API returned ${res.status}`);
  }

  const data = (await res.json()) as EventoEventDTO[];

  // Convert date strings to Date objects and return correct shape
  const events: EventoEvent[] = data.map((e) => ({
    ...e,
    date: new Date(e.date),
    createdAt: new Date(e.createdAt),
    updatedAt: new Date(e.updatedAt),
  }));

  return events;
}

export async function getEvent(slug: string): Promise<EventoEvent> {
  const res = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);

  if (!res.ok) {
    const text = await res.text();
    console.error("API error:", text);
    throw new Error(`API returned ${res.status}`);
  }

  const e = (await res.json()) as EventoEventDTO;
  return {
    ...e,
    date: new Date(e.date),
    createdAt: new Date(e.createdAt),
    updatedAt: new Date(e.updatedAt),
  };
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

// export async function getEvents(city: string) {
//   const response = await fetch(
//       `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
//       {
//           next:
//           { 
//               revalidate: 300 
//           }
//       }
//   );

//   if (!response.ok) {
//       const text = await response.text();
//       console.error("API error:", text);
//       throw new Error(`API returned ${response.status}`);
//   }

//   const events : EventoEvent[] = await response.json();
//   console.log(events);
//   return events;
// }

// export async function getEvent(slug : string) {
//   const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
//   if (!response.ok) {
//       const text = await response.text();
//       console.error("API error:", text);
//       throw new Error(`API returned ${response.status}`);
//   }
//   const event : EventoEvent = await response.json();
//   console.log(event);
//   return event;
// }