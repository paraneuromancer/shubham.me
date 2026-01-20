"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, type UseInViewOptions } from "framer-motion"
import { cn } from "@/lib/utils"

interface RevealProps {
    children: React.ReactNode
    className?: string
    width?: "fit-content" | "100%"
    delay?: number
    duration?: number
    y?: number
    threshold?: number
    once?: boolean
}

export const Reveal = ({
    children,
    className,
    width = "fit-content",
    delay = 0.25,
    duration = 0.5,
    y = 20,
    threshold = 0.5,
    once = true,
}: RevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: once, margin: "0px 0px -50px 0px" })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} className={cn("relative overflow-hidden", width === "100%" ? "w-full" : "", className)}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: y },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    )
}
