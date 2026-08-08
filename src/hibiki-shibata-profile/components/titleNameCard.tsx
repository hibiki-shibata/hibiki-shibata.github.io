import SiteSettingsCard from "./siteSettingsCard"

function titleNameCard() {

    return (
        <>
            <div>
                <SiteSettingsCard />
            </div>
            <div className="bg-gradient-to-r from-blue-950 to-blue-400 justify-center py-10 text-2xl flex flex-col gap-10">
                <h1 >HIBIKI SHIBATA</h1>
                <p>Enthusiast Of Softwares Designs
                </p>
            </div>

        </>
    )
}

export default titleNameCard