"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const city = inputRef.current?.value.trim();

    if (!city) return;

    router.push(`/events/${encodeURIComponent(city)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex w-full max-w-md items-center overflow-hidden rounded-lg border shadow-sm"
    >
      <SearchIcon size={18} className="ml-3 text-zinc-400" />

      <input
        ref={inputRef}
        type="text"
        placeholder="Search events by city..."
        aria-label="Search events by city"
        className="flex-1 px-3 py-3 outline-none placeholder:text-zinc-400"
      />

      <button
        type="submit"
        className="px-5 py-3 bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
      >
        Search
      </button>
    </form>
  );
}
