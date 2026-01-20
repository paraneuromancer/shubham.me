"use client";
import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import { useScroll, motion } from "framer-motion";

export function Resume() {
    const ref = React.useRef(null);

    return (
        <section className="py-24 bg-neutral-50 dark:bg-black relative" id="resume">
            <div className="max-w-4xl mx-auto px-4">
                <Reveal>
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-4 dark:text-white">Experience & Resume</h2>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                My professional journey and technical expertise.
                            </p>
                        </div>
                        {/* Download button could go here */}
                    </div>
                </Reveal>

                <div className="relative border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/50 overflow-hidden shadow-sm">

                    {/* Top Bar / Decoration */}
                    <div className="h-12 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <div className="ml-4 text-xs text-neutral-400 font-mono">resume.tex</div>
                    </div>

                    {/* Scrollable Area */}
                    <div className="h-[600px] overflow-y-auto p-8 md:p-12 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">

                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-8">
                            <div>
                                <h1 className="text-3xl font-bold dark:text-white mb-2 font-serif tracking-tight">Shubham Pokale</h1>
                                <p className="text-neutral-600 dark:text-neutral-400 font-medium">Software Engineer | AI-Powered Solutions Developer</p>
                                <div className="flex items-center gap-4 mt-4 text-sm text-neutral-500 flex-wrap">
                                    <div className="flex items-center gap-1"><MapPin size={14} /> Pune, India</div>
                                    <Link href="mailto:shubham.pokale2001@gmail.com" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"><Mail size={14} /> Email</Link>
                                    <Link href="tel:+919373776317" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"><Phone size={14} /> +91-9373776317</Link>
                                    <Link href="https://github.com/ShubhamPokale" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"><Github size={14} /> GitHub</Link>
                                    <Link href="https://www.linkedin.com/in/shubham-pokale/" className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"><Linkedin size={14} /> LinkedIn</Link>
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">Professional Summary</h3>
                            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                CDAC certified Software Engineer with expertise in developing and implementing AI-powered solutions. Specialized in RAG development, with proven success in developing RAG Chatbots. 1+ years of experience in full-stack development and LLM integration for production applications serving US clients. Passionate about leveraging cutting-edge AI technologies to solve complex business challenges.
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">Experience</h3>

                            <div className="mb-6">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="font-bold text-lg dark:text-neutral-100">Appzlogic Mobility Solutions</h4>
                                    <span className="text-xs font-mono text-neutral-500">June 2025 – Present</span>
                                </div>
                                <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">Software Engineer | Pune, India</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>Led a team of three in the design and development of <strong>Nova-aid</strong>, a RAG-based, AI-powered customer support chatbot, utilizing Node.js (Fastify), React, MongoDB, and vector databases.</li>
                                    <li>Enhanced model efficiency by 40% through the implementation of AI-driven dynamic chunking.</li>
                                    <li>Developed a real-time chat system leveraging Socket.io and RabbitMQ, supporting concurrent user sessions.</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="font-bold text-lg dark:text-neutral-100">thinkbridge</h4>
                                    <span className="text-xs font-mono text-neutral-500">March 2024 – March 2025</span>
                                </div>
                                <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">Associate Software Engineer | Pune, India</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>Contributed to EROMs, a US Utilities Management project, resolving 50+ user-stories addressing major system inefficiencies.</li>
                                    <li>Developed a multi-client codebase ensuring seamless functionality across diverse requirements using Angular, .NET, and SQL Server.</li>
                                    <li>Spearheaded the deployment of DPP notifications for all clients, impacting 36,000+ accounts.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-8 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">Tech Skills</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="block font-semibold mb-1 text-neutral-900 dark:text-white">Languages</span>
                                    <span className="text-neutral-600 dark:text-neutral-400">JavaScript, TypeScript, Python, C#, HTML, SQL</span>
                                </div>
                                <div>
                                    <span className="block font-semibold mb-1 text-neutral-900 dark:text-white">Frameworks</span>
                                    <span className="text-neutral-600 dark:text-neutral-400">Node.js, Angular, FastAPI, OpenAI API, Langchain, MongoDb</span>
                                </div>
                                <div>
                                    <span className="block font-semibold mb-1 text-neutral-900 dark:text-white">AI Specializations</span>
                                    <span className="text-neutral-600 dark:text-neutral-400">LLM Integration, RAG Chatbot, Vector DBs, AI Agents</span>
                                </div>
                                <div>
                                    <span className="block font-semibold mb-1 text-neutral-900 dark:text-white">Tools</span>
                                    <span className="text-neutral-600 dark:text-neutral-400">Cursor, Postman, Git, Azure DevOps, Docker</span>
                                </div>
                            </div>
                        </div>

                        {/* Projects */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">Key Projects</h3>

                            <div className="mb-4">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-md dark:text-neutral-100 flex items-center gap-2">Nova-Aid <ExternalLink size={12} /></h4>
                                    <span className="text-xs font-mono text-neutral-500">2025</span>
                                </div>
                                <p className="text-xs text-neutral-500 mb-2">RAG, RabbitMQ, LLM-integration, Socket</p>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>Improved model accuracy by 40% with AI-driven dynamic chunking and reduced costs by 60%.</li>
                                    <li>Built backend using Node.js and FastAPI with Gemini 2.0 Flash integration.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-md dark:text-neutral-100 flex items-center gap-2">Driver Drowsiness Detection <ExternalLink size={12} /></h4>
                                    <span className="text-xs font-mono text-neutral-500">2023</span>
                                </div>
                                <p className="text-xs text-neutral-500 mb-2">Python, Raspberry Pi 4B, ML</p>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    <li>IoT system to detect drowsiness and prevent accidents.</li>
                                    <li>Achieved 67% reduction in related accidents in field tests.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">Education</h3>
                            <div className="flex justify-between items-baseline mb-1">
                                <div className="font-bold text-sm">PG Diploma in Advanced Computing</div>
                                <div className="text-xs text-neutral-500">CDAC (2024)</div>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <div className="font-bold text-sm">Bachelor of Computer Engineering</div>
                                <div className="text-xs text-neutral-500">Saraswati College (2023)</div>
                            </div>
                        </div>


                    </div>

                    {/* Fade overlay at bottom to suggest scrolling */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent pointer-events-none"></div>

                </div>
            </div>
        </section>
    );
}
