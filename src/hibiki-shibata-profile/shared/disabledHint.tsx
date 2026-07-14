function disabledHint(
    // { children, message }: { children: React.ReactNode; message: string }
    { children }: { children: React.ReactNode }
) {
    return (
        <span className="relative group">
            {children}
            <span
                role="tooltip"
                className="absolute opacity-0 group-hover:opacity-70 pointer-events-none right-0 top-14 bg-sky-800 p-2 rounded-sm text-lg"
            >
                This feature is still underdepelopment as of transitioning plain html/css/js to React/Tailwind/Ts
            </span>
        </span>
    )
}

export default disabledHint