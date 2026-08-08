import { colors } from "../../data/colors";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const languages = [
  { name: 'Japanese', level: 'Native', bars: 5 },
  { name: 'English', level: 'Business Proficiency', bars: 4 },
  { name: 'French', level: 'Entry Level', bars: 1 },
];

export default function Languages() {
    return (
        <Reveal delay={100}>
            <div className="rounded-lg p-6 h-full" style={{ background: colors.surface, border: `1px solid ${colors.border}` }}>
                <Eyebrow>Languages</Eyebrow>
                <div className="space-y-4 mt-1">
                    {languages.map((l) => (
                        <div key={l.name}>
                            <div className="flex justify-between text-sm mb-1.5">
                                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{l.name}</span>
                                <span style={{ color: colors.muted, fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>{l.level}</span>
                            </div>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <span key={n} className="h-1.5 flex-1 rounded-full"
                                        style={{ background: n <= l.bars ? colors.accent : colors.border }} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Reveal>
    )
}