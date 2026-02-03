import fs from "fs"
import path from "path"
import matter from "gray-matter"

// -------------------------
// TypeScript Types
// -------------------------
export type Blog = {
    slug: string
    author: string
    title: string
    description: string
    date: string
    image?: string       // optional, not all blogs may have an image
    tags?: string[]      // optional
}

// -------------------------
// Blog directory path
// -------------------------
const BLOG_DIR = path.join(process.cwd(), "content", "blog")

// -------------------------
// Fetch all blogs
// -------------------------
export function getAllBlogs(): Blog[] {
    return fs.readdirSync(BLOG_DIR).map((file) => {
        const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8")
        const { data } = matter(raw)

        return {
            slug: file.replace(/\.mdx$/, ""),
            title: data.title || "Untitled",
            description: data.description || "",
            date: data.date || "",
            image: data.image || undefined,
            tags: data.tags || [],
        } as Blog
    })
}

// -------------------------
// Fetch single blog by slug
// -------------------------
export function getBlog(slug: string): { content: string; meta: Blog } {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) {
        throw new Error("Blog not found")
    }

    const raw = fs.readFileSync(filePath, "utf-8")
    const { content, data } = matter(raw)

    return {
        content,
        meta: {
            slug,
            title: data.title || "Untitled",
            description: data.description || "",
            date: data.date || "",
            image: data.image || undefined,
            tags: data.tags || [],
        } as Blog,
    }
}
