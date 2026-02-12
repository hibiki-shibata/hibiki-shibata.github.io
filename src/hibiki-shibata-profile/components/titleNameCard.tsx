import SiteSettingsCard from "./siteSettingsCard"

function titleNameCard() {

    return (
        <>
            <div>
                <SiteSettingsCard />
            </div>
            <div className="bg-gradient-to-r from-blue-950 to-blue-400 justify-center py-10 text-2xl flex flex-col gap-10">
                {/* <svg viewBox="0 0 1500 100">
                <symbol id="s-text">
                    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
                        Hibiki Shibata
                    </text>
                </symbol>
                <use ></use>
                <use ></use>
                <use ></use>
                <use ></use>
                <use ></use>
            </svg> */}
                <h1 >HIBIKI SHIBATA</h1>

                <p>Enthusiast Of Desiging Softwares
                </p>
                {/* <img src="./assets/Kirbynasai-photoaidcom-cropped.png" alt="profile"> */}
            </div>

        </>
    )
}

export default titleNameCard