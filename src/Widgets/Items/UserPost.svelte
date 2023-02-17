<script lang="ts">
export let post: IPost
</script>

<div class="w-full bg-custom-dark-purple text-custom-light-sky p-5 cut-right-bottom-small flex">
    <div class="divide-y-2 divide-custom-purple">
        <div class="font-custom-neuro text-2xl">{post.title}</div>
        <div class="flex gap-x-5">
            <div class="font-custom-generis">- {post.theme}</div>
            <div class="flex gap-x-2">
                {#each post.tags as tag}
                    <div class="font-custom-zekton">-- {tag}</div>
                {/each}
            </div>
        </div>
    </div>
    <div class="ml-auto flex items-center justify-center mr-[50px]">
        <a href={`/post/${post.id}`}>
            <button class="cursor-pointer bg-custom-midnight text-custom-gray py-2 px-6 pt-2.5 text-[17px] cut-left-top-small font-custom-generis">go</button>
        </a>
    </div>
</div>