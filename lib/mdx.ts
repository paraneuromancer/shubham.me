import fs from "fs"
import path from "path"
import matter from "gray-matter"

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts")

export type Post = {
    slug: string
    metadata: PostMetadata
    content: string
}

export type PostMetadata = {
    title: string
    publishedAt: string
    summary: string
    image?: string
}

export function getPostSlugs() {
    if (!fs.existsSync(POSTS_DIRECTORY)) return []
    return fs.readdirSync(POSTS_DIRECTORY).filter((file) => /\.mdx?$/.test(file))
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.mdx?$/, "")
    const fullPath = path.join(POSTS_DIRECTORY, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
        slug: realSlug,
        metadata: data as PostMetadata,
        content,
    }
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs()
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // Sort posts by date in descending order
        .sort((post1, post2) => (post1.metadata.publishedAt > post2.metadata.publishedAt ? -1 : 1))
    return posts
}
