<script setup lang="ts">
import { curriculumFragmentFactory } from '@kvantoriumvlz/query';
import { DOCUMENT_TYPES, getCurriculumLevelLabel } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { Curriculum } from '~/assets/typescript/types';

const router = useRoute()
const id = router.params.id as string

const curriculumQueryBuilder = q
    .star
    .filterByType(DOCUMENT_TYPES.CURRICULUM)
    .filter(`_id == "${id}"`)
    .project(curriculumFragmentFactory(q))
    .slice(0)

const { data: curriculum } = useSanityQuery<Curriculum>(curriculumQueryBuilder.query)
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
                                    {{ curriculum.kvantum.name }}
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
    </div>
</template>
