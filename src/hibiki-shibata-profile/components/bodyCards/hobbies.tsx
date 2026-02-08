function hobbies() {
    return (
        <>
            <div className="bg-pink-900 p-5 rounded-2xl shadow-lg text-white">
                {/* <div class="hobbies-card" id="hobbies-card"> */}
                <h2 data-i18n="hobbiesTitle">HOBBIES</h2>
                {/* <h2 class="hobbies-card__title" data-i18n="hobbiesTitle">HOBBIES</h2> */}
                <ul>
                    <li>
                        <a data-i18n="hobbiesFoodTitle">Food Exploration: </a>
                        {/* <a class="hobbies-card__hobby-name" data-i18n="hobbiesFoodTitle">Food Exploration: </a> */}
                        <dt data-i18n="hobbiesFood">Passionate about discovering and enjoying a wide variety of
                            international
                            cuisines.</dt>
                    </li>
                    <li>
                        <a data-i18n="hobbiesWalkTitle">Walking and Fitness: </a>
                        {/* <a class="hobbies-card__hobby-name" data-i18n="hobbiesWalkTitle">Walking and Fitness: </a> */}
                        <dt data-i18n="hobbiesWalk"> Regular walking and workouts are essential to maintaining my
                            confidence,
                            focus, and relaxation outside of work.</dt>
                    </li>
                    <li>
                        <a data-i18n="hobbiesStudyTitle">Linguistic:</a>
                        {/* <a class="hobbies-card__hobby-name" data-i18n="hobbiesStudyTitle">Linguistic:</a> */}
                        <dt data-i18n="hobbiesStudy">
                            Committed to continuous learning, and looking to expand my perspectives through communication with
                            diverse people.
                        </dt>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default hobbies