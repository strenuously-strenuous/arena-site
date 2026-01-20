import * as React from "react"
import { cn } from "@/lib/utils"

type IconProps = React.SVGProps<SVGSVGElement>

export function ArrowRightIcon({ className, ...props }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("size-4", className)}
            aria-hidden="true"
            {...props}
        >
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
        </svg>
    )
}
