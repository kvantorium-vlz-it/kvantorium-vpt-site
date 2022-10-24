<script setup lang="ts">
const group = ref<HTMLDetailsElement>()

const props = defineProps<{
    name: string;
    items: { to?: string; label: string; }[];
}>()

const isActiveGroup = computed<boolean>(() => {
    return props.items.find(item => item.to === useRoute().path) !== undefined
})

onClickOutside(group, () => {
    if (group.value.open) {
        group.value.open = false
    }
})
</script>

<template>
    <details
        :class="{
            [$style.group]: true,
            [$style.active]: isActiveGroup,
        }"
        ref="group"
    >
        <summary :class="$style.group__name">
            {{ name }}
            <nuxt-icon
                name="chevron"
                :class="{
                    [$style.group__chevron]: true,
                }"
            />
        </summary>
        <ul :class="$style.group__list">
            <li
                v-for="(item, index) in items"
                :key="index"
                :class="$style['group__list-item']"
            >
                <the-header-navigation-item
                    :to="item.to"
                    :class="$style.group__item"
                >
                    {{ item.label }}
                </the-header-navigation-item>
            </li>
        </ul>
    </details>
</template>

<style module lang="scss">
@use '@/assets/css/variables' as *;
@use '@/assets/css/mixins' as *;

.group {
    --p-y: 0.25rem;
    --p-x: 0.75rem;
    --br: var(--br-s);

    color: rgb(var(--c-secondary-100));

    @include typo-body-1;

    // Item element
    &__item {
        width: 100%;
    }

    // Name(summary) element
    &__name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
        padding: var(--p-y) var(--p-x);
        border-radius: var(--br);
        color: rgb(var(--c-white));
        font-weight: var(--fw-bold);

        @include typo-body-1-bold;

        cursor: pointer;
    }

    &__chevron {
        transition: ease-out 0.5s;
        transition-property: rotate transform;
        pointer-events: none;
    }

    // List element
    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin: 0;
        margin-top: 0.25rem;
        margin-left: var(--p-x);
        padding-left: 0.5rem;
        list-style: none;
        border-left: 2px solid rgb(var(--c-secondary-100));
    }

    &:not(&[open]) &__list {
        display: none;
    }

    // Change chevron rotating on open/close details
    &[open] &__chevron {
        rotate: 180deg;
    }

    // Active modifier
    &.active &__name {
        background-color: rgb(var(--c-white) 0.1);
    }

    @media (min-width: $min-bp-desktop) {
        position: relative;

        // Name(summary) element if desktop and open
        &[open] &__name {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }

        // List element if desktop
        &__list {
            position: absolute;
            top: 100%;
            right: 0;
            background: var(--g-primary-vertical);
            max-width: 200%;
            width: max-content;
            margin: 0;
            padding: 0.25rem;
            border-radius: var(--br);
            border-left: none;
        }

        // List element if open and have active item
        &[open].active &__list {
            border-top-right-radius: 0;
        }
    }
}
</style>
