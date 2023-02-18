//@ts-nocheck
import {navItems} from "../store/navbar.store"
import {useStore} from "@nanostores/solid";
import {Component, For} from "solid-js";
import Shared from "../shared";
const {setNavbarColor} = Shared.utils
interface IProps {
    currentPage: string
}
const Navbar:Component<IProps> = ({currentPage}) => {
    const bgColor = setNavbarColor(currentPage)
    const $navItems = useStore(navItems)
    const id = localStorage.getItem("userId")
    const accountHref = id || "/auth"
    const accountContent = id ? "PROFILE" : "LOGIN"
    return (
        <div class="fixed top-0 left-0 right-0 h-12 bg-[#444444] z-50">
            <div class={bgColor + " h-full"}>
                <div class="select-none mx-auto w-[1000px] max-w-full flex justify-center items-center h-full gap-x-12">
                    <For each={$navItems()}>
                        {item => (
                            <a href={item.href}
                               class={currentPage === item.href ? "text-custom-light-sky font-custom-zekton underline" : "text-custom-red" + "cursor-pointer font-custom-zekton transition-all duration-300"}>
                                {item.text}
                            </a>
                        )}
                    </For>
                    <a href={accountHref}
                       class={currentPage === accountHref ? "text-custom-light-sky font-custom-zekton underline" : "text-custom-red" + "cursor-pointer font-custom-zekton transition-all duration-300"}>
                        {accountContent}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;