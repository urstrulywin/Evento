import Search from "@/components/search";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">  
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to the Event Platform
        </h1>
        <p className=" text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Discover events happening in various cities around you.
        </p>
        <Search/>
      </main>
  );
}
