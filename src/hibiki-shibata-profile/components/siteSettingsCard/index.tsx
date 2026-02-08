import DarkModeToggle from "./darkmodeToggle"
import LanguageToggle from "./languageToggle"
import MenuBar from "./menuBar"
import SocialIcons from "../socialIcons"

function siteSettingsCard() {
    return (
        <>
            <div className="flex flex-row items-center justify-between px-10 py-2 bg-blue-950 text-xs gap-5">
                <div className="sm:flex hidden">
                    <MenuBar />
                </div>
                <div className="flex gap-3 sm:flex-wrap ">
                    <SocialIcons />
                </div>
                <div className="sm:flex gap-2 hidden">
                    <DarkModeToggle />
                    <LanguageToggle />
                </div>
            </div>
            <div className="sm:hidden gap-2 flex items-center justify-between px-10 py-2 bg-blue-900 text-xs">
                <MenuBar />
                <div className="flex gap-2">
                    <DarkModeToggle />
                    <LanguageToggle />
                </div>
            </div>
        </>)
}

export default siteSettingsCard