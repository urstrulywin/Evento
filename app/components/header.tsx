"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const routes =[ 
    { name: "Home", path: "/" },
    { name: "All Events", path: "/events/all" },
];

export default function Header() {
        const curPath = usePathname();
    return <header className="flex justify-between p-6 bg-gray-200 dark:bg-gray-800 text-lg font-medium">
        <section className="text-white font-bold">
            <Link href="/">Event Platform</Link>
        </section>
        <nav > 
            <ul>
                {routes.map((route) => (
                    <li key={route.path} className={`inline mr-6 ${curPath === route.path ? "font-bold text-white" : "text-white/50 hover:text-white"}`}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>;
}