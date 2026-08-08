import { colors } from "../../data/colors";

const navItems = ['Socials', 'Skills', 'Experience', 'Projects', 'Education', 'Hobies'];

export default function Nav() {
    return (
        <nav
            className="relative sticky top-0 z-20 backdrop-blur"
            style={{ background: `${colors.bg}E6`, borderBottom: `1px solid ${colors.border}` }}
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace", color: colors.accent }}>
                    HIBIKI.PROFILE
                </span>
                <div className="hidden sm:flex gap-6 text-sm" style={{ color: colors.muted }}>
                    {navItems.map((n) => (
                        <a key={n} href={`#${n.toLowerCase()}`} className="hover:opacity-100 transition" style={{ color: colors.muted }}
                            onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
                            onMouseLeave={(e) => e.currentTarget.style.color = colors.muted}>
                            {n}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}