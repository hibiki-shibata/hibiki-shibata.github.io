import { colors } from "../../data/colors";
import Discord from "../svg/socialIcons/Discord";
import Facebook from "../svg/socialIcons/Facebook";
import GitHub from "../svg/socialIcons/Github";
import GitLab from "../svg/socialIcons/Gitlab";
import Instagram from "../svg/socialIcons/Instagram";
import LinkedIn from "../svg/socialIcons/Linkedin";
import Snapchat from "../svg/socialIcons/Snapchat";
import Telegram from "../svg/socialIcons/Telegram";
import TikTok from "../svg/socialIcons/Tiktok";
import Twitch from "../svg/socialIcons/Twitch";
import Twitter from "../svg/socialIcons/Twitter";
import YouTube from "../svg/socialIcons/Youtube";
import Eyebrow from "../ui/Eyebrow";

type Social = {
    name: string;
    username: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
};

const socials: Social[] = [
    {
        name: "GitHub",
        username: "@hibiki-shibata",
        href: "https://github.com/hibiki-shibata/",
        icon: GitHub,
    },
    {
        name: "LinkedIn",
        username: "hibiki-shibata",
        href: "https://www.linkedin.com/in/hibiki-shibata",
        icon: LinkedIn,
    },
    {
        name: "GitLab",
        username: "@hibiki-shibata",
        href: "https://gitlab.com/hibiki-shibata",
        icon: GitLab,
    },
    {
        name: "Discord",
        username: "hibiki.shibata",
        href: "https://discord.gg/ezHdmPaJ/",
        icon: Discord,
    },
    {
        name: "Telegram",
        username: "@hibiki_shibata",
        href: "https://t.me/hibiki_shibata",
        icon: Telegram,
    },
    {
        name: "YouTube",
        username: "@hibiki.shibata",
        href: "https://www.youtube.com/@hibiki.shibata",
        icon: YouTube,
    },
    {
        name: "Twitch",
        username: "hibiki_shibata",
        href: "https://www.twitch.tv/hibiki_shibata",
        icon: Twitch,
    },
    {
        name: "Instagram",
        username: "@hibiki.shibata",
        href: "https://www.instagram.com/hibiki.shibata/",
        icon: Instagram,
    },
    {
        name: "X / Twitter",
        username: "@hibiki_shibata",
        href: "https://x.com/hibiki_shibata",
        icon: Twitter,
    },
    {
        name: "Facebook",
        username: "hibiki.shibata",
        href: "https://www.facebook.com/profile.php?id=100084856399357",
        icon: Facebook,
    },
    {
        name: "TikTok",
        username: "@hibiki_shibata",
        href: "https://www.tiktok.com/@hibiki_shibata",
        icon: TikTok,
    },
    {
        name: "Snapchat",
        username: "@hibiki-shibata",
        href: "https://www.snapchat.com/@hibiki-shibata",
        icon: Snapchat,
    },
];

export default function Socials() {
    return (
        <section id="socials" className="pt-15 pb-21">
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div className="mb-10">
                    <Eyebrow>Connect</Eyebrow>

                    <h2
                        className="text-3xl md:text-4xl font-semibold"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            color: colors.text,
                        }}
                    >
                        Find me online.
                    </h2>

                    <p
                        className="mt-3 max-w-lg text-sm leading-6"
                        style={{ color: colors.muted }}
                    >
                        Connect with me across the platforms where I share
                        projects, ideas, and updates.
                    </p>
                </div>

                {/* Social cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {socials.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    background: colors.surface,
                                    border: `1px solid ${colors.border}`,
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    {/* Icon */}
                                    <div
                                        className="w-10 h-10 shrink-0 rounded-md flex items-center justify-center transition-colors duration-200"
                                        style={{
                                            background: colors.surface2,
                                            border: `1px solid ${colors.border}`,
                                        }}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    {/* Name */}
                                    <div className="min-w-0 flex-1">
                                        <div
                                            className="text-sm font-medium truncate"
                                            style={{
                                                color: colors.text,
                                                fontFamily:
                                                    "'Space Grotesk', sans-serif",
                                            }}
                                        >
                                            {social.name}
                                        </div>

                                        <div
                                            className="text-[10px] truncate mt-0.5"
                                            style={{
                                                color: colors.muted,
                                                fontFamily:
                                                    "'JetBrains Mono', monospace",
                                            }}
                                        >
                                            {social.username}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <span
                                        className="text-sm opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                        style={{ color: colors.accent }}
                                    >
                                        ↗
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}