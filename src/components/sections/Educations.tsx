import { colors } from "../../data/colors";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

export default function Educations() {
    return (
        <Reveal>
            <div className="rounded-lg p-6 h-full" style={{ background: colors.surface, border: `1px solid ${colors.border}` }}>
                <Eyebrow>Education</Eyebrow>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Fukuoka Prefectural Chikuzen High School
                </h3>
                <div className="text-xs mb-4" style={{ fontFamily: "'JetBrains Mono', monospace", color: colors.muted }}>
                    General Diploma, Apr 2018 - Apr 2021, Fukuoka, Japan
                </div>
                <p className="text-sm" style={{ color: colors.text }}>
                    Science-focused curriculum mainly spanning maths, physics, chemistry, alongside English.
                    Put efforts on exams' score and kept ranked in the top 1th ~ 6th of 400 students every year.
                </p>
            </div>
        </Reveal>
    )
}