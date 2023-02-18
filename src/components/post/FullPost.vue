<script lang="ts" setup>
import {useStore} from "@nanostores/vue";
import {posts} from "../../store/posts.store";
import PostPanel from "../../Widgets/Items/PostPanel.vue";
import {marked} from "marked";
interface IProps {
    postId: number
}

const props = defineProps<IProps>()

const allPosts = useStore(posts)
const post = allPosts.value.find(post => post.id === props.postId)
const postContent = marked.parse(post?.content as string)
</script>

<template>
    <div class="w-[90%] py-10 mx-auto h-full">
        <div class="flex flex-col gap-y-4">
            <div class="bg-[#444444] flex items-center gap-x-3 py-2 px-5">
                <div class="w-[30px] h-[30px] rounded-full">
                    <img class="w-full h-full object-cover rounded-full" :src="post.authorImage" alt="image"/>
                </div>
                <div class="font-custom-neuro text-custom-light-blue">{{post.author}}</div>
                <div class="font-custom-zekton text-[10px] pt-1 text-custom-gray">{{post.date}}</div>
            </div>
            <div class="py-4 bg-[#444444] text-white flex flex-col text-center text-3xl font-custom-generis">{{post.title}}</div>
            <div class="p-4 bg-[#444444] flex justify-center gap-x-4">
                <PostPanel :content="post.theme" />
                <template v-for="tag in post.tags">
                    <PostPanel :content="tag" />
                </template>
            </div>
            <div class="bg-[#444444] text-justify text-[14px] font-custom-generis text-white py-2 px-5">
                <div v-html="postContent" class="font-custom-inconsolata">

                </div>
            </div>
        </div>
    </div>
</template>
<style>
h1 {
    font-size: 3rem;
}
h2 {
    font-size: 2.5rem;
}
h3 {
    font-size: 2rem;
}
ul, pre, p {
    font-size: 1rem;
    font-family: "Segoe UI", sans-serif;
}
pre {
    background: #343434;
    padding: 1rem;
}
</style>