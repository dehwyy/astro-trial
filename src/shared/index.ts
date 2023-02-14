import setNavbarColor from "./utils/setNavbarColor"
import setNavbarItemColor from "./utils/setNavbarItemColor"
class Shared {
    get utils() {
        return {
            setNavbarColor, setNavbarItemColor
        }
    }
}

export default new Shared()