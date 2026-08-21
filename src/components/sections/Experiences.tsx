import { ExternalLink, MapPin } from "lucide-react";
import { colors } from "../../data/colors";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const experience = [
    {
        role: 'Software Engineer',
        company: 'Tech Lab',
        href: 'https://techlab-inc.co.jp',
        period: 'Oct 2026 - Present',
        location: 'Tokyo, Japan',
        duration: '0 yr',
        points: [
            'Starting Soon',
        ],
    },
    {
        role: 'Technical Support Specialist',
        company: 'Wolt (DoorDash / Deliveroo)',
        href: 'https://explore.wolt.com/en/fin/about',
        period: 'Mar 2022 - Apr 2026',
        location: 'Tokyo, Japan',
        duration: '4 yr',
        points: [
            'Designed internal microservices in TypeScript, Python and Docker to automate routine operational tasks.',
            'Investigated production issues via Datadog log analysis, documenting findings for engineering handoff.',
            'Extracted and analyzed data with SQL to support business-team decision making.',
            'Administered access for internal tools (incl. Google Workspace) against compliance and security policy.',
            'Handled secure data retrieval for law-enforcement inquiries under strict legal/compliance procedures as a public company.',
        ],
    },
    {
        role: 'Support Associate',
        company: 'Wolt (DoorDash / Deliveroo)',
        href: 'https://explore.wolt.com/en/fin/about',
        period: 'Sept 2021 - Mar 2022',
        location: 'Fukuoka, Japan',
        duration: '8 mo',
        points: [
            'Supported users, courier partners and restaurant partners across chat and phone, in Japanese and English.',
        ],
    },
];

export default function Experiences() {
    return (
        <>
            <Reveal>
                <Eyebrow>Incident log</Eyebrow>
                <h2 className="text-2xl font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Experience</h2>
            </Reveal>
            <div className="relative pl-6" style={{ borderLeft: `2px solid ${colors.border}` }}>
                {experience.map((e, i) => (
                    <Reveal key={e.role} delay={i * 100}>
                        <div className="mb-10 relative">
                            <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full" style={{ background: colors.accent, boxShadow: `0 0 0 3px ${colors.bg}` }} />
                            <div className="text-xs mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: colors.accent }}>
                                {e.period} - {e.duration}
                            </div>
                            <h3 className="text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{e.role}</h3>
                            <div className="flex items-center gap-2 mb-3.5 text-sm flex-wrap" style={{ color: colors.muted }}>
                                <a href={e.href} target="_blank" >
                                    <span className="flex items-center gap-1">
                                        {e.company}
                                        <ExternalLink size={13} />
                                    </span>
                                </a>
                                <span className="opacity-50">•</span>
                                <span className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    {e.location}
                                </span>
                            </div>

                            <ul className="space-y-1.5">
                                {e.points.map((p) => (
                                    <li key={p} className="text-sm flex gap-2" style={{ color: colors.text }}>
                                        <span style={{ color: colors.muted }}>-</span>{p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>
        </>
    )
}