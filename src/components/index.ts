//@ts-nocheck =>  cuz astro warns
import UserCard from "./user/UserCard.vue"
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
            UserCard
        }
    }
    get posts() {
        return {
            Posts
        }
    }
}

export default new Components()