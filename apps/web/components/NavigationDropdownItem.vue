<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'
import { useFloating, autoUpdate, flip, offset, shift, arrow as floatingArrow } from '@floating-ui/vue'

interface LinkItem {
    label: string
    to?: RouterLinkProps['to']
}

type Variant = 'light' | 'dark'

interface Props {
    label: string
    items: LinkItem[]
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    items: () => [],
    variant: 'dark',
})

const trigger = ref<HTMLElement>()
const floating = ref<HTMLUListElement>()
const arrow = ref<HTMLDivElement>()

const [isOpen, toggleIsOpen] = useToggle(false)

onClickOutside(trigger, () => {
    toggleIsOpen(false)
})

const { floatingStyles, middlewareData } = useFloating(trigger, floating, {
    placement: 'bottom',
    middleware: [shift({ padding: 8 }), flip(), offset(8), floatingArrow({ element: arrow })],
    whileElementsMounted: autoUpdate,
})

const arrowStyles = computed(() => {
    const position = 'position: absolute'
    const left = `left: ${middlewareData.value.arrow?.x || 0}px`
    const top = `top: ${middlewareData.value.arrow?.y || 0}px`

    return `${position}; ${left}; ${top};`
})
</script>

<template>
    <details
        :open="isOpen"
        :class="[$style['fly-out-menu'], $style[variant]]"
        @mouseenter="() => {
            toggleIsOpen(true)
        }"
        @mouseleave="() => {
            toggleIsOpen(false)
        }"
    >
        <summary
            ref="trigger"
            :class="$style.trigger"
        >
            {{ label }}
            <Icon
                name="ph:caret-down"
                :class="$style['trigger-icon']"
            />
        </summary>

        <div
            ref="floating"
            :class="$style.floating"
            :style="floatingStyles"
        >
            <div
                ref="arrow"
                :class="$style.arrow"
                :style="arrowStyles"
            ></div>
            <ul :class="$style.list">
                <li v-for="item, index in items" :key="index">
                    <NavigationItem style="padding: 0;" :="item" variant="dark" />
                </li>
            </ul>
        </div>
    </details>
</template>

<style module>
.fly-out-menu {
    --border-radius: 0.5rem;
    --text-color: none;
    --hover-text-color: none;

    display: inline-block;
    font-size: 1rem;
    font-family: 'Circe';
    color: var(--text-color);
    position: relative;
}
.light {
    --text-color: var(--c-site-background-darker-2);
    --hover-text-color: var(--c-site-background);
}
.dark {
    --text-color: var(--c-site-text-lighter-2);
    --hover-text-color: var(--c-site-text);
}
.trigger {
    cursor: pointer;
    display: flex;
    gap: 0.25rem;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    padding-inline: 1rem;
    padding-block: 0.25rem;
    color: var(--text-color);
}
.trigger:hover {
    color: var(--hover-text-color);
}
.trigger:hover::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 0.5rem;
}
.trigger-icon {
    transition: rotate 0.2s ease-out;
}
.fly-out-menu[open] .trigger-icon {
    rotate: 180deg;
}
.trigger::-webkit-details-marker {
    display: none;
}
.floating {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
    z-index: 2;
    border-radius: var(--border-radius);
}
.list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background-color: var(--c-site-background);
    padding-block: 0.75rem;
    padding-inline: 1.5rem;
    border-radius: var(--border-radius);
}
.arrow {
    z-index: -1;
    width: 1rem;
    aspect-ratio: 1;
    background-color: var(--c-site-background);
    translate: 0 -0.25rem;
    rotate: 45deg;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
}
</style>
