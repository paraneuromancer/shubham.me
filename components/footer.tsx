"use client";
import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 dark:text-white">
                            Ready to build something <span className="text-neutral-400">extraordinary?</span>
                        </h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
                            I'm always looking for ambitious projects and interesting conversations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="mailto:shubham.pokale2001@gmail.com"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                            >
                                Say Hello
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-0 flex flex-col gap-4">
                        <div className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Socials</div>
                        <div className="flex gap-4">
                            <SocialLink href="https://github.com/ShubhamPokale" icon={<Github size={20} />} />
                            <SocialLink href="https://www.linkedin.com/in/shubham-pokale/" icon={<Linkedin size={20} />} />
                            <SocialLink href="mailto:shubham.pokale2001@gmail.com" icon={<Mail size={20} />} />
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-neutral-500">
                        &copy; {new Date().getFullYear()} Shubham Pokale. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-sm font-medium text-neutral-500">
                        <Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">Blog</Link>
                        <Link href="/now" className="hover:text-black dark:hover:text-white transition-colors">Now</Link>
                        <Link href="/recommendations" className="hover:text-black dark:hover:text-white transition-colors">Recommendations</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-colors"
        >
            {icon}
        </a>
    )
}
