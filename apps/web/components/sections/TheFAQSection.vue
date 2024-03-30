<script setup lang="ts">
const { data = [] } = useSanityQuery<{
    _id: string
    answer: string
    question: string
}[]>(groq`
    *[_type == 'frequentlyAskedQuestions'] {
        _id,
        answer,
        question,
    }
`)
</script>

<template>
    <KContainer>
        <KSection
            heading="Часто задаваемые вопросы"
            :class="$style.section"
        >
            <KAccordion
                :class="$style.accordion"
                :items='data?.map((i) => ({ label: i.question, content: i.answer })) || []'
            ></KAccordion>
        </KSection>
    </KContainer>
</template>

<style module>
.accordion {
    max-width: 40rem;
    margin-inline: auto;
}
.section {
    position: relative;
    padding-top: 3.5rem;
}
.section::before {
    content: "";
    position: absolute;
    inset: 0;
    border-top-right-radius: 5rem;
    margin-left: calc(var(--site-margin) * -1);
    padding-top: 2px;
    padding-right: 2px;
    background:linear-gradient(
        var(--c-site-background-darker-2),
        transparent
    );
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
}
</style>
