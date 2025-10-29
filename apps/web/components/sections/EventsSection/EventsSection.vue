<script lang="ts">
import { eventFragmentFactory, q } from '@kvantoriumvlz/query';
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import type { EventItem } from '~/assets/typescript/types';

const eventsQuery = q
    .star.filterByType(DOCUMENT_TYPES.EVENTS)
    .project(eventFragmentFactory(q))
</script>

<script setup lang="ts">
const { data: events } = await useSanityQuery<EventItem[]>(eventsQuery.query)
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
