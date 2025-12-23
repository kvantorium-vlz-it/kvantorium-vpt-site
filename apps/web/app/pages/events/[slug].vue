<script setup lang="ts">
import { eventFragmentFactory, q } from '@kvantoriumvlz/query';
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { EventItem } from '~/assets/typescript/types';

const route = useRoute()

const slug = route.params.slug as string

const query = q
    .star
    .filterByType(DOCUMENT_TYPES.EVENTS)
    .filterBy(`slug.current == "${slug}"`)
    .project(eventFragmentFactory(q))
    .slice(0)

const { data: event } = await useSanityQuery<EventItem>(query.query)

const images = computed(() => {
    if (!event.value) {
        return []
    }

    return event.value.eventSteps?.map((step) => step.images).flat()
})

const formatter = Intl.DateTimeFormat('ru-ru', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
})
</script>

<template>
    <Section>
        <SectionContainer>
            <img
                class="w-full h-96 object-cover"
                :src="event?.previewImage!.asset!.src!"
                alt=""
            >

            <SectionHeading>
                <span v-if="event">
                    {{ event.name }}
                </span>
                <span v-else>
                    Мероприятие не найдено
                </span>
            </SectionHeading>

            <div class="max-w-[100ch] mx-auto">
                <div v-for="step in event!.eventSteps">
                    <h2 class="text-2xl font-bold">
                        {{ step.step }} ({{ formatter.format(new Date(step.date)) }})
                    </h2>

                    <PortableBlocks
                        :blocks="step.description"
                    />
                </div>
            </div>

            <h3 class="text-2xl mx-auto w-fit font-bold mt-6 mb-4">
                Изображения с мероприятия
            </h3>

            <ImagesCarousel
                :images="images!"
            />
        </SectionContainer>
    </Section>
</template>
