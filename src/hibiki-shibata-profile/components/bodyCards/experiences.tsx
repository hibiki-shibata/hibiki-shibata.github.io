import { useState } from "react";

function experiences() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <>
            <a href="https://wolt.com/" target="_blank">
                <h2 className="text-xl font-bold  text-white hover:text-blue-200 mb-5">
                    Wolt / DoorDash ( Tokyo, Japan ) - Tech Support Engineer
                    <p>March 2022 - Present ( 3 years )</p>
                </h2>
            </a>
            <blockquote className="text-left">
                <ul className="list-disc">
                    <li>
                        <p className="text-xl font-bold">Internal Tool Development:</p>
                        <dt>
                            Designed and implemented internal microservices using TypeScript, Python, and Docker to
                            automate
                            routine tasks and improve operational efficiency.
                        </dt>
                    </li>
                    <li>
                        <p className="text-xl font-bold">System Debugging & Incident Analysis:</p>
                        <dt>
                            Investigated software issues by analyzing system logs using Datadog and other monitoring
                            tools.
                            Clearly documented findings to assist engineering teams in resolving bugs effectively.
                        </dt>
                    </li>
                    <li>
                        <p className="text-xl font-bold">Data Analytics & Reporting:</p>
                        <dt>
                            Responded to business team requests by extracting and analyzing data using SQL queries to
                            support strategic decision-making.
                        </dt>
                    </li>
                    <li>
                        <p className="text-xl font-bold">Technical Support:</p>
                        <dt>
                            Managed and resolved hundreds of technical inquiries and requests from both internal
                            stakeholders and external partners, including bug reports, POS integrations, feature
                            requests,
                            and system behavior clarifications.
                        </dt>
                    </li>
                    <li>
                        <p className="text-xl font-bold">Access & Device Management:</p>
                        <dt>
                            Acted as an administrator for internal tools and systems (e.g., Google Workspace), assessing
                            access requests against compliance and security policies and making access control decisions
                            accordingly.
                        </dt>
                    </li>
                    <li>
                        <p className="text-xl font-bold">Legal & Compliance Support:</p>
                        <dt>
                            Collaborated with law enforcement by securely retrieving and delivering relevant data from
                            internal systems and databases in response to official police inquiries.
                        </dt>
                    </li>
                </ul>
            </blockquote>

            <h3 className="m-4 font-bold text-xl">- Description -</h3>
            <button
                className="mb-3 hover:underline"
                onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Description" : "Show Description"}
            </button>
            {isVisible && (
                <blockquote className="text-left">
                    In this role, I led the transition of the division from a Japan-local operation to integration with the
                    Global team, taking ownership of internal technical support across a wide range of systems and tools.
                    While
                    fulfilling the responsibilities of technical support, I went beyond typical Help Desk duties by actively
                    developing internal tools and microservices (using TypeScript, Python, Docker, and more) to automate
                    tasks
                    and improve operational efficiency.

                    I collaborated closely with global product teams, including software engineers and product leads,
                    handling a
                    broad spectrum of issues from technical troubleshooting to supporting compliance and legal data
                    requests. My
                    daily work required strong technical analysis skills, direct system investigations, and SQL-based data
                    operations.

                    Operating mainly in English, I developed a natural fluency in communicating across multicultural teams.
                    In
                    short, my role served as a technical bridge between business operations and the product engineering
                    teams,
                    enabling smoother collaboration and more efficient workflows through both support and self-driven
                    software
                    development initiatives.
                </blockquote>
            )}



            <div className="my-10">- - - - - - - - - - - - - - - - - - - - -</div>



            <a href="https://wolt.com/"
                target="_blank">
                <h2 className="text-xl font-bold text-white hover:text-blue-200 mb-5">
                    Wolt / DoorDash ( Fukuoka, Japan ) - Support Associate
                    <p>September 2021 - March 2022 ( 8 months ) </p>
                </h2>
            </a>

            <blockquote className="text-left">
                <ul className="list-disc text-lg ">
                    <li >Users support:</li>
                    <li>Courier partners support:</li>
                    <li>Restaurants partners support:</li>
                </ul>
                <p>( Online chat support, Phone support, Japanese/English )</p>
            </blockquote>

            <h3 className="m-4 font-bold text-xl">- Description -</h3>
            <button className="mb-3"
                onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Description" : "Show Description"}
            </button>
            {isVisible && (
                <blockquote className="text-left">
                    I joined Wolt as a Support Associate immediately after graduating, initially with the goal of saving for
                    future university studies. In this full-time role, I was responsible for supporting both customers and
                    company partners, managing a wide range of inquiries, resolving issues, and facilitating effective
                    communication between all parties.

                    Over time, through exposure to Wolt’s culture and talent—particularly within the Product+ organization—I
                    developed a strong interest in the technology and product development space. Motivated and inspired by
                    the
                    work of the Product+ team, I decided to pursue a more technical career path within the company,
                    ultimately
                    applying for and transitioning into a role where I could contribute using my technical skills.
                </blockquote>
            )}

        </>
    )
}

export default experiences