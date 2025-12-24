<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import type { InferResultType } from 'groqd'
import { kvantumProjection, q, type KvantumProjection } from '#shared/sanity'

const kvantumsQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(kvantumProjection)

const { data: kvantums } = useSanityQuery<Array<KvantumProjection>>(kvantumsQuery.query)

const selectedLevel = ref()
const selectedKvantum = ref()
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Учебные программы
            </SectionHeading>

            <CurriculumListProvider
                v-if="kvantums"
                :kvantum="selectedKvantum"
                :level="selectedLevel"
                #="{ curricula, reset, loadMoreCurricula }"
            >
                <CurriculaFilter
                    class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-2 mb-2"
                    :kvantums="kvantums"
                    v-model:selected-level="selectedLevel"
                    v-model:selected-kvantum="selectedKvantum"
                    @reset="reset"
                />

                    <CurriculaList
                        :curricula="curricula.map((curriculum) => ({
                            _id: curriculum._id,
                            _type: curriculum._type,
                            hoursPerYear: curriculum.hoursPerYear,
                            kvantum: {
                                _id: curriculum.kvantum._id,
                                _type: curriculum.kvantum._type,
                                icon: curriculum.kvantum.icon?.asset?.src!,
                                name: curriculum.kvantum.name,
                                slug: curriculum.kvantum.slug,
                            },
                            level: curriculum.level,
                            minimalAge: curriculum.minimalAge,
                            name: curriculum.name,
                            type: curriculum._type,
                        }))"
                    />

                    <ShButton
                        @click="loadMoreCurricula"
                        class="w-full mt-4"
                        variant="secondary"
                    >
                        Показать больше
                    </ShButton>
            </CurriculumListProvider>
        </SectionContainer>
    </Section>
</template>
