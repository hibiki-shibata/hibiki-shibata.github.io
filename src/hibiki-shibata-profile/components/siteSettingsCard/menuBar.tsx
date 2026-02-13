import { useState } from "react";

function menuBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div onClick={() => setMenuOpen(!isMenuOpen)} className="cursor-pointer hover:bg-sky-700 p-2 rounded-full">
                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="rgba(255, 255, 255, 0.807)" stroke-width="2.5"
                            stroke-linecap="round" fill="#00C2E8" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
            {isMenuOpen && (
                <div className="absolute left-0 top-16 bg-sky-900 flex flex-col gap-5 p-4 z-50 text-xl text-white"
                    onClick={() => setMenuOpen(false)}>
                    <a href="#">HOME</a>
                    <a href="#tech-expertise-card">Tech Expert</a>
                    <a href="#experiences-card">Experiences</a>
                    <a href="#educations-card">Educations</a>
                    <a href="#languages-card">Languages</a>
                    <a href="#hobbies-card">Hobbies</a>
                    <a href="#contact-card">Contact</a>
                </div>
            )}
        </>
    )
}

export default menuBar