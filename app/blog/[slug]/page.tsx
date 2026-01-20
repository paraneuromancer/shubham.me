import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Reveal } from "@/components/ui/reveal"
import Link from "next/link"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    return {
        title: `${post.metadata.title} | Blog`,
        description: post.metadata.summary,
    }
}

const components = {
    Callout: ({ children }: { children: React.ReactNode }) => (
        <div className="p-4 border-l-4 border-neutral-500 bg-neutral-100 dark:bg-neutral-800 my-4">
            {children}
        </div>
    ),
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    return (
        <article className="max-w-3xl mx-auto px-4 py-24 prose dark:prose-invert">
            <Link href="/blog" className="no-underline text-sm opacity-50 hover:opacity-100">← Back to Blog</Link>
            <Reveal>
                <h1 className="mt-8 mb-4 text-3xl md:text-5xl font-bold tracking-tighter">{post.metadata.title}</h1>
            </Reveal>
            <div className="flex justify-between items-center mb-8 text-sm text-neutral-500">
                <p>{post.metadata.publishedAt}</p>
            </div>

            <div className="mt-8">
                <MDXRemote
                    source={post.content}
                    components={components}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [
                                [rehypePrettyCode, { theme: "github-dark" }],
                                rehypeSlug,
                                [rehypeAutolinkHeadings, { behavior: "wrap" }]
                            ]
                        }
                    }}
                />
            </div>
        </article>
    )
}
