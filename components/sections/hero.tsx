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
        title: "Silicon Valley",
        link: "https://www.siliconvalley.com/",
        thumbnail: "/images/silicon-valley.jpg",
    },
    {
        title: "Pune",
        link: "#",
        thumbnail: "/images/pune.jpeg",
    },
    {
        title: "Witcher III Wild Hunt",
        link: "https://www.thewitcher.com/us/en/witcher3",
        thumbnail: "/images/geralt-of-revia.jpg",
    },
    {
        title: "that's me",
        link: "https://shubham-me-jade.vercel.app/blog",
        thumbnail: "/images/mypic.jpeg",
    },
    {
        title: "Mass Effect",
        link: "https://www.ea.com/games/mass-effect",
        thumbnail: "/images/mass-effect.jpg",
    },
    {
        title: "Ye le",
        link: "https://app.pixelperfect.quest",
        thumbnail: "/images/cat.jpeg",
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
        title: "",
        link: "https://www.python.org/",
        thumbnail: "/images/python.jpg",
    },
    {
        title: "RAG",
        link: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
        thumbnail: "/images/the-rule-book.jpeg",
    },
    {
        title: "Google AI Labs",
        link: "https://labs.google/",
        thumbnail: "/images/ariane-disaster.png",
    },
    {
        title: "Triumph Thruxton",
        link: "https://www.triumphmotorcycles.in/motorcycles/classic/thruxton/thruxton-400",
        thumbnail: "/images/thruxton.jpeg",
    },
    {
        title: "Say my name",
        link: "https://efreeinvoice.com",
        thumbnail: "/images/breaking-bad.jpg",
    },
];
