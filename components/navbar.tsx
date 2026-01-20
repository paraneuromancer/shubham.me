"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Home", path: "/" },
    { name: "Now", path: "/now" },
    { name: "Blog", path: "/blog" },
    { name: "Recommendations", path: "/recommendations" },
]

export function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 bg-background/50 backdrop-blur-md border-b border-white/10 supports-[backdrop-filter]:bg-background/20">
            <ul className="flex space-x-6 md:space-x-8 rounded-full px-6 py-2 bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            href={item.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
                                pathname === item.path
                                    ? "text-black dark:text-white font-bold"
                                    : "text-neutral-500 dark:text-neutral-400"
                            )}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
