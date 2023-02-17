/// <reference types="astro/client" />
interface IUser {
    name?: string
    nickname?: string
    joinData: string
    image?: string
    posts?: Array<unknown>
}
interface IPost {
    id: string | number
    tags: string[]
    title: string
    theme: string
    content: string
    author: string
    authorId: number,
    authorImage: string
    previewImage?: string
    previewText: string
    date: string
}