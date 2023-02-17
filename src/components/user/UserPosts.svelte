<script lang="ts">
import {userPosts} from "../../store/user-posts.store";

import UserPost from "../../Widgets/Items/UserPost.svelte";
</script>
<div class="w-[90%] py-10 mx-auto h-full flex gap-y-5 flex-col">
    {#each $userPosts as post}
        <UserPost post={post}/>
    {/each}
</div>