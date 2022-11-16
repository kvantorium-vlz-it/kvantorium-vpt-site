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
            <KvantumCardsSwiper
                :kvantums="kvantums"
            />
        </PageSectionDefaultLayout>
    </PageSection>
</template>
