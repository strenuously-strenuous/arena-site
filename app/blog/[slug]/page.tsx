export const dynamic = "force-static"

import { getAllBlogs, getBlog } from "@/lib/blog"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

export function generateStaticParams() {
    return getAllBlogs().map((blog) => ({
        slug: blog.slug,
    }))
}

// ✅ MUST be async
export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params // ✅ unwrap params

    try {
        const { content, meta } = getBlog(slug)

        return (
            <article className="prose max-w-4xl mx-auto px-4 py-10">
                <h1>{meta.title}</h1>
                <p className="text-sm text-muted-foreground">
                    {meta.date} · {meta.author}
                </p>

                <MDXRemote source={content} />
            </article>
        )
    } catch {
        notFound()
    }
}
