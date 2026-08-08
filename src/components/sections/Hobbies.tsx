import { colors } from "../../data/colors";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const hobbies = [
    { title: 'Food Exploration', desc: 'Discovering and enjoying a wide variety of international cuisines.' },
    { title: 'Walking & Fitness', desc: 'Regular walking and workouts for confidence, focus and relaxation outside work.' },
    { title: 'Linguistics', desc: 'Continuous learning through communication with people from different backgrounds.' },
];

export default function Hobbies() {
    return (
        <>
            <Reveal>
                <Eyebrow>Off the clock</Eyebrow>
                <h2 className="text-2xl font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Hobbies</h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-4">
                {hobbies.map((h, i) => (
                    <Reveal key={h.title} delay={i * 80}>
                        <div className="rounded-lg p-5 h-full" style={{ background: colors.surface, border: `1px solid ${colors.border}` }}>
                            <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{h.title}</h3>
                            <p className="text-sm" style={{ color: colors.muted }}>{h.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </>
    )
}