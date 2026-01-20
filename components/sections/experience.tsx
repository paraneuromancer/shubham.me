"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { getExperienceData } from "@/lib/data";
import { cn } from "@/lib/utils";

// Static import for client component to work with data fetching pattern if needed, 
// but since we are using fs in lib/data, we should pass data as props or fetch in a server component wrapper.
// To keep it simple and client-side compatible with our architecture so far, 
// we will create a server component wrapper or just fetch it in the parent page and pass it down.
// Actually, 'fs' won't work in a "use client" component. 
// So I will make this a "use client" component that accepts data, or fetch data in page.tsx.
// Let's modify this to accept data.

export function Experience({ data }: { data: any[] }) {
    return (
        <section className="py-20 bg-neutral-950 relative" id="experience">
            <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    The Timeline of Evolution
                </h2>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                    A visual journey through my professional growth and technical milestones.
                </p>
            </div>

            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {data.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 relative">

                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <div className="flex-none">
                                    <span className="text-xs font-mono text-emerald-500 border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 rounded">
                                        {item.period}
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {item.title}
                                    </h3>
                                    <div className="text-neutral-400 text-sm mb-4">
                                        {item.company} &middot; {item.location}
                                    </div>
                                </div>
                            </div>

                            <div className="text-sm  prose prose-sm dark:prose-invert text-neutral-300">
                                <ul className="list-disc pl-5 space-y-1">
                                    {item.description.map((desc: string, i: number) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {item.skills.map((skill: string, i: number) => (
                                    <span key={i} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md border border-neutral-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </section>
    );
}
