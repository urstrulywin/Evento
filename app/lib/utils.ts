import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { EventoEvent } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string) {
  const response = await fetch(
      `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
      {
          next:
          { 
              revalidate: 300 
          }
      }
  );

  if (!response.ok) {
      const text = await response.text();
      console.error("API error:", text);
      throw new Error(`API returned ${response.status}`);
  }

  const events : EventoEvent[] = await response.json();
  console.log(events);
  return events;
}

export async function getEvent(slug : string) {
  const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
  if (!response.ok) {
      const text = await response.text();
      console.error("API error:", text);
      throw new Error(`API returned ${response.status}`);
  }
  const event : EventoEvent = await response.json();
  console.log(event);
  return event;
}