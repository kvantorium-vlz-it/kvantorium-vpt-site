<script setup lang="ts">
const props = withDefaults(defineProps<{
    name: string
    items: { to?: string; label: string }[]
    absolute?: boolean
}>(), {
    absolute: false,
})

const group = ref<HTMLDetailsElement>()

const isActiveGroup = computed<boolean>(() => {
    return props.items.find(item => item.to === useRoute().path) !== undefined
})

onClickOutside(group, () => {
    if (group.value!.open) {
        group.value!.open = false
    }
})
</script>

<template>
    <details
        ref="group"
        :class="{
            [$style.group]: true,
            [$style.active]: isActiveGroup,
            [$style.absolute]: absolute,
        }"
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
                <navigation-item
                    :to="item.to"
                    :class="$style.group__item"
                >
                    {{ item.label }}
                </navigation-item>
            </li>
        </ul>
    </details>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.group {
    --p-y: #{rem(4px)};
    --p-x: #{rem(12px)};
    --br: var(--br-s);
    @include from-breakpoint(desktop) {
        display: inline-block;
    }

    /* stylelint-disable-next-line order/order */
    color: rgb(var(--c-white));

    // Item element
    &__item {
        width: 100%;
    }

    // Name(summary) element
    &__name {
        cursor: pointer;

        display: flex;
        gap: #{rem(8px)};
        align-items: center;
        justify-content: space-between;

        padding: var(--p-y) var(--p-x);

        color: rgb(var(--c-white));

        border-radius: var(--br-8);
        @include typo(body-1-normal);
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
        gap: #{rem(4px)};

        margin: 0;
        margin-top: #{rem(4px)};
        margin-left: var(--p-x);
        padding-left: #{rem(8px)};

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
        background-color: rgb(var(--c-white) / 10%);
        @include typo(body-1-bold);
    }
    @include typo(body-1-normal);

    &.absolute {
        position: relative;
    }

    // Name(summary) element if desktop and open
    &[open].absolute &__name {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    // List element if desktop
    &.absolute &__list {
        position: absolute;
        top: 100%;
        right: 0;

        width: max-content;
        max-width: 200%;
        margin: 0;
        padding: #{rem(4px)};

        background: var(--g-primary-vertical);
        border-left: none;
        border-radius: var(--br-8);
    }

    // List element if open and have active item
    &[open].absolute.active &__list {
        border-top-right-radius: 0;
    }
}
</style>
