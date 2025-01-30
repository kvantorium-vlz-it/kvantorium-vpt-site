<template>
    <Section>
        <SectionHeading>
            Информация
        </SectionHeading>

        <SectionContainer>
            <ul class="grid grid-cols-1 lg:grid-cols-3 gap-4 grid-flow-row">
                <li>
                    <InfoSectionCard>
                        <template #title>
                            О нас
                        </template>

                        Детские технопарки «Кванториум» — это федеральная сеть образовательных площадок, оснащенных высокотехнологичным оборудованием, где дети учатся по принципу проектного обучения: от теории сразу к практике.
                    </InfoSectionCard>
                </li>
                <li>
                    <InfoSectionCard>
                        <template #title>
                            Миссия
                        </template>

                        Содействовать ускоренному техническому развитию детей и реализации научно-технического потенциала российской молодежи, внедряя эффективные модели образования, доступные для тиражирования во всех регионах страны.
                    </InfoSectionCard>
                </li>
                <li>
                    <InfoSectionCard>
                        <template #title>
                            Задачи
                        </template>

                        <ol class="list-decimal list-inside">
                            <li>
                                Развитие творческого потенциала детей
                            </li>
                            <li>
                                Возрождение интереса к техническим профессиям.
                            </li>
                            <li>
                                Воспитание будущих высококлассных специалистов в стратегически важных областях российской науки и техники
                            </li>
                        </ol>
                    </InfoSectionCard>
                </li>
            </ul>
        </SectionContainer>
    </Section>
</template>
