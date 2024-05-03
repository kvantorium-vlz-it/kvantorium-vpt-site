<script setup lang="ts">
import { ref } from '#imports';
import type { UnionStringLiteralsWithString } from '../../../assets/ts/types';

interface Props {
    is?: UnionStringLiteralsWithString<'li' | 'div'>
}

withDefaults(defineProps<Props>(), {
    is: 'div'
})

const details = ref<HTMLDetailsElement>()

const emit = defineEmits<{
    (e: 'open'): void
    (e: 'close'): void
    (e: 'toggle'): void
}>()

function handleToggle(event: ToggleEvent) {
    event.preventDefault()

    emit('toggle')

    details.value?.open
        ? emit('open')
        : emit('close')
}
</script>

<template>
    <component
        :is="is"
        :class="$style['collapsible-wrapper']"
    >
        <details
            ref="details"
            :class="$style.collapsible"
            @toggle="handleToggle"
        >
            <KBaseTypography
                variant="body-1"
                #="{ classes }"
            >
                <summary :class="[classes, $style.trigger]">
                    <slot name="trigger"></slot>

                    <div
                        :class="$style['trigger-icon']"
                    >
                        <Icon
                            name="ph:caret-down"
                        />
                    </div>
                </summary>
            </KBaseTypography>

            <KBaseTypography
                variant="body-2"
                #="{ classes }"
            >
                <div :class="[classes, $style.content]">
                    <slot></slot>
                </div>
            </KBaseTypography>
        </details>
    </component>
</template>

<style module>
.collapsible-wrapper:has(.trigger:focus-visible) {
    outline: 4px dashed var(--c-site-background-darker-2);
    outline-offset: 2px;
    border-radius: 1rem;
}
.collapsible {
    background-color: var(--c-site-background);
    border-radius: 1rem;
    border: 2px solid var(--c-site-background-darker-2);
    overflow: hidden;
}
.collapsible[open] > .trigger,
.trigger:hover {
    background-color: var(--c-site-background-darker-1);
}
.trigger {
    outline: none;
    list-style: none;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    text-align: center;
    border-bottom-left-radius: inherit;
    border-top-left-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-right-radius: inherit;
    position: relative;
}
.collapsible[open] > .trigger {
    border-bottom: 2px solid var(--c-site-background-darker-2);
}
.trigger-icon {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
}
.collapsible[open] > .trigger > .trigger-icon svg {
    rotate: 180deg;
}
.content {
    padding: 1rem 1.5rem;
    text-align: center;
    color: var(--c-site-text-lighter-2);
}
</style>
