import TechExperiences from "./techExpertise";
import Experiences from "./experiences";
import Hobbies from "./hobbies";
import Education from "./educations";
import Languages from "./languages";
import Contact from "../../contact";
import BodyCardsFrame from "./bodyCardsFrame";

function bodyCards() {
    return (
        <div className="flex flex-col gap-10 px-10 lg:px-20 lg:px-40 py-12 from-blue-950 to-indigo-950 bg-gradient-to-b">
            <BodyCardsFrame BodyCard={TechExperiences} title="TECH EXPERTISE" bgColor="bg-blue-900" />
            <BodyCardsFrame BodyCard={Experiences} title="EXPERIENCES" bgColor="bg-green-900" />
            <BodyCardsFrame BodyCard={Education} title="EDUCATION" bgColor="bg-purple-900" />
            <BodyCardsFrame BodyCard={Languages} title="LANGUAGES" bgColor="bg-red-900" />
            <BodyCardsFrame BodyCard={Hobbies} title="HOBBIES" bgColor="bg-yellow-900" />
            {/* <BodyCardsFrame BodyCard={Contact} title="CONTACT" bgColor="bg-orange-900" /> */}
        </div>
    )
}

export default bodyCards  