import { colors } from "../../data/colors";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

type SkillGroupProps = {
    title: string;
    note: string;
    dotColor: string;
    items: string[];
};

function SkillGroup({ title, note, dotColor, items }: SkillGroupProps) {
    return (
        <div className="rounded-lg p-5" style={{ background: colors.surface, border: `1px solid ${colors.border}` }}>
            <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full" style={{ background: dotColor }} />
                <h3 className="font-semibold text-[15px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3>
            </div>
            <p className="text-xs mb-4" style={{ color: colors.muted }}>{note}</p>
            <div className="flex flex-wrap gap-2">
                {items.map((s: string) => <Tag key={s}>{s}</Tag>)}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <>
            <Reveal>
                <Eyebrow>Service registry</Eyebrow>
                <h2 className="text-2xl font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Tech expertise</h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-4">
                <Reveal><SkillGroup title="Proficient" note="Daily driver, production-tested" dotColor={colors.accent}
                    items={['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Git', 'Docker / Rancher', 'PostgreSQL']} /></Reveal>
                <Reveal delay={80}><SkillGroup title="Shipped in projects" note="Used to build and deploy double.backend / ride-app" dotColor={colors.accent3}
                    items={['React', 'Redis', 'Kubernetes', 'GCP', 'AWS']} /></Reveal>
                <Reveal delay={160}><SkillGroup title="Building fluency" note="Actively learning" dotColor={colors.accent2}
                    items={['Kotlin', 'Python']} /></Reveal>
            </div>
        </>
    )
}