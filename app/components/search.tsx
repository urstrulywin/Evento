"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = inputRef.current?.value.trim();

    if (city) {
      router.push(`/events/${(city)}`);
      // router.push(`/events/${encodeURIComponent(city)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter city name"
        className="mt-4 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-blue-700"
      >
        Search Events
      </button>
    </form>
  );
}
