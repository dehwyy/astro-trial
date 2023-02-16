enum UrlCases {
    blogs = "/blogs",
    post = "/post",
    subscriptions = "/subs",
    profile = "/user",
    create = "/create",
}
export default function setNavbarColor(url: string): string {
    if (url.match(UrlCases.blogs)) return "bg-custom-blue"
    if (url.match(UrlCases.post)) return "bg-custom-red"
    if (url.match(UrlCases.subscriptions)) return "bg-custom-midnight"
    if (url.match(UrlCases.profile)) return "bg-custom-dark-purple"
    if (url.match(UrlCases.create)) return "bg-custom-purple"
    return "bg-custom-darkred"
}