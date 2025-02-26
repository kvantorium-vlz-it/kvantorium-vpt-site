<!-- TODO: bind to CMS -->

<template>
    <Section class="from-secondary to-primary bg-gradient-to-br rounded-2xl">
        <SectionContainer>
            <SectionHeading class="text-white">
                Часто задаваемые вопросы
            </SectionHeading>

            <FaqAccordion
                class="max-w-[80ch] mx-auto"
            >
                <FaqAccordionItem
                    value="q1"
                    title="С какого возраста можно записываться в кванториум?"
                >
                    На основных образовательных программах (в квантумах) занимаются ребята с 5 по 11 класс.
                </FaqAccordionItem>
                <FaqAccordionItem
                    value="q2"
                    title="Как часто проходят занятия?"
                >
                    Занятия проходят 2 раза в неделю по 2 академических часа.
                </FaqAccordionItem>
                <FaqAccordionItem
                    value="q3"
                    title="Как распределяются группы?"
                >
                    Группы формируются в зависимости от школьного расписания детей, возраста, уровня подготовки.
                </FaqAccordionItem>
            </FaqAccordion>
        </SectionContainer>
    </Section>
</template>

<style module>
.faq-mask::after {
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}
</style>
