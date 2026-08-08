import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type RevealProps = {
    children: ReactNode;
    delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(14px)",
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}