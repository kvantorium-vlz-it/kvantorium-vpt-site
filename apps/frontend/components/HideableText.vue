<script setup lang="ts">
const props = withDefaults(defineProps<{
    text: string
    allowedLength: number
    hideButtonText?: string
    showButtonText?: string
}>(), {
    hideButtonText: 'скрыть',
    showButtonText: '...',
})

const emit = defineEmits<{
    (e: 'showFullText'): void
    (e: 'hideFullText'): void
}>()

const {
    allowedLength: ALLOWED_LENGTH,
    text,
} = toRefs(props)

const length = computed(() => text.value.length)
const isMoreThanAllowed = computed(() => length.value > ALLOWED_LENGTH.value)

const isVisibleButtons = computed(() => ALLOWED_LENGTH.value < text.value.length)

const isCanVisibleFullText = ref(!isMoreThanAllowed.value)

const visibleText = computed(() => {
    return isCanVisibleFullText.value
        ? text.value
        : text.value.slice(0, ALLOWED_LENGTH.value)
})

const showMore = () => {
    isCanVisibleFullText.value = true
    emit('showFullText')
}
const hide = () => {
    isCanVisibleFullText.value = false
    emit('hideFullText')
}
</script>

<template>
    <span>
        {{ visibleText }}

        <template v-if="isVisibleButtons">
            <button
                v-if="!isCanVisibleFullText"
                :class="$style.text__button"
                @click="showMore"
            >
                {{ showButtonText }}
            </button>

            <button
                v-else
                :class="$style.text__button"
                @click="hide"
            >
                {{ hideButtonText }}
            </button>
        </template>
    </span>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.text {
    @include typo(body-2-normal);
    color: rgb(var(--text-body));

    &__button {
        font-size: inherit;
        font-weight: inherit;
        text-decoration: underline;

        cursor: pointer;

        padding: 0;

        color: inherit;

        background: none;
        border: none;
    }
}
</style>
