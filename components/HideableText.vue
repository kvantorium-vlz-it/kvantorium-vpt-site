<script setup lang="ts">
const props = defineProps<{
    text: string;
    allowedLength: number;
    buttonText: string;
}>()

const {
    allowedLength: ALLOWED_LENGTH,
    buttonText,
    text,
} = toRefs(props)

const length = computed(() => text.value.length)
const isMoreThanAllowed = computed(() => length.value > ALLOWED_LENGTH.value)

const isCanVisibleFullText = ref(!isMoreThanAllowed.value)

const visibleText = computed(() => {
    return isCanVisibleFullText.value
        ? text.value
        : text.value.slice(0, ALLOWED_LENGTH.value)
})

const showMore = () => {
    isCanVisibleFullText.value = true
}
</script>

<template>
    {{ visibleText }}
    <button
        v-if="!isCanVisibleFullText"
        :class="$style['text__more-button']"
        @click="showMore"
    >
        {{ buttonText }}
    </button>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.text {
    &__more-button {
        cursor: pointer;

        padding: 0;

        color: rgb(var(--text-body));

        border: none;
        @include typo(body-2-normal);
    }
}
</style>
