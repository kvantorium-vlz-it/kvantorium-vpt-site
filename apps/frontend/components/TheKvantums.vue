<script setup lang="ts">
import { useKvantumsStore } from '~/store/kvantums';

const kvantums = await useKvantumsStore().fetchAllKvantuns()

const mainKvantums = computed(() => {
    return kvantums.value.filter((kvantum) => !kvantum.isAdditional)
})
</script>

<template>
    <Section heading="Основные направления">
        <KvantumSlider
            :kvantums="mainKvantums"
        />
    </Section>
</template>
