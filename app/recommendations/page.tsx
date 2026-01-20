import { getRecommendationsData } from "@/lib/data"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
    title: "Recommendations | Shubham",
    description: "Things I recommend.",
}

export default function RecommendationsPage() {
    const data = getRecommendationsData()

    if (!data) return <div>Loading...</div>

    return (
        <div className="max-w-5xl mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold mb-10 dark:text-white">Recommendations</h1>

            <div className="space-y-12">
                <Section title="Books" items={data.books} />
                <Section title="Games" items={data.games} />
                <Section title="Equipment" items={data.equipment} />
            </div>
        </div>
    )
}

function Section({ title, items }: { title: string, items: any[] }) {
    if (!items || items.length === 0) return null
    return (
        <section>
            <h2 className="text-2xl font-bold mb-6 dark:text-neutral-200">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, i) => (
                    <Link href={item.link || "#"} key={i} className="block group h-full">
                        <Card className="h-full group-hover:border-neutral-400 dark:group-hover:border-neutral-700 transition-colors flex flex-col p-0 overflow-hidden">
                            {item.image && (
                                <div className="relative w-full h-48 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                {item.author && <p className="text-sm text-neutral-500 mb-2">{item.author}</p>}
                                {item.developer && <p className="text-sm text-neutral-500 mb-2">{item.developer}</p>}
                                <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    )
}
