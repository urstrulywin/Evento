import Search from "@/components/search";
import H1 from "@/components/h1";
import { Bell, Calendar, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center flex flex-col items-center">
        <H1>
          Discover <span className="text-indigo-600">Amazing Events</span> Near
          You
        </H1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Explore concerts, tech conferences, art exhibitions, food festivals,
          and many more events happening around you.
        </p>

        <div className="mt-8 w-full max-w-xl">
          <Search />
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight">
            Why Use Evento?
          </h2>

          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Everything you need to discover amazing events around you.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex items-start gap-3 border rounded-lg p-5">
            <MapPin className="text-indigo-500 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Find Local Events</h3>
              <p className="text-sm text-muted-foreground">
                Search events happening in cities around the world.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 border rounded-lg p-5">
            <Calendar className="text-indigo-500 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Multiple Categories</h3>
              <p className="text-sm text-muted-foreground">
                Discover concerts, tech talks, art shows and festivals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 border rounded-lg p-5">
            <Bell className="text-indigo-500 mt-1" size={20} />
            <div>
              <h3 className="font-medium">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Never miss upcoming events in your city.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
