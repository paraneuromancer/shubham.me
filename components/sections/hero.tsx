"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
    return (
        <div className="relative">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <HeroParallax products={products} />
        </div>
    );
}

export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail: "https://picsum.photos/id/10/800/800",
    },
    {
        title: "Mass Effect",
        link: "https://www.ea.com/games/mass-effect",
        thumbnail: "/images/mass-effect.jpg",
    },
    {
        title: "Witcher III Wild Hunt",
        link: "https://www.thewitcher.com/us/en/witcher3",
        thumbnail: "/images/geralt-of-revia.jpg",
    },
    {
        title: "CSE",
        link: "https://www.youtube.com/channel/UCTzjnbxgPIHYD0_qDBvNOSQ",
        thumbnail: "/images/work-desk.jpeg",
    },
    {
        title: "Silicon Vallet",
        link: "https://www.siliconvalley.com/",
        thumbnail: "/images/silicon-valley.jpg",
    },
    {
        title: "Ye le",
        link: "https://app.pixelperfect.quest",
        thumbnail: "/images/ye le.jpeg",
    },
    {
        title: "IIT Bombay",
        link: "https://www.iitb.ac.in/",
        thumbnail: "/images/IITB.jpg",
    },
    {
        title: "Knight Capital Incidence",
        link: "blog/Knight-Capital",
        thumbnail: "/images/Knight-Capital.jpg",
    },
    {
        title: "CDAC",
        link: "https://www.cdac.in/",
        thumbnail: "/images/CDAC.png",
    },
    {
        title: "Normandy",
        link: "https://www.thinkbridge.com/",
        thumbnail: "/images/Normany.jpeg",
    },
    {
        title: "Python",
        link: "https://www.python.org/",
        thumbnail: "/images/python.jpg",
    },
    {
        title: "RAG",
        link: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
        thumbnail: "/images/rag.png",
    },
    {
        title: "Google AI Labs",
        link: "https://labs.google/",
        thumbnail: "/images/google-event.jpeg",
    },
    {
        title: "Appzlogic",
        link: "https://invoker.lol",
        thumbnail: "/images/second-office-appzlogic.jpeg",
    },
    {
        title: "Sunflower Field",
        link: "https://efreeinvoice.com",
        thumbnail: "/images/breaking-bad.jpg",
    },
];
