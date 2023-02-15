//@ts-nocheck =>  cuz astro warns
import AppWrapper from "./Wrappers/AppWrapper.vue"
import ContentWrapper from "./Wrappers/ContentWrapper.svelte"
import UserField from "./Items/UserField.vue"
import Post from "./Items/Post.react.tsx"
class Widgets {
    get wrappers() {
        return {
            AppWrapper, ContentWrapper
        }
    }
    get items() {
        return {
            UserField, Post
        }

    }
}

export default new Widgets()