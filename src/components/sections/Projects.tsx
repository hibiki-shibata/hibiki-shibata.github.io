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
            {
                title: "Architecture",
                content: "Engineered a high-throughput backend service using TypeScript, Express, and PostgreSQL, designed around a feature-based MVC architecture."
            },
            {
                title: "Concurrency & Race Condition Prevention",
                content: "Implemented atomic SQL updates and conditional logic to eliminate TOCTOU (Time-of-Check to Time-of-Use) race conditions in financial wallet transactions and bet creations."
            },
            {
                title: "Caching & Performance Optimization",
                content: "Built a multi-layered caching architecture using Redis and the decorator pattern (Cache-Aside) to significantly reduce database load and query latency."
            },
            {
                title: "Type-Safe ORM & OOP Design",
                content: "Utilized Prisma ORM with strict Object-Oriented Domain Driven principles to maintain clean data contracts and seamless schema management."
            },
        ],
    },
    {
        name: 'Ride App',
        tagline: 'Ride-hailing driver platform, cloud-native end to end',
        stack: ['GCP Cloud Run', 'Terraform', 'React(TypeScript)', 'TanStack Query'],
        href: 'https://github.com/hibiki-shibata/ride.driver.backend',
        points: [
            {
                title: "Architecture",
                content: "Built a RESTful MVC backend microservice for a ride-sharing driver platform using Kotlin and Spring Boot."
            },
            {
                title: "Database & Migrations",
                content: "Designed normalized schemas in PostgreSQL, utilizing Flyway for automated, version-controlled database migrations."
            },
            {
                title: "Infra / Cloud",
                content: "Deployed on GCP(Cloud Run, Cloud SQL) using Terraform-driven as IaC."
            },
            {
                title: "CI/CD & DevSecOps",
                content: "Used GitHub Actions pipelines leveraging GCP Workload Identity Federation for keyless authentication and Google Secret Manager for secure runtime configurations."
            },
            {
                title: "Security & Auth",
                content: "Implemented stateless JWT authentication with secure HTTP-only cookie refresh token."
            }
        ],
    },
    {
        name: 'Stock Profit Simulator',
        tagline: 'Calculate expected stock profits with multi-factors',
        stack: ['React(Vite x Tailwind)', 'Typescript', 'GitHub Page'],
        href: 'https://hibiki-shibata.github.io/stock-profit-calculation/',
        points: [
            {
                title: "UI",
                content: "Interactive web app for estimating investment returns, including profit, loss, and percentage gains across different scenarios."
            },
            {
                title: "Tech Stack",
                content: "Built with React, TypeScript, and Tailwind CSS, featuring responsive UI components, dynamic calculations, and real-time result updates."
            },
            {
                title: "Design",
                content: "Designed with reusable components and typed data models, focusing on maintainable code, and intuitive UX."
            },
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
                                        <li key={pt.title} className="text-sm flex gap-2" style={{ color: colors.text }}>
                                            <span style={{ color: colors.muted }}>-</span>
                                            <div className="flex flex-col">
                                                <span className="font-bold">{pt.title}:</span>
                                                <span style={{ color: colors.muted }}>{pt.content}</span>
                                            </div>
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