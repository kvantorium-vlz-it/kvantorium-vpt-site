<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next'
import type { News } from '~/assets/typescript/types'

defineProps<{
    news: News[]
}>()
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Новости
            </SectionHeading>

            <ul class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-3 mb-6">
                <li v-for="newsItem in news">
                    <NewsCard :news="newsItem"/>
                </li>
            </ul>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-3">
                <ShButton class="lg:col-start-3">
                    <span>Ко всем новостям</span>

                    <ArrowUpRightIcon />
                </ShButton>
            </div>
        </SectionContainer>
    </Section>
</template>
