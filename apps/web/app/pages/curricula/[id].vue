<script setup lang="ts">
import { DOCUMENT_TYPES, getCurriculumLevelLabel } from '@kvantoriumvlz/shared';
import { ArrowUpRightIcon } from 'lucide-vue-next';
import { curriculumProjection, q, type CurriculumProjection } from '#shared/sanity';

const router = useRoute()
const id = router.params.id as string

const curriculumQueryBuilder = q
    .star
    .parameters<{ id: string }>()
    .filterByType(DOCUMENT_TYPES.CURRICULUM)
    .filterBy('_id == $id')
    .project(curriculumProjection)
    .slice(0)

const { data: curriculum } = useSanityQuery<CurriculumProjection>(curriculumQueryBuilder.query, { id: id })
</script>

<template>
    <div>
        <Section>
            <SectionContainer v-if="curriculum">
                <SectionHeading>
                    {{ curriculum.name }}
                </SectionHeading>

                <div class="max-w-[80ch] mx-auto">
                    <ShTable class="mb-8">
                        <ShTableBody>
                            <ShTableRow>
                                <ShTableHead>
                                    Педагог
                                </ShTableHead>
                                <ShTableCell>
                                    {{ curriculum.teacher.surname }} {{ curriculum.teacher.name }} {{ curriculum.teacher.patronymic }}
                                </ShTableCell>
                            </ShTableRow>

                            <ShTableRow>
                                <ShTableHead>
                                    Квантум
                                </ShTableHead>
                                <ShTableCell>
                                    <NuxtLink
                                        :to="`/kvantums/${curriculum.kvantum.slug}`"
                                        class="text-blue-light font-bold group items-center inline-flex gap-1"
                                    >
                                        {{ curriculum.kvantum.name }}

                                        <ArrowUpRightIcon
                                            class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all size-4"
                                        />
                                    </NuxtLink>
                                </ShTableCell>
                            </ShTableRow>

                            <ShTableRow>
                                <ShTableHead>
                                    Уровень программы
                                </ShTableHead>
                                <ShTableCell>
                                    {{ getCurriculumLevelLabel(curriculum.level) }}
                                </ShTableCell>
                            </ShTableRow>

                            <ShTableRow>
                                <ShTableHead>
                                    Длительность программы
                                </ShTableHead>
                                <ShTableCell>
                                    {{ curriculum.hoursPerYear.firstHalf! + curriculum.hoursPerYear.secondHalf! }}
                                </ShTableCell>
                            </ShTableRow>

                            <ShTableRow>
                                <ShTableHead>
                                    Минимальный возраст
                                </ShTableHead>
                                <ShTableCell>
                                    {{ curriculum.minimalAge }} лет
                                </ShTableCell>
                            </ShTableRow>

                            <ShTableRow>
                                <ShTableHead>
                                    Расписание
                                </ShTableHead>
                                <ShTableCell>
                                    {{ curriculum.schedule.count }} раза по {{ curriculum.schedule.hours }} часа
                                </ShTableCell>
                            </ShTableRow>

                            <ShTableRow>
                                <ShTableHead>
                                    Количество обучающихся
                                </ShTableHead>
                                <ShTableCell>
                                    {{ curriculum.studentsInGroup }}
                                </ShTableCell>
                            </ShTableRow>
                        </ShTableBody>
                    </ShTable>

                    <PortableBlocks :blocks="curriculum.description" />
                </div>
            </SectionContainer>

            <SectionContainer v-else>
                Учебная программа не найдена
            </SectionContainer>

        </Section>
        <Section>
            <SectionContainer>
                <SectionHeading>
                    Другие учебные программы
                </SectionHeading>

                <CurriculumListProvider
                    #="{ curricula }"
                    :fetch-per-page="3"
                >
                    <div class="grid grid-cols-3 gap-2">
                        <CurriculumCard
                            v-for="curriculum in curricula.map((curriculum) => ({
                                _id: curriculum._id,
                                _type: curriculum._type,
                                hoursPerYear: curriculum.hoursPerYear,
                                kvantum: {
                                    _id: curriculum.kvantum._id,
                                    _type: curriculum.kvantum._type,
                                    icon: curriculum.kvantum.icon.asset.src!,
                                    name: curriculum.kvantum.name,
                                    slug: curriculum.kvantum.slug,
                                },
                                level: curriculum.level,
                                minimalAge: curriculum.minimalAge,
                                name: curriculum.name,
                                type: curriculum._type,
                            }))"
                            :curriculum="curriculum"
                        />
                    </div>
                </CurriculumListProvider>
            </SectionContainer>
        </Section>
    </div>
</template>
