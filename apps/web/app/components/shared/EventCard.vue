<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next';
import type { EventItem } from '~/assets/typescript/types'

defineProps<{
    event: EventItem
}>()
</script>

<template>
    <ShCard class="overflow-hidden">
        <div class="aspect-video">
            <img :src="event.previewImage!.asset!.src!" alt="">
        </div>

        <ShCardHeader class="z-10">
            <ShCardTitle class="font-bold text-2xl leading-heading -tracking-tight">
                {{ event.name }}
            </ShCardTitle>

            <ShCardDescription>
                <span v-if="event.eventSteps!.length > 0">
                    Начало Мероприятия: {{ event.eventSteps![0].date }}
                </span>

                <span v-else>
                    Даты проведения нет
                </span>
            </ShCardDescription>
        </ShCardHeader>

        <ShCardContent class="z-10">

            <ShButton
                as-child
                variant="secondary"
                size="small"
            >
                <NuxtLink
                    :to="`/events/${event.slug?.current}`"
                >
                    Подробнее

                    <ArrowUpRightIcon class="size-4 group-hover/button:translate-x-0.5 transition-all group-hover/button:-translate-y-0.5" />
                </NuxtLink>
            </ShButton>
        </ShCardContent>
    </ShCard>
</template>
