//@ts-nocheck =>  cuz astro warns
import AppWrapper from "./Wrappers/AppWrapper.vue"
import ContentWrapper from "./Wrappers/ContentWrapper.svelte"
import UserField from "./Items/UserField.vue"
class Widgets {
    get wrappers() {
        return {
            AppWrapper, ContentWrapper
        }
    }
    get Items() {
        return {
            UserField
        }

    }
}

export default new Widgets()