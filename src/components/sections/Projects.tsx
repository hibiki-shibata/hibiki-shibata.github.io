import { ExternalLink } from "lucide-react";
import { colors } from "../../data/colors";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

const projects = [
    {
        name: 'Double',
        tagline: 'Prediction-market & betting platform',
        stack: ['TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Redis'],
        href: 'https://github.com/hibiki-shibata/double.backend/blob/main/doc/overview.md',
        points: [
            'Repository/service layering with a cached-repository decorator pattern over Redis (cache-aside, pattern-based invalidation).',
            'Atomic conditional-UPDATE patterns to prevent TOCTOU races in wallet withdrawals and bet creation.',
            'Request-scoped tracing via AsyncLocalStorage; Zod-validated Express middleware with RBAC (401 vs 403).',
        ],
    },
    {
        name: 'Ride App',
        tagline: 'Ride-hailing driver platform, cloud-native end to end',
        stack: ['GCP', 'Terraform', 'Cloud Run', 'React', 'TanStack Query'],
        href: 'https://github.com/hibiki-shibata/ride.driver.backend',
        points: [
            'Terraform-provisioned GCP infra: Cloud Run, Cloud SQL over private VPC, Artifact Registry.',
            'Workload Identity Federation for GitHub Actions CI/CD, with Secret Manager for runtime secrets.',
            'React frontend with JWT auth and HTTP-only cookie refresh tokens, deployed via GitHub Pages.',
        ],
    },
    {
        name: 'Stock Profit Simulator',
        tagline: 'Calculate expected stock profits with multi-factors',
        stack: ['React(Vite)', 'Typescript', 'GitHub Page'],
        href: 'https://hibiki-shibata.github.io/stock-profit-calculation/',
        points: [
            'Interactive web app for estimating investment returns, including profit, loss, and percentage gains across different scenarios.',
            'Built with React, TypeScript, and Tailwind CSS, featuring responsive UI components, dynamic calculations, and real-time result updates.',
            'Designed with reusable components and typed data models, focusing on maintainable code, and intuitive UX.',
        ],
    },
];


export default function Projects() {
    return (
        <>
            <Reveal>
                <Eyebrow>Deployed services</Eyebrow>
                <h2 className="text-2xl font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Projects</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
                {projects.map((p, i) => (
                    <a href={p.href} target="_blank" rel="noreferrer">
                        <Reveal key={p.name} delay={i * 100}>
                            <div className="rounded-lg p-6 h-full flex flex-col" style={{ background: colors.surface, border: `1px solid ${colors.border}` }}>
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-lg font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{p.name}</h3>
                                    <ExternalLink size={15} style={{ color: colors.muted }} />
                                </div>
                                <p className="text-sm mb-4" style={{ color: colors.muted }}>{p.tagline}</p>
                                <ul className="space-y-1.5 mb-4 flex-1">
                                    {p.points.map((pt) => (
                                        <li key={pt} className="text-sm flex gap-2" style={{ color: colors.text }}>
                                            <span style={{ color: colors.muted }}>-</span>{pt}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {p.stack.map((s) => <Tag key={s} color={colors.surface2}>{s}</Tag>)}
                                </div>
                            </div>
                        </Reveal>
                    </a>
                ))}
            </div>
        </>
    )
}