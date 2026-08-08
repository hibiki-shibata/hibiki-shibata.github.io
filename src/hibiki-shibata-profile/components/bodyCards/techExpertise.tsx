import SoftwareIcons from '../softwareIcons'

const PROFICIENT = ["Kotlin", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "Git", "Docker / Rancher", "PostgreSQL"]
const FAMILIAR = ["Java", "Go", "Redis", "React JS", "Apache Kafka", "MongoDB", "Kubernetes", "AWS", "GCP"]

function techExpertise() {
    return (
        <div className="flex flex-col gap-8">
            <div className="grid sm:grid-cols-2 gap-8 text-left">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-2 w-2 rounded-full bg-blue-300" />
                        <h3 className="text-sm font-bold tracking-widest text-blue-100">PROFICIENT</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {PROFICIENT.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 text-sm rounded-full bg-blue-800/60 border border-blue-500/40 text-blue-50"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-2 w-2 rounded-full bg-blue-300/40" />
                        <h3 className="text-sm font-bold tracking-widest text-blue-200/70">FAMILIAR</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {FAMILIAR.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 text-sm rounded-full bg-blue-950/60 border border-blue-700/40 text-blue-200/80"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-6 border-t border-blue-700/30">
                <SoftwareIcons />
            </div>
        </div>
    )
}

export default techExpertise