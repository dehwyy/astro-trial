//@ts-nocheck =>  cuz astro warns
import UserCard from "./user/UserCard.vue"
import UserPosts from "./user/UserPosts.svelte"
import Navbar from "./Navbar.tsx"
import Posts from "./posts/Posts.react.tsx"
class Components {
    get get() {
        return {
            Navbar
       }
    }
    get user() {
        return {
            UserCard, UserPosts
        }
    }
    get posts() {
        return {
            Posts
        }
    }
}

export default new Components()