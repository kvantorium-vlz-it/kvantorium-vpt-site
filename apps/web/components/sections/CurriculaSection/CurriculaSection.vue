<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import { curriculumFragmentFactory, type KvantumFragment, kvantumFragmentFactory } from '@kvantoriumvlz/query'
import type { Curriculum } from '~/assets/typescript/types';

const selectedKvantumId = ref<string | null>(null)

const curriculaQuery = computed(() => {
    const builder = q
        .star
        .filterByType(DOCUMENT_TYPES.CURRICULUM)
        .project(curriculumFragmentFactory(q))

    if (selectedKvantumId.value !== null) {
        return builder.filter(`kvantum._id == '${selectedKvantumId.value}'`)
    }

    return builder
})

const curricula = computedAsync(async () => {
    const { data } = await useSanityQuery<Curriculum[]>(curriculaQuery.value.query)

    return data.value
})

const kvantumsQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(kvantumFragmentFactory(q))

const { data: kvantumData } = await useSanityQuery<KvantumFragment[]>(kvantumsQuery.query)
</script>

<template>
    <Section>
        <SectionHeading>
            Учебные программы
        </SectionHeading>
        <SectionContainer>
            <ul class="flex gap-2 mb-8">
                <li v-for="kvantum in kvantumData">
                    <ShBadge
                        class="text-lg"
                        :variant="selectedKvantumId === kvantum._id ? 'default' : 'outline'"
                    >
                        <button @click="() => selectedKvantumId = kvantum._id">
                            {{ kvantum.name }}
                        </button>
                    </ShBadge>
                </li>
            </ul>

            <ul
                v-if="(curricula || []).length > 0"
                class="grid grid-cols-3 gap-2 grid-flow-row"
            >
                <li v-for="curriculum in curricula">
                    <CurriculumCard :curriculum="curriculum!"/>
                </li>
            </ul>
            <div class="font-bold font-display text-4xl text-center" v-else>
                Учебные программы не найдены
            </div>
        </SectionContainer>
    </Section>
</template>
