import { useState, useEffect, useRef } from "react";

export function useInView() {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const prefersReduced =
            window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced) {
            setInView(true);
            return;
        }

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (ref.current) {
            obs.observe(ref.current);
        }

        return () => obs.disconnect();
    }, []);

    return [ref, inView] as const;
}