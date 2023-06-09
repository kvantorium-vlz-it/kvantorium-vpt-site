<script setup lang="ts">
import { useKvantumsStore } from '~/store/kvantums';

const kvantumsStore = useKvantumsStore()

const kvantums = kvantumsStore.mainKvantum
</script>

<template>
    <Section heading="Основные направления">
        <KvantumSlider
            :kvantums="kvantums"
        />
    </Section>
</template>
