<script lang="ts">
import { fade } from 'svelte/transition';
import {onMount} from "svelte";
let isMounted = false
onMount(() => {
    isMounted = true
})
</script>

{#if isMounted}
    <div transition:fade={{delay: 100, duration: 500}}>
        <slot />
    </div>
{/if}