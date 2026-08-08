import { ExternalLink } from "lucide-react";
import { colors } from "../../data/colors";

export default function Footer() {
    return (
        <footer id="contact" className="border-t" style={{ borderColor: colors.border }}>
            <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                    <div className="text-sm mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: colors.accent }}>$ contact --send</div>
                    <p className="text-sm" style={{ color: colors.muted }}>Open to software developer roles. Open to relocation !</p>
                </div>
                <div className="flex gap-3">
                    <a href="https://github.com/hibiki-shibata" target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-md"
                        style={{ background: colors.accent, color: colors.bgAlt, fontWeight: 500 }}>
                        github.com/hibiki-shibata
                    </a>
                    <a href="https://hibiki-shibata.github.io/ride.driver.frontend/consumer/home" target="_blank" rel="noreferrer"
                        className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-md"
                        style={{ border: `1px solid ${colors.border}`, color: colors.text }}>
                        <ExternalLink size={16} /> Portfolio
                    </a>
                </div>
            </div>
        </footer>
    )
}