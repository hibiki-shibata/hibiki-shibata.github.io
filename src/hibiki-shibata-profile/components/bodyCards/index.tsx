import TechExperiences from "./techExpertise";
import Experiences from "./experiences";
import Hobbies from "./hobbies";
import Education from "./educations";
import Languages from "./languages";
import Contact from "./contact";

function bodyCards() {
    return (
        <div className="flex flex-col gap-10 px-10 lg:px-20 lg:px-40 py-10 from-blue-950 to-indigo-950 bg-gradient-to-b">
            <TechExperiences />
            <Experiences />
            <Education />
            <Languages />
            <Hobbies />
            <Contact />
        </div>
    )
}

export default bodyCards  