<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNewsStore } from '@/store/News'

const store = storeToRefs(useNewsStore())
</script>

<template>
    <PageSection
        v-for="(news) in store.news.value"
        :key="news.id"
    >
        <PageSectionDefaultLayout>
            <template #heading>
                {{ news.name }}
            </template>

            <RichText :blocks="news.content"></RichText>
        </PageSectionDefaultLayout>
    </PageSection>
</template>
