<script setup lang="ts">
import { useMouseInElement, useParallax } from '@vueuse/core'
import { computed, ref } from 'vue'
import type { RouterLinkProps } from 'vue-router'

import { ArrowDownIcon } from 'lucide-vue-next'

type Props = Omit<RouterLinkProps, 'to'> & {
    to?: RouterLinkProps['to']
}

defineProps<Props>()

const button = ref<HTMLAnchorElement | null>(null)

const {
    roll,
    tilt,
} = useParallax(button)
const { elementWidth: width, elementHeight: height, isOutside } = useMouseInElement(button)

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
        :to="to"
        class="
            relative
            inline-flex justify-center items-center
            p-4 aspect-square rounded-full
            shadow-lg
            hover:p-28

            after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0
            after:bg-opacity-60 after:mix-blend-overlay after:rounded-full
            after:border-2 after:border-white after:bg-black
            group
            transition-all
        "
    >
        <div
            :style="!isOutside && iconWrapperTranslate"
            :class="{
                ['border-2 p-4 rounded-full bg-black bg-opacity-10']: !isOutside
            }"
        >
            <ArrowDownIcon
                class="text-white"
                :style="!isOutside && iconWrapperRotate"
            />
        </div>
    </NuxtLink>
</template>
