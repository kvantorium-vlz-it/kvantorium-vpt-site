<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKvantumsStore } from '@/store/kvantums'

const kvantum = ref(useKvantumsStore().getKvantumById(useRoute().params.id as string))
</script>

<template>
    <PageSection>
        <PageSectionDefaultLayout v-if="kvantum">
            <template #heading>
                {{ kvantum.name }}
            </template>
            <RichText :blocks="kvantum.description"></RichText>

            <div>
                <BaseButton to="/">
                    Записаться
                </BaseButton>
            </div>
        </PageSectionDefaultLayout>
    </PageSection>
</template>
