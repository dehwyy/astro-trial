<script lang="ts">
import Widgets from "../../Widgets";
import {userPosts} from "../../store/user-posts.store";
const { UserPost} = Widgets.items

</script>
<div class="w-[90%] py-10 mx-auto h-full flex gap-y-5 flex-col">
    {#each $userPosts as post}
        <UserPost post={post}/>
    {/each}
</div>