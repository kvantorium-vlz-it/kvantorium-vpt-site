<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router';

type Props = Omit<RouterLinkProps, 'to'> & {
    to?: RouterLinkProps['to']
}

defineProps<Props>()

const button = ref<HTMLAnchorElement | null>(null)

const {
    roll,
    tilt,
} = useParallax(button)
const { toggleCursor } = useGlobalCursor()
const { elementWidth: width, elementHeight: height } = useMouseInElement(button)

const iconX = computed(() => tilt.value * width.value / 4)
const iconY = computed(() => -roll.value * height.value / 4)

const iconWrapperTranslate = computed(() => {
    return `translate: ${iconX.value}px ${iconY.value}px;`
})

const iconWrapperRotate = computed(() => {
    const hypot = Math.hypot(deltaYToBottom.value, deltaXToCenter.value)
    const cosBetweenLines = deltaYToBottom.value / hypot
    const sign = Math.sign(deltaXToCenter.value)
    const angle = sign * Math.acos(cosBetweenLines) * 90

    return `rotate: ${angle}deg;`
})
const deltaYToBottom = computed(() => height.value / 2 - iconY.value)
const deltaXToCenter = computed(() => iconX.value)
</script>

<template>
    <NuxtLink
        ref="button"
        @mouseover="() => toggleCursor(false)"
        @mouseout="() => toggleCursor(true)"
        :to="to"
        :class="$style.button"
        title="Ко всем направлениям"
    >
        <!-- <div style="position: fixed; top: 50px; left: 50px; color: white;">
            icon: {{ iconX }}|{{ iconY }}<br>
            wrapper: {{ width }}|{{ height }}<br>
            deltas: {{ deltaXToCenter }}|{{ deltaYToBottom }}
        </div> -->
        <Icon
            name="ph:arrow-down"
            :class="[$style['out-icon']]"
            size="100%"
        />
        <div
            :class="$style['icon-wrapper']"
            :style="[iconWrapperTranslate, iconWrapperRotate]"
        >
            <Icon
                name="ph:arrow-down"
                :class="$style.icon"
                size="100%"
            />
        </div>
    </NuxtLink>
</template>

<style module>
.button {
    position: relative;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    aspect-ratio: 1;
    border-radius: 100vw;
    width: 4rem;
    padding: 1rem;

    transition: all 0.1s ease-out;
}
.button:hover {
    width: 18rem;
    padding: 7rem;
    box-shadow: 0 0 2rem 0.5rem rgba(0, 0, 0, 0.3);
}
.button::after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: hsla(0, 0%, 0%, 0.6);
    mix-blend-mode: overlay;

    border-radius: 100vw;
    border: 2px solid var(--c-site-background);
}
.button .icon-wrapper {
    display: none;
}
.button:hover .icon-wrapper {
    display: flex;
}
.out-icon {
    width: 2.5rem;
    aspect-ratio: 1;
    color: var(--c-site-background);
}
.button:hover > .out-icon {
    display: none;
}
.icon {
    width: 2.5rem;
    aspect-ratio: 1;
    color: var(--c-site-background);
}
.icon-wrapper {
    padding: 1rem;
    border: 2px solid var(--c-site-background);
    border-radius: 100vw;
    width: fit-content;
    aspect-ratio: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
}
</style>
