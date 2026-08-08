import type { ReactNode } from "react";
import { colors } from "../../data/colors";

type TagProps = {
    children: ReactNode;
    color?: string;
};

export default function Tag({
    children,
    color = colors.surface2,
}: TagProps) {
    return (
        <span
            className="text-[11px] px-2.5 py-1 rounded-full"
            style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: color,
                color: colors.text,
                border: `1px solid ${colors.border}`,
            }}
        >
            {children}
        </span>
    );
}