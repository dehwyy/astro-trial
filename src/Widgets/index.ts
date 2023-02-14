//@ts-nocheck =>  cuz astro warns
import AppWrapper from "./Wrappers/AppWrapper.vue"
import ContentWrapper from "./Wrappers/ContentWrapper.svelte"
class Widgets {
    get wrappers() {
        return {
            AppWrapper, ContentWrapper
        }
    }
}

export default new Widgets()