<script lang="ts">
const kvantumsQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project((sub) => ({
        _id: true,
        _type: true,
        slug: sub.field('slug.current'),
        name: true,
    }))

type Kvantum = InferResultItem<typeof kvantumsQuery>
</script>

<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { Curriculum } from '~/assets/typescript/types';
import type { InferResultItem } from 'groqd'

const selectedKvantum = ref<Kvantum | undefined>()
const selectedLevel = ref<Curriculum['level'] | undefined>()

const { data: kvantums } = await useSanityQuery<Kvantum[]>(kvantumsQuery.query)
</script>

<template>
    <Section>
        <SectionHeading>
            Учебные программы
        </SectionHeading>

        <SectionContainer>
            <CurriculumListProvider
                #="{ curricula, loadMoreCurricula, reset }"
                :kvantum="selectedKvantum"
                :level="selectedLevel"
            >
                <CurriculaFilter
                    class="grid grid-cols-3 gap-2 mb-4"
                    :kvantums="kvantums!"
                    v-model:selectedKvantum="selectedKvantum"
                    v-model:selected-level="selectedLevel"
                    @reset="reset"
                />

                <template v-if="curricula && curricula?.length > 0">
                    <CurriculaList
                        :curricula="curricula.map((curriculum) => ({
                            _id: curriculum._id,
                            name: curriculum.name,
                            hoursPerYear: curriculum.hoursPerYear,
                            level: curriculum.level,
                            minimalAge: curriculum.minimalAge,
                            kvantum: {
                                _id: curriculum.kvantum._id,
                                _type: curriculum.kvantum._type,
                                icon: curriculum.kvantum.icon.asset.src!,
                                name: curriculum.kvantum.name,
                                slug: curriculum.kvantum.slug,
                            },
                            type: curriculum._type,
                        }))"
                    >
                    </CurriculaList>

                    <div class="grid grid-cols-2 gap-2 mt-4">
                        <ShButton variant="outline" as-child>
                            <NuxtLink to="/curricula/">
                                Ко всем учебным программам
                            </NuxtLink>
                        </ShButton>

                        <ShButton
                            variant="secondary"
                            @click="loadMoreCurricula"
                        >
                            Показать больше
                        </ShButton>
                    </div>
                </template>

                <div class="font-bold font-serif text-4xl text-center" v-else>
                    Учебные программы не найдены
                </div>
            </CurriculumListProvider>
        </SectionContainer>
    </Section>
</template>
