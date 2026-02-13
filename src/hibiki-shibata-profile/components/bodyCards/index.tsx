import TechExperiences from "./techExpertise";
import Experiences from "./experiences";
import Hobbies from "./hobbies";
import Education from "./educations";
import Languages from "./languages";
import BodyCardsFrame from "./bodyCardsFrame";

function bodyCards() {
    return (
        <div className="flex flex-col gap-10 px-10 lg:px-20 lg:px-40 py-12 from-blue-950 to-indigo-950 bg-gradient-to-b">
            <BodyCardsFrame BodyCard={TechExperiences} title="TECH EXPERTISE" bgColor="bg-blue-900" id="tech-expertise-card" />
            <BodyCardsFrame BodyCard={Experiences} title="EXPERIENCES" bgColor="bg-green-900" id="experiences-card" />
            <BodyCardsFrame BodyCard={Education} title="EDUCATION" bgColor="bg-purple-900" id="educations-card" />
            <BodyCardsFrame BodyCard={Languages} title="LANGUAGES" bgColor="bg-red-900" id="languages-card" />
            <BodyCardsFrame BodyCard={Hobbies} title="HOBBIES" bgColor="bg-yellow-900" id="hobbies-card" />
        </div>
    )
}

export default bodyCards  