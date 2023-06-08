<script setup lang="ts">
import { useKvantumsStore } from '~/store/kvantums';

const kvantumsStore = useKvantumsStore()
const mainKvantums = computed(() => kvantumsStore.mainKvantum)
const additionalKvantums = computed(() => kvantumsStore.additionalKvantums)

</script>

<template>
    <Section heading="Наши Квантумы">
        <KvantumsList
            heading="Основные"
            :kvantums="mainKvantums"
        />
        <KvantumsList
            heading="Дополнительные"
            :kvantums="additionalKvantums"
        />
    </Section>
</template>
