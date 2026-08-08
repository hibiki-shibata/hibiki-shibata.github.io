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
                        Science-focused curriculum spanning maths, physics, chemistry, biology, computer science and
                        English. Ranked in the top 10 of ~400 students (avg. 5th), with top scores in geography,
                        physics and Japanese. Graduated with honors.
                    </p>
                </div>
            </Reveal>
    )
}