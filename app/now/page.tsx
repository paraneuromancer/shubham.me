import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { getNowData } from "@/lib/data";

export const metadata = {
    title: "Now | What I'm doing",
    description: "A snapshot of what I am currently into.",
};

export default function NowPage() {
    const data = getNowData();

    if (!data) return <div>Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-10 dark:text-white">Now</h1>
            <p className="mb-10 text-neutral-600 dark:text-neutral-400">
                What I'm reading, watching, listening to, and building this month.
            </p>

            <BentoGrid className="max-w-4xl mx-auto align-start">
                {data.reading && data.reading.map((item: any, i: number) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.author}
                        header={<Skeleton bg={item.image ? `url(${item.image})` : undefined} />}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
                {data.watching && data.watching.map((item: any, i: number) => (
                    <BentoGridItem
                        key={`watch-${i}`}
                        title={item.title}
                        description={item.platform}
                        header={<Skeleton bg={item.image ? `url(${item.image})` : "bg-neutral-100 dark:bg-neutral-800"} />}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

const Skeleton = ({ bg }: { bg?: string }) => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 bg-cover bg-center"
        style={{ backgroundImage: bg }}
    />
);
