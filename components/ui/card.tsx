"use client"
import { cn } from "@/lib/utils"

export function Card({
    className,
    title,
    icon,
    children,
}: {
    className?: string
    title?: string
    icon?: React.ReactNode
    children?: React.ReactNode
}) {
    return (
        <div
            className={cn(
                "rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-black",
                className
            )}
        >
            <div className="flex items-center gap-2">
                {icon}
                <h3 className="font-bold text-neutral-800 dark:text-neutral-100">{title}</h3>
            </div>
            <div className="mt-2 text-neutral-600 dark:text-neutral-400">
                {children}
            </div>
        </div>
    )
}
