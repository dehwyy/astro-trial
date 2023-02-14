//@ts-nocheck =>  cuz astro warns
import Card from "./Card.astro"
import UserCard from "./user/UserCard.vue"
class Components {
    get get() {
        return {
            Card
        }
    }
    get user() {
        return {
            UserCard
        }
    }
}

export default new Components()