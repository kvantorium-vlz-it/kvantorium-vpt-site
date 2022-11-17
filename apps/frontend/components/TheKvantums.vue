<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKvantumsStore } from '@/store/kvantums'

interface IKvantum {
    name: string
    description: string
    image: string
    to?: string
}

const kvantumsStore = storeToRefs(useKvantumsStore())

const kvantums = computed<IKvantum[]>(() => {
    return kvantumsStore.kvantums.value?.map(kvantum => ({
        name: kvantum.name,
        description: kvantum.shortDescription,
        image: kvantum.icon,
        to: `/kvantum-${kvantum.id}`,
    })) || []
})

const breakpoints = useBreakpoints({
    desktop: 1024,
})
const isDesktop = breakpoints.greater('desktop')

const slidesInRow = computed(() => isDesktop.value ? 2 : 1)
</script>

<template>
    <PageSection>
        <PageSectionDefaultLayout>
            <template #heading>
                Квантумы
            </template>
            <template #subheading>
                Программы Кванториума предназначены для школьников с 5 по 11 класс
            </template>
            <ClientOnly>
                <KvantumsSwiper :kvantums="kvantums" :items-in-row="slidesInRow" />
            </ClientOnly>
        </PageSectionDefaultLayout>
    </PageSection>
</template>
