<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import { curriculumFragmentFactory, imageAssetFragmentFactory, type KvantumFragment, kvantumFragmentFactory } from '@kvantoriumvlz/query'
import type { Curriculum } from '~/assets/typescript/types';
import type { InferResultItem } from 'groqd'

const selectedKvantumId = ref<string | null>(null)

const curriculaQuery = computed(() => {
    const builder = q
        .star
        .filterByType(DOCUMENT_TYPES.CURRICULUM)
        .project((sub) => ({
            ...curriculumFragmentFactory(q),
            kvantum: sub.field('kvantum').deref().project(kvantumFragmentFactory(q))
        }))

    if (selectedKvantumId.value !== null) {
        return builder.filter(`kvantum._id == '${selectedKvantumId.value}'`)
    }

    return builder
})

type CurriculaQueryResult = InferResultItem<typeof curriculaQuery.value>

const curricula = computedAsync(async () => {
    const { data } = await useSanityQuery<CurriculaQueryResult[]>(curriculaQuery.value.query)

    return data.value
})

const kvantumsQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(kvantumFragmentFactory(q))

const { data: kvantumData } = await useSanityQuery<KvantumFragment[]>(kvantumsQuery.query)

const visibleCount = ref(6)
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
                class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-6 gap-2 grid-flow-row"
            >
                <li class="desktop:col-span-2" v-for="curriculum in curricula?.slice(0, visibleCount)">
                    <CurriculumCard
                        :curriculum="{
                            _id: curriculum._id,
                            name: curriculum.name,
                            hoursPerYear: curriculum.hoursPerYear,
                            level: curriculum.level,
                            minimalAge: curriculum.minimalAge,
                            kvantum: {
                                _id: curriculum.kvantum._id,
                                icon: curriculum.kvantum.icon.asset.src!,
                                name: curriculum.kvantum.name,
                                slug: curriculum.kvantum.slug,
                            }
                        }"
                    />
                </li>

                <li class="desktop:col-span-3">
                    <ShButton class="w-full"  @click="() => visibleCount += 6">
                        Показать больше
                    </ShButton>
                </li>

                <li class="desktop:col-span-3">
                    <ShButton class="w-full" as-child variant="outline">
                        <NuxtLink to="/curricula/">
                            Ко всем программам
                        </NuxtLink>
                    </ShButton>
                </li>
            </ul>
            <div class="font-bold font-display text-4xl text-center" v-else>
                Учебные программы не найдены
            </div>
        </SectionContainer>
    </Section>
</template>
