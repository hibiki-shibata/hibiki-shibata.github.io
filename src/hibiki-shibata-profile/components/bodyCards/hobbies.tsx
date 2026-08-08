const HOBBIES = [
    {
        title: "Food Exploration",
        description: "Passionate about discovering and enjoying a wide variety of international cuisines.",
    },
    {
        title: "Walking & Fitness",
        description: "Regular walking and workouts are essential to maintaining my confidence, focus, and relaxation outside of work.",
    },
    {
        title: "Linguistics",
        description: "Committed to continuous learning, and looking to expand my perspective through communication with diverse people.",
    },
]

function hobbies() {
    return (
        <ul className="flex flex-col gap-5 text-left">
            {HOBBIES.map((hobby) => (
                <li key={hobby.title} className="border-l-2 border-amber-400/40 pl-4">
                    <p className="font-bold text-amber-100">{hobby.title}</p>
                    <p className="text-amber-50/70 leading-relaxed mt-1">{hobby.description}</p>
                </li>
            ))}
        </ul>
    )
}

export default hobbies