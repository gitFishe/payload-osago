"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

type Props = {
    title: string
    children: React.ReactNode
}

export function Collapse({ title, children }: Props) {
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState<number>(0)
    const contentRef = useRef<HTMLDivElement | null>(null)

    // щоб при зміні контенту/шрифтів/розміру вікна висота оновлювалась
    useEffect(() => {
        const el = contentRef.current
        if (!el) return

        const update = () => {
            if (!contentRef.current) return
            setHeight(open ? contentRef.current.scrollHeight : 0)
        }

        update()

        const ro = new ResizeObserver(update)
        ro.observe(el)

        window.addEventListener("resize", update)
        return () => {
            ro.disconnect()
            window.removeEventListener("resize", update)
        }
    }, [open])

    // щоб при відкритті висота ставилась без “миготіння”
    useLayoutEffect(() => {
        const el = contentRef.current
        if (!el) return
        setHeight(open ? el.scrollHeight : 0)
    }, [open, children])

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="h-10 px-4 rounded-xl bg-customBlue text-white font-semibold inline-flex items-center gap-2"
                aria-expanded={open}
            >
                {title}
                <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
            </button>

            <div
                className="overflow-hidden transition-[height] duration-300 ease-out"
                style={{ height }}
            >
                <div
                    ref={contentRef}
                    className={`pt-2 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}