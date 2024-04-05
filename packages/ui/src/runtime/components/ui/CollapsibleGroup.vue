<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from '#imports';
import type { UnionStringLiteralsWithString } from '../../assets/ts/types';

interface Props {
    is?: UnionStringLiteralsWithString<'ol' | 'ul' | 'div'>
    isMultiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    is: 'div',
    isMultiple: false,
})

const root = ref<HTMLElement>()

const details = computed(() => [...root.value?.children || []]
    .map((child) => child.querySelector('details'))
    .filter((element) => element !== null) as HTMLDetailsElement[]
)

function toggleHandler(event: Event) {
    event.preventDefault()

    if (props.isMultiple) {
        return
    }

    const targetDetails = event.target as HTMLDetailsElement

    if (!targetDetails.open) {
        return
    }

    details.value
        .filter((details) => details !== targetDetails)
        .forEach((details) => details!.open = false)
}

function registerEvents() {
    details.value
        .forEach((details) => details.addEventListener('toggle', toggleHandler))
}

function unregisterEvents() {
    details.value
        .forEach((details) => details.removeEventListener('toggle', toggleHandler))
}

onMounted(registerEvents)
onBeforeUnmount(unregisterEvents)
</script>

<template>
    <component ref="root" :is="is" :class="$style.group">
        <slot></slot>
    </component>
</template>

<style module>
.group {
    display: flex;
    flex-direction: column;
    list-style: none;
}
.group > *:not(:first-child, :last-child) > details {
    border-radius: 0;
    border-top: none;
}
.group > *:not(:last-child) > * > summary {
    border-bottom: none;
}
.group > *:first-child:not(:last-child) > * {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.group > *:last-child:not(:first-child) > * {
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>
