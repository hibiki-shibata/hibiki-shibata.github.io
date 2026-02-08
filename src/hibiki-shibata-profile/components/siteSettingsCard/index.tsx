import DarkModeToggle from "./darkmodeToggle"
import LanguageToggle from "./languageToggle"
import MenuBar from "./menuBar"
import SocialIcons from "../socialIcons"

function siteSettingsCard() {
    return (
        <div className="flex flex-row gap-4 items-center justify-center p-4 bg-blue-950 text-xs">
            <MenuBar />
            <SocialIcons />
            <DarkModeToggle />
            <LanguageToggle />
        </div>
    )
}

export default siteSettingsCard