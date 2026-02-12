import DarkModeToggle from "./darkmodeToggle"
import LanguageToggle from "./languageToggle"
import MenuBar from "./menuBar"
import SocialIcons from "../socialIcons"

function siteSettingsCard() {
    return (
        <>
            <div className="flex flex-row items-center justify-between px-10 py-2 bg-blue-950 text-xs gap-5">
                {/* <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-2 bg-blue-950 text-xs gap-5"> */}
                <div className="lg:flex hidden">
                    <MenuBar />
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    <SocialIcons />
                </div>
                <div className="lg:flex gap-2 hidden">
                    <DarkModeToggle />
                    <LanguageToggle />
                </div>
            </div>
            <div className="lg:hidden flex items-center justify-between px-10 py-2 bg-blue-900 text-xs">
                <MenuBar />
                <div className="flex gap-2">
                    <DarkModeToggle />
                    <LanguageToggle />
                </div>
            </div>
        </>)
}

export default siteSettingsCard