<script setup lang="ts">
const { data = [] } = useSanityQuery<{
    question: string
    answer: string
    _key: string
}[]>(groq`*[_type == 'settings'][0].faq`)
</script>

<template>
    <KContainer>
        <KSection
            heading="Часто задаваемые вопросы"
            :class="$style.section"
        >
            <KCollapsibleGroup is="ol" :class="$style.accordion">
                <KCollapsible is="li" v-for="item in data" :key="item._key">
                    <template #trigger>
                        {{ item.question }}
                    </template>

                    {{ item.answer }}
                </KCollapsible>
            </KCollapsibleGroup>
        </KSection>
    </KContainer>
</template>

<style module>
.accordion {
    max-width: 50rem;
    z-index: 4;
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
    z-index: -1;
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
