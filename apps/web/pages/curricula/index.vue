<script setup lang="ts">
import { curriculumFragmentFactory } from '@kvantoriumvlz/query';
import { CURRICULUM_LEVEL, DOCUMENT_TYPES, getCurriculumLevelLabel } from '@kvantoriumvlz/shared';
import type { InferResultType } from 'groqd';
import { q } from '~/assets/typescript/groqd.client';
import type { Curriculum } from '~/assets/typescript/types';

const curriculaQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.CURRICULUM)
    .project(curriculumFragmentFactory(q))

const { data: curricula } = useSanityQuery<Curriculum[]>(curriculaQuery.query)

const kvantumsQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project({ _id: true, name: true })

const { data: kvantums } = useSanityQuery<InferResultType<typeof kvantumsQuery>>(kvantumsQuery.query)

const visibleCurricula = computed(() => {
    const isKvantumFiltering = typeof selectedKvantum.value !== 'undefined'
    const isLevelFiltering = typeof selectedLevel.value !== 'undefined'

    return (curricula.value || []).filter((curriculum) => {
        if (!isKvantumFiltering && !isLevelFiltering) {
            return true
        }

        if (isKvantumFiltering && !isLevelFiltering) {
            return curriculum.kvantum._id === selectedKvantum.value
        }

        if (!isKvantumFiltering && isLevelFiltering) {
            return curriculum.level === selectedLevel.value
        }

        if (isKvantumFiltering && isLevelFiltering) {
            return curriculum.kvantum._id === selectedKvantum.value && curriculum.level === selectedLevel.value
        }
    })
})

const objectLevels = Object.keys(CURRICULUM_LEVEL) as (keyof typeof CURRICULUM_LEVEL)[]

const selectedLevel = ref(undefined)
const selectedKvantum = ref(undefined)

const clearFilter = () => {
    selectedLevel.value = undefined
    selectedKvantum.value = undefined
}

const visibleCount = ref(6)
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Учебные программы
            </SectionHeading>

            <form
                @submit.prevent="() => {}"
                @reset.prevent="clearFilter"
                class="mb-8"
            >
                <h2 class="text-2xl font-bold mb-2">Фильтры</h2>

                <div class=" flex gap-2">
                    <select
                        v-model="selectedLevel"
                        name="level"
                        id="level"
                        placeholder="Уровень программы"
                        class="border px-4 py-2 rounded-lg"
                    >
                        <option
                            disabled
                            selected
                            :value="undefined"
                        >
                            Уровень программы
                        </option>

                        <option
                            v-for="level in objectLevels"
                            :value="CURRICULUM_LEVEL[level]"
                        >
                            {{ getCurriculumLevelLabel(CURRICULUM_LEVEL[level]) }}
                        </option>
                    </select>
                    <select
                        v-model="selectedKvantum"
                        name="kvantum"
                        id="kvantum"
                        class="border px-4 py-2 rounded-lg"
                    >
                        <option :value="undefined" disabled selected>
                            Квантум
                        </option>
                        <option
                            v-for="kvantum in kvantums"
                            :value="kvantum._id"
                        >
                            {{ kvantum.name }}
                        </option>
                    </select>

                    <ShButton type="reset">Сброс</ShButton>
                </div>
            </form>

            <ul
                class="grid grid-cols-6 gap-2"
                v-if="visibleCurricula.length > 0"
            >
                <li
                    class="col-span-2"
                    v-for="curriculum in visibleCurricula.slice(0, visibleCount)"
                >
                    <CurriculumCard :curriculum="curriculum" />
                </li>

                <li class="col-span-6">
                    <ShButton
                        class="w-full"
                        @click="() => visibleCount += 6"
                    >
                        Показать больше
                    </ShButton>
                </li>
            </ul>

            <div v-else>
                Учебных программ по заданным фильтрам не найдено
            </div>
        </SectionContainer>
    </Section>
</template>
