import { colors } from "../../data/colors";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const hobbies = [
    { title: 'Food Discovery', desc: 'Discovering a wide variety of cuisines throughout the world travels. Fried frog I ate in Nice was the most shocking one.' },
    { title: 'Fitness', desc: 'I believe in muscles. The human physique is the ultimate art form. Yes it is.' },
    { title: 'Linguistics', desc: 'From English to Francais and more, I cherish the connections with people from a variety of backgrounds.' },
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