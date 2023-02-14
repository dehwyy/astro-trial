import {atom} from "nanostores";

interface INavItems {
    href: string
    text: string
}

export const navItems = atom<INavItems[]>([
    {href: "/", text: "POSTS"},
    {href: "/blogs", text: "BLOGS (BETA)"},
    {href: "/subs", text: "SUBSCRIPTIONS"},
    {href: "/user", text: "PROFILE"},
])