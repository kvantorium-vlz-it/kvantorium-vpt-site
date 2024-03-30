<script setup lang="ts">
interface Props {
    label: string
}

defineProps<Props>()
</script>

<template>
    <details :class="$style['accordion-item']">
        <KTypography
            font-family="Circe"
            font-size="h4"
            #default="{ classes }"
        >
            <summary :class="[classes, $style.trigger]">
                {{ label }}

                <Icon
                    name="ph:caret-down"
                    :class="$style['trigger-icon']"
                />
            </summary>
        </KTypography>

        <div :class="$style.content">
            <slot></slot>
        </div>
    </details>
</template>

<style module>
/* Base styles */
.accordion-item {
    /* Variables */
    --text-color: var(--c-site-text-lighter-2);
    --icon-color: var(--c-site-text);

    /* Private variables */

    --_border-width: 2px;
    --_padding-inline: 1rem;

    border-image: linear-gradient(
        to right,
        transparent,
        var(--c-site-background-darker-2),
        transparent
    );
    border-image-slice: 30;
    border-bottom: var(--_border-width) solid;
    border-top: var(--_border-width) solid;

    font-family: 'Circe';
    font-size: 1rem;
    text-align: center;

    padding-block: 0.75rem;
}
.trigger {
    list-style: none;
    cursor: pointer;

    color: var(--text-color);

    position: relative;
    padding-inline: calc(var(--_padding-inline) + 1em + 1ch);
}
.trigger-icon {
    position: absolute;
    top: 50%;
    right: var(--_padding-inline);
    translate: 0 -50%;

    color: var(--icon-color);

    transition: rotate 0.2s ease;
}
.accordion-item[open] .trigger-icon {
    rotate: 180deg;
}

.content {
    margin-top: 1rem;
    padding-inline: calc(var(--_padding-inline) + 1em + 1ch);
}
</style>
