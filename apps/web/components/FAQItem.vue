<script setup lang="ts">
interface Props {
    question: string
    answer: string
}

defineProps<Props>()
</script>

<template>
    <details :class="$style.faq">
        <summary :class="$style.question">
            {{ question }}

            <Icon
                name="ph:caret-down"
                :class="$style.icon"
            />
        </summary>

        <div :class="$style.answer">
            {{ answer }}
        </div>
    </details>
</template>

<style module>
.faq {
    font-size: 1.25rem;
    font-family: 'Circe';
    line-height: 1.3;
    border-image: linear-gradient(
        to right,
        transparent,
        var(--c-site-background-darker-2),
        transparent
    );
    border-image-slice: 30;
    border-bottom: 1px solid;
    padding-inline: 4rem;
    position: relative;
}
.faq:first-child {
    border-top: 1px solid;
}
.question {
    color: var(--c-site-text-lighter-2);
    text-align: center;
    padding-block: 0.75rem;
    list-style: none;
}
.faq > .question::-webkit-details-marker {
   display: none;
}
.faq[open] .icon {
    rotate: 180deg;
}
.icon {
    position: absolute;
    right: 1rem;
    color: var(--c-site-text);
}
.answer {
    color: var(--c-site-text);
    text-align: center;
    padding-bottom: 0.75rem;
    padding-top: 0.25rem;
}
</style>
