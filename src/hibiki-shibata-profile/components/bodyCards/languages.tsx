const LANGUAGES = [
    { name: "Japanese", level: "Native", value: 100 },
    { name: "English", level: "Business Proficiency", value: 85 },
    { name: "French", level: "Entry Level", value: 25 },
]

function languages() {
    return (
        <>
            <h2 className="text-xl font-bold text-white mb-6">LANGUAGE</h2>
            <div className="flex flex-col gap-5 text-left max-w-md mx-auto">
                {LANGUAGES.map((lang) => (
                    <div key={lang.name}>
                        <div className="flex justify-between items-baseline mb-1.5">
                            <span className="font-semibold text-white">{lang.name}</span>
                            <span className="text-xs text-rose-200/70">{lang.level}</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-rose-950/60 overflow-hidden">
                            <div
                                className="h-full rounded-full bg-rose-300/80"
                                style={{ width: `${lang.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default languages