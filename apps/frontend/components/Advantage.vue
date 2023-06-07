<script setup lang="ts">
withDefaults(defineProps<{
    advantage: string
    isEven?: boolean
}>(), {
    isEven: true
})
</script>

<template>
    <div
        class="font-bold text-[26px] p-[15px] group-even:bg-[#DEE2FF] group-odd:bg-[#C5CDFF] rounded-[24px]"
    >
        {{ advantage }}
    </div>
</template>
