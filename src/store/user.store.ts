import {atom} from "nanostores";


export const user = atom<IUser> ({
    name: "Andrey Avarov",
    nickname: "Andoff",
    joinData: new Date().toDateString().split(" ").slice(2).join(" "),
    image: "https://sun9-68.userapi.com/impg/-YEwOep1yOHZmV6F3-Z8XC_HP2GDiOoEP6XekA/_OTpcMMEyNI.jpg?size=828x807&quality=95&sign=89373c2f858271c65aae3d19fd2beb59&type=album",
    posts: [
        {title: "hello title"}
    ]
})