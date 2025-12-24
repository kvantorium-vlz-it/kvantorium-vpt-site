<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import type { InferResultItem } from 'groqd';
import { kvantumProjection, q, type KvantumProjection } from '#shared/sanity';

const route = useRoute()

const slug = route.params.slug as string

const query = q
    .star
    .parameters<{ slug: string }>()
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .filterBy(`slug.current == $slug`)
    .project(kvantumProjection)
    .slice(0)

const { data: kvantum } = await useSanityQuery<KvantumProjection>(query.query, { slug })

const allKvantumsQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(kvantumProjection)

const { data: allKvantums } = await useSanityQuery<Array<KvantumProjection>>(allKvantumsQuery.query)
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                <span v-if="kvantum" class="text-5xl">
                    {{ kvantum.name }}
                </span>
                <span v-else>
                    Квантум не найден
                </span>
            </SectionHeading>

            <div v-if="kvantum" class="grid grid-cols-[auto_1fr] gap-4">
                <img
                    class="block mx-auto max-w-64 w-full lg:sticky lg:top-32 sticky top-12"
                    :src="kvantum.icon?.asset?.src!"
                    :alt="`Логотип ${kvantum.name}`"
                >

                <div class="mt-4 mx-auto w-full">
                    <PortableBlocks :blocks="kvantum.description" />
                </div>
            </div>
        </SectionContainer>
    </Section>

    <Section>
        <SectionContainer>
            <SectionHeading>
                Учебные программы
            </SectionHeading>

            <CurriculumListProvider
                #="{ curricula }"
                :kvantum="kvantum!"
                :fetch-per-page="100"
            >
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
            </CurriculumListProvider>
        </SectionContainer>
    </Section>

    <Section>
        <SectionContainer>
            <SectionHeading>
                Другие квантумы
            </SectionHeading>

            <KvantumsCarousel :kvantums="allKvantums || []" />

        </SectionContainer>
    </Section>
</template>
