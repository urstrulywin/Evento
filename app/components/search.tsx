"use client";
export default function Search() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const city = formData.get("city")?.toString().trim();
        if (city) {
            window.location.href = `/events/${encodeURIComponent(city)}`;
        }
    };
    
  return (
    <form onSubmit = {handleSubmit} className="mt-6 flex w-full ">
        <input
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
  )
}
