import { useState } from "react";

function experiences() {
    const [isTokyoVisible, setIsTokyoVisible] = useState(false);
    const [isFukuokaVisible, setIsFukuokaVisible] = useState(false);

    return (
        <div className="flex flex-col gap-12">
            {/* Wolt / DoorDash — Tokyo */}
            <div className="relative pl-6 border-l-2 border-emerald-400/30">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-emerald-950" />

                <a href="https://wolt.com/" target="_blank" rel="noopener noreferrer" className="group inline-block">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                        Wolt / DoorDash <span className="font-normal text-emerald-200/70">— Tokyo, Japan</span>
                    </h3>
                    <p className="text-sm text-emerald-200/60 mt-1">Tech Support Specialist · March 2022 – Present (3 years)</p>
                </a>

                <ul className="mt-6 flex flex-col gap-5 text-left">
                    <li>
                        <p className="font-semibold text-emerald-100">Internal Tool Development</p>
                        <p className="text-emerald-50/70 leading-relaxed mt-1">
                            Designed and implemented internal microservices using TypeScript, Python, and Docker to automate routine tasks and improve operational efficiency.
                        </p>
                    </li>
                    <li>
                        <p className="font-semibold text-emerald-100">System Debugging & Incident Analysis</p>
                        <p className="text-emerald-50/70 leading-relaxed mt-1">
                            Investigated software issues by analyzing system logs using Datadog and other monitoring tools, and documented findings to help engineering teams resolve bugs effectively.
                        </p>
                    </li>
                    <li>
                        <p className="font-semibold text-emerald-100">Data Analytics & Reporting</p>
                        <p className="text-emerald-50/70 leading-relaxed mt-1">
                            Responded to business team requests by extracting and analyzing data using SQL queries to support strategic decision-making.
                        </p>
                    </li>
                    <li>
                        <p className="font-semibold text-emerald-100">Technical Support</p>
                        <p className="text-emerald-50/70 leading-relaxed mt-1">
                            Managed and resolved hundreds of technical inquiries from internal stakeholders and external partners, including bug reports, POS integrations, feature requests, and system behavior clarifications.
                        </p>
                    </li>
                    <li>
                        <p className="font-semibold text-emerald-100">Access & Device Management</p>
                        <p className="text-emerald-50/70 leading-relaxed mt-1">
                            Acted as administrator for internal tools and systems (e.g., Google Workspace), assessing access requests against compliance and security policy.
                        </p>
                    </li>
                    <li>
                        <p className="font-semibold text-emerald-100">Legal & Compliance Support</p>
                        <p className="text-emerald-50/70 leading-relaxed mt-1">
                            Collaborated with law enforcement by securely retrieving and delivering relevant data from internal systems in response to official inquiries.
                        </p>
                    </li>
                </ul>

                <button
                    className="mt-5 text-sm font-medium text-emerald-200 border border-emerald-400/40 rounded-full px-4 py-1.5 hover:bg-emerald-400/10 hover:border-emerald-300 transition-colors"
                    onClick={() => setIsTokyoVisible(!isTokyoVisible)}
                >
                    {isTokyoVisible ? "Hide description" : "Show description"}
                </button>

                {isTokyoVisible && (
                    <blockquote className="text-left mt-4 text-emerald-50/70 leading-relaxed border-l-2 border-emerald-400/20 pl-4">
                        In this role, I led the transition of the division from a Japan-local operation to integration with the Global team, taking ownership of internal technical support across a wide range of systems and tools. While fulfilling the responsibilities of technical support, I went beyond typical Help Desk duties by actively developing internal tools and microservices to automate tasks and improve operational efficiency.
                        <br /><br />
                        I collaborated closely with global product teams, including software engineers and product leads, handling a broad spectrum of issues from technical troubleshooting to supporting compliance and legal data requests. My daily work required strong technical analysis skills, direct system investigations, and SQL-based data operations.
                        <br /><br />
                        Operating mainly in English, I developed a natural fluency in communicating across multicultural teams. In short, my role served as a technical bridge between business operations and the product engineering teams, enabling smoother collaboration through both support and self-driven software development initiatives.
                    </blockquote>
                )}
            </div>

            {/* Wolt / DoorDash — Fukuoka */}
            <div className="relative pl-6 border-l-2 border-emerald-400/30">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-400/50 ring-4 ring-emerald-950" />

                <a href="https://wolt.com/" target="_blank" rel="noopener noreferrer" className="group inline-block">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                        Wolt / DoorDash <span className="font-normal text-emerald-200/70">— Fukuoka, Japan</span>
                    </h3>
                    <p className="text-sm text-emerald-200/60 mt-1">Support Associate · September 2021 – March 2022 (8 months)</p>
                </a>

                <ul className="mt-6 list-disc list-inside text-left text-emerald-50/80 space-y-1">
                    <li>User support</li>
                    <li>Courier partner support</li>
                    <li>Restaurant partner support</li>
                </ul>
                <p className="text-sm text-emerald-200/50 mt-2">Online chat & phone support · Japanese / English</p>

                <button
                    className="mt-5 text-sm font-medium text-emerald-200 border border-emerald-400/40 rounded-full px-4 py-1.5 hover:bg-emerald-400/10 hover:border-emerald-300 transition-colors"
                    onClick={() => setIsFukuokaVisible(!isFukuokaVisible)}
                >
                    {isFukuokaVisible ? "Hide description" : "Show description"}
                </button>

                {isFukuokaVisible && (
                    <blockquote className="text-left mt-4 text-emerald-50/70 leading-relaxed border-l-2 border-emerald-400/20 pl-4">
                        I joined Wolt as a Support Associate immediately after graduating, initially with the goal of saving for future university studies. In this full-time role, I supported both customers and company partners, managing a wide range of inquiries and facilitating communication between all parties.
                        <br /><br />
                        Over time, through exposure to Wolt's culture and talent — particularly within the Product+ organization — I developed a strong interest in technology and product development. Motivated by their work, I pursued a more technical career path within the company, ultimately transitioning into a role where I could contribute using my technical skills.
                    </blockquote>
                )}
            </div>
        </div>
    )
}

export default experiences