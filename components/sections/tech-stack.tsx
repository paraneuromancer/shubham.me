"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "🎬" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Supabase", icon: "⚡" },
];

const TechCard = ({
    name,
    icon,
}: {
    name: string;
    icon: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex h-full w-40 cursor-pointer items-center justify-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900",
            )}
        >
            <div className="flex flex-col items-center gap-2 p-4">
                <span className="text-3xl">{icon}</span>
                <span className="text-sm font-medium">{name}</span>
            </div>
        </div>
    );
};

export function TechStack() {
    return (
        <section className="py-20 relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-4xl font-bold mb-10 text-center">Software Arsenal</h2>
            <Marquee pauseOnHover className="[--duration:20s]">
                {technologies.map((tech) => (
                    <TechCard key={tech.name} {...tech} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
                {technologies.map((tech) => (
                    <TechCard key={tech.name} {...tech} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </section>
    );
}
