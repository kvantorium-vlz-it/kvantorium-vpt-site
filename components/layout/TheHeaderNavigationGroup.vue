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

    // Item element
    &__item {
        width: 100%;
    }

    // Name(summary) element
    &__name {
        cursor: pointer;

        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: space-between;

        padding: var(--p-y) var(--p-x);

        font-weight: var(--fw-bold);
        color: rgb(var(--c-white));

        border-radius: var(--br);

        @include typo-body-1-bold;
    }

    &__chevron {
        pointer-events: none;

        transition: ease-out 0.5s;
        transition-property: rotate transform;
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

    @include typo-body-1;

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

            width: max-content;
            max-width: 200%;
            margin: 0;
            padding: 0.25rem;

            background: var(--g-primary-vertical);
            border-left: none;
            border-radius: var(--br);
        }

        // List element if open and have active item
        &[open].active &__list {
            border-top-right-radius: 0;
        }
    }
}
</style>
