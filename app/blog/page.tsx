import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"

export const metadata = {
    title: "Blog | Shubham",
    description: "Thoughts on engineering, design, and the web.",
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <div className="max-w-5xl mx-auto px-4 py-20">
            <Reveal>
                <h1 className="text-4xl font-bold mb-10 dark:text-white">Blog</h1>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post, i) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug}>
                        <Reveal delay={i * 0.1}>
                            <Card className="h-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold mb-2">{post.metadata.title}</h2>
                                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">{post.metadata.summary}</p>
                                    </div>
                                    <p className="text-xs text-neutral-500">{post.metadata.publishedAt}</p>
                                </div>
                            </Card>
                        </Reveal>
                    </Link>
                ))}
            </div>
        </div>
    )
}
