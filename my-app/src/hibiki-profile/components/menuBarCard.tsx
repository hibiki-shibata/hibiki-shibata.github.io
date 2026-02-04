function menuBarCard() {
    return (
        <>
            <div id="control-bar-card__menu-button">
                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="rgba(255, 255, 255, 0.807)" stroke-width="2.5"
                            stroke-linecap="round" fill="#00C2E8" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
            <div id="control-bar-card__menu-side-bar">
                <a data-i18n="menuBarHome" href="#">HOME</a>
                <a data-i18n="menuBarTechExpat" href="#tech-expertise-card">Tech Expert</a>
                <a data-i18n="menuBarExperience" href="#job-experience-card">Experiences</a>
                <a data-i18n="menuBarEducation" href="#education-card">Educations</a>
                <a data-i18n="menuBarLang" href="#language-skills-card">Languages</a>
                <a data-i18n="menuBarHobby" href="#hobbies-card">Hobbies</a>
                <a href="#contact-card">Contact</a>
            </div>
        </>
    )
}

export default menuBarCard