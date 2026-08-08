import SiteSettingsCard from "./siteSettingsCard"

function titleNameCard() {
    return (
        <>
            <SiteSettingsCard />
            <div className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-400 py-16 sm:py-24 px-6 flex flex-col items-center gap-4 text-center">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                    HIBIKI SHIBATA
                </h1>
                <p className="text-base sm:text-lg text-blue-100/80 font-light tracking-wide">
                    Enthusiast of Software Design
                </p>
            </div>
        </>
    )
}

export default titleNameCard