enum UrlCases {
    blogs = "/blogs",
    subscriptions = "/subs",
    profile = "/user",
    create = "/create",
}
export default function setNavbarColor(url: string): string {
    switch (url) {
        case UrlCases.blogs:
            return "bg-custom-blue"
        case UrlCases.subscriptions:
            return "bg-custom-midnight"
        case UrlCases.profile:
            return "bg-custom-dark-purple"
        case UrlCases.create:
            return "bg-custom-purple"
        default:
            return "bg-custom-darkred"

    }
}