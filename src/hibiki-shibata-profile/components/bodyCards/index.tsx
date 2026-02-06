import TechExperiences from "./techExpertise";
import Experiences from "./experiences";
import Hobbies from "./hobbies";
import Education from "./educations";
import Languages from "./languages";
import Contact from "./contact";

function bodyCards() {
    return (
        <>
            <TechExperiences />
            <Experiences />
            <Education />
            <Languages />
            <Hobbies />
            <Contact />
        </>
    )
}

export default bodyCards  