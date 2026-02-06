function titleCard() {

    return (
        <>
            <svg viewBox="0 0 1500 100">
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
            </svg>

            <h1 >HIBIKI SHIBATA</h1>

            <div >
                <div>
                    <p data-i18n="currentPositionName">Enthusiast Of Desiging Softwares
                    </p>
                </div>
                <div id="title-card__subtitle__avatar">
                    {/* <img src="./assets/Kirbynasai-photoaidcom-cropped.png" alt="profile"> */}
                    <div aria-hidden="true"></div>
                </div>
            </div>
            {/* < MenuBar />  */}
        </>
    )
}

export default titleCard