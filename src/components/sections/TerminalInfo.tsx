import { useState, useEffect } from 'react';
import { colors } from '../../data/colors';

export default function TerminalInfo() {
    const lines = [
        { p: '$ whoami', o: 'hibiki_shibata' },
        { p: '$ role --current', o: 'Technical Support Specialist, Wolt \u2192 transitioning to Backend Engineering' },
        { p: '$ location', o: 'Tokyo, Japan' },
        { p: '$ contact --list', o: 'github.com/hibiki-shibata' },
    ];
    const [shown, setShown] = useState(0);
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) { setShown(lines.length); return; }
        if (shown >= lines.length) return;
        const full = lines[shown].p + lines[shown].o;
        if (charCount < full.length) {
            const t = setTimeout(() => setCharCount((c) => c + 1), 14);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => { setShown((s) => s + 1); setCharCount(0); }, 220);
            return () => clearTimeout(t);
        }
    }, [charCount, shown]);

    return (
        <div
            className="rounded-lg overflow-hidden w-full"
            style={{ background: colors.bgAlt, border: `1px solid ${colors.border}`, fontFamily: "'JetBrains Mono', monospace" }}
        >
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: `1px solid ${colors.border}` }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#4a5568' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#4a5568' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#4a5568' }} />
                <span className="ml-2 text-[11px]" style={{ color: colors.muted }}>profile.sh</span>
            </div>
            <div className="p-5 text-[13px] sm:text-sm leading-relaxed min-h-[168px]">
                {lines.slice(0, shown).map((l, i) => (
                    <div key={i} className="mb-2.5">
                        <div style={{ color: colors.accent3 }}>{l.p}</div>
                        <div style={{ color: colors.text }}>{'> ' + l.o}</div>
                    </div>
                ))}
                {shown < lines.length && (
                    <div>
                        <div style={{ color: colors.accent3 }}>
                            {charCount <= lines[shown].p.length
                                ? lines[shown].p.slice(0, charCount)
                                : lines[shown].p}
                        </div>
                        {charCount > lines[shown].p.length && (
                            <div style={{ color: colors.text }}>
                                {'> ' + lines[shown].o.slice(0, charCount - lines[shown].p.length)}
                            </div>
                        )}
                    </div>
                )}
                <span
                    className="inline-block w-[7px] h-[15px] align-middle"
                    style={{ background: colors.accent, animation: 'blink 1s step-start infinite' }}
                />
            </div>
        </div>
    );
}