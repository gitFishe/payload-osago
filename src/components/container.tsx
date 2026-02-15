export function Container ({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 max-w-[1178px]">
            {children}
        </div>
    )
}