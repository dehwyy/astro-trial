//@ts-nocheck =>  cuz astro warns
import Card from "./Card.astro"
class Components {
    get get() {
        return {
            Card
        }
    }
}

export default new Components()