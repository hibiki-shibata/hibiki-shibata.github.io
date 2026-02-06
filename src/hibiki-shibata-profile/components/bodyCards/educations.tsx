function educations() {
    return (
        <>

            {/* <div class="education-card" id="education-card"> */}
            <div id="education-card">
                {/* <h2 class="education-card__title" data-i18n="educationTitle">EDUCATIONS</h2> */}
                <h2 data-i18n="educationTitle">EDUCATIONS</h2>

                <a href="https://chikuzen.fku.ed.jp/" target="_blank">
                    {/* <a class="education-card__chikuzen-high-school" href="https://chikuzen.fku.ed.jp/" target="_blank"> */}
                    <h3>
                        Fukuoka Prefectural
                        Chikuzen High School ( Fukuoka, Japan )
                        <h4>- General Diploma</h4>
                        {/* <h data-i18n="educationGenDiploma">- General Diploma</h> */}
                    </h3>
                    <p data-i18n="educationYears">April 2018 - April 2021</p>
                </a>

                <blockquote data-i18n="educationDesc">
                    I pursued a general curriculum with a strong focus on the sciences, including Mathematics, Physics,
                    Chemistry, Biology, Computer Science, and English. Throughout my studies, I consistently achieved top
                    academic performance, ranking within the top 10 out of approximately 400 students, with an average
                    placement
                    of 5th overall. I demonstrated particular strength in Geography, Physics, and Japanese, often achieving
                    the
                    highest scores in the entire student body.
                    Through consistent hard work and academic excellence across all subjects, I graduated with honors.
                </blockquote>
            </div>
        </>
    )
}

export default educations