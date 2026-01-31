import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export function getAllBlogs() {
    return fs.readdirSync(BLOG_DIR).map((file) => {
        const raw = fs.readFileSync(
            path.join(BLOG_DIR, file),
            "utf-8"
        )

        const { data } = matter(raw)

        return {
            slug: file.replace(/\.mdx$/, ""),
            ...data,
        }
    })
}

export function getBlog(slug: string) {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

    if (!fs.existsSync(filePath)) {
        throw new Error("Blog not found")
    }

    const raw = fs.readFileSync(filePath, "utf-8")
    const { content, data } = matter(raw)

    return { content, meta: data }
}