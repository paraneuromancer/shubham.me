import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { getExperienceData } from "@/lib/data";

export default function Home() {
  const experienceData = getExperienceData();

  return (
    <main className="bg-background relative overflow-hidden">
      <Hero />
      <Experience data={experienceData} />
      <TechStack />
    </main>
  );
}
