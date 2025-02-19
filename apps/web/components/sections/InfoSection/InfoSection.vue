<script setup lang="ts">
const data = [
    {
        id: 1,
        title: "О нас",
        content: 'Детские технопарки «Кванториум» — это федеральная сеть образовательных площадок, оснащенных высокотехнологичным оборудованием, где дети учатся по принципу проектного обучения: от теории сразу к практике.',
    },
    {
        id: 2,
        title: 'Миссия',
        content: 'Содействовать ускоренному техническому развитию детей и реализации научно-технического потенциала российской молодежи, внедряя эффективные модели образования, доступные для тиражирования во всех регионах страны.',
    },
    {
        id: 3,
        title: 'Задачи',
        items: [
            'Развитие творческого потенциала детей',
            'Возрождение интереса к техническим профессиям',
            'Воспитание будущих высококлассных специалистов в стратегически важных областях российской науки и техники',
        ],
    }
];
</script>

<template>
    <Section>
        <SectionHeading>
            Информация
        </SectionHeading>

        <SectionContainer>
            <div class="max-w-[100ch] mx-auto">

            <Timeline :items="data" >
                <template
                    v-for="(item, index) in data"
                    :key="item.id + index"
                    #[item.id]
                >
                    <div
                        class="relative w-full pl-20 pr-4"
                        v-motion-slide-visible-once-right
                    >
                        <h3 class="text-3xl text-foreground -tracking-tight font-serif">
                            {{ item.title }}
                        </h3>

                        <div class="font-serif text-gray-dark text-md leading-body -tracking-tight">
                            <p v-if="!item.items">
                                {{ item.content }}
                            </p>

                            <ol v-else class="list-decimal pl-[1.5ch]">
                                <li v-for="i in item.items">
                                    {{ i }}
                                </li>
                            </ol>
                        </div>
                    </div>
                </template>
            </Timeline>
            </div>
        </SectionContainer>
    </Section>
</template>
