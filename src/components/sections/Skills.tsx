import { colors } from "../../data/colors";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

const expertises = [
    {
        "title": "Proficient",
        "description": "Daily driver, working in production.",
        "dotColor": colors.accent,
        "items": ['TypeScript( Node js x Vue )', 'HTML', 'CSS', 'PostgreSQL', 'Git', 'GitHub Action', 'Docker/Rancher']
    },
    {
        "title": "Shipped",
        "description": "Used to build and deployed in Portfolio. Basic yet actively learning.",
        "dotColor": colors.accent3,
        "items": ['Kotlin', 'React( Vite x Tailwind )', 'Redis', 'Kubernetes', 'Terraform', 'GCP Cloud Run']
    },
    {
        "title": "Basic knowledge",
        "description": "Debuged source code and worked with teams.",
        "dotColor": colors.accent2,
        "items": ['Python', 'Kafka', 'Artifact( JFrog )', 'SAST( SonarQube )', 'gRPC', 'AWS EKS']
    },
]

export default function Skills() {
    return (
        <>
            <Reveal>
                <Eyebrow>Skill registry</Eyebrow>
                <h2 className="text-2xl font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Tech expertise</h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-4">
                {expertises.map((p, i) => (
                    <div className="rounded-lg p-5" style={{ background: colors.surface, border: `1px solid ${colors.border}` }}>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full" style={{ background: p.dotColor }} />
                            <h3 className="font-semibold text-[15px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                {p.title}
                            </h3>
                        </div>
                        <p className="text-xs mb-4" style={{ color: colors.muted }}>
                            {p.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {p.items.map((s: string) => <Tag key={s}>{s}</Tag>)}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}