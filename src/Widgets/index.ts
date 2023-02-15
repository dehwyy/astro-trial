//@ts-nocheck =>  cuz astro warns
import AppWrapper from "./Wrappers/AppWrapper.vue"
import ContentWrapper from "./Wrappers/ContentWrapper.svelte"
import UserField from "./Items/UserField.vue"
import Post from "./Items/Post.react.tsx"
import UserPost from "./Items/UserPost.svelte"
class Widgets {
    get wrappers() {
        return {
            AppWrapper, ContentWrapper
        }
    }
    get items() {
        return {
            UserField, Post, UserPost
        }

    }
}

export default new Widgets()