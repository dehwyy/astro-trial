<template>
  <div class="text-sm font-custom-neuro text-white bg-[#333333] w-min py-2 px-5">
      {{content}}
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  content: string
}

defineProps<IProps>()
</script>
