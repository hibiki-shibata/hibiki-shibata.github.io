import type { ReactNode } from "react";
import { colors } from "../../data/colors";

type EyebrowProps = {
    children: ReactNode;
};

export default function Eyebrow({ children }: EyebrowProps) {
    return (
        <div
            className="text-xs tracking-widest uppercase mb-3"
            style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: colors.accent,
                letterSpacing: "0.18em",
            }}
        >
            {children}
        </div>
    );
}