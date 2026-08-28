import { Plane, Terminal } from "lucide-react";
import { colors } from "../../data/colors";
import Eyebrow from "../ui/Eyebrow";

export default function Hero() {
    return (
        <>
            <div>
                <Eyebrow>Learning better architecture code</Eyebrow>
                <h1 className="text-4xl sm:text-5xl font-semibold mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Hibiki Shibata
                </h1>
                <p className="text-base mb-6" style={{ color: colors.muted }}>
                    Five years of engineering ops at Wolt,  building the backend services that empower them alongside.
                    Now focusing on the Full-Stack development.
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full" style={{ background: colors.surface, border: `1px solid ${colors.border}`, color: colors.muted }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.accent }} />
                        Tokyo, JP
                    </span>
                    <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full" style={{ background: colors.surface, border: `1px solid ${colors.border}`, color: colors.muted }}>
                        <Plane size={12} /> Open to relocation
                    </span>
                </div>
                <div className="flex gap-3">
                    <a href="https://github.com/hibiki-shibata" target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-md font-medium transition"
                        style={{ background: colors.accent, color: colors.bgAlt }}>
                        GitHub
                    </a>
                    <a href="#projects"
                        className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-md font-medium transition"
                        style={{ border: `1px solid ${colors.border}`, color: colors.text }}>
                        <Terminal size={16} /> View projects
                    </a>
                </div>
            </div>
        </>
    )
}