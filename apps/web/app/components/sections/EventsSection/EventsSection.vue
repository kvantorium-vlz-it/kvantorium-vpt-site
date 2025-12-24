<script lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q, eventsProjection, type EventsProjection } from '#shared/sanity';

const eventsQuery = q
    .star.filterByType(DOCUMENT_TYPES.EVENTS)
    .project(eventsProjection)
</script>

<script setup lang="ts">
const { data: events } = await useSanityQuery<EventsProjection[]>(eventsQuery.query)
</script>

<template>
    <Section>
        <SectionHeading>
            Мероприятия
        </SectionHeading>

        <SectionContainer>
            <ul class="grid grid-cols-3">
                <li v-for="event in events">
                    <EventCard
                        :event="event"
                    />
                </li>
            </ul>
        </SectionContainer>
    </Section>
</template>
