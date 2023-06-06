<script setup lang="ts">
import { News } from '~/assets/typescript/types';

defineProps<{
    blocks: News['content']
}>()
</script>

<template>
    <div class="text-[24px] text-[#313340]">
        <SanityContent :blocks="blocks" />
    </div>
</template>
