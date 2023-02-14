<script setup lang="ts">
interface IProps {
    label: string
    value: string
}
defineProps<IProps>()
</script>
<template>
  <div class="flex flex-col justify-center pt-1.5 pb-1 w-[200px] font-custom-zekton">
      <span class="text-[10px]">{{label}}</span>
      <div class="text-xl">{{value}}</div>
  </div>
</template>