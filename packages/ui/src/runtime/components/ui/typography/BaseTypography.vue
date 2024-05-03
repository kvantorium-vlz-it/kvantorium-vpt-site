<script setup lang="ts">
import type { BaseTypographyProps } from '../../../assets/ts/props'

withDefaults(defineProps<BaseTypographyProps>(), {
    isItalic: false,
    variant: null,
})
</script>

<template>
    <slot :classes="[
            $style.typography,
            isItalic && $style.italic,
            variant && $style[variant],
        ]"
    />
</template>

<style module>
.typography {
    --family: initial;
    --weight: initial;
    --style: initial;
    --size: initial;
    --line-height: initial;
    --spacing: initial;

    font-family: var(--family), Arial, Helvetica, sans-serif;
    font-weight: var(--weight);
    font-style: var(--style);
    font-size: var(--size);
    line-height: var(--line-height);
    letter-spacing: var(--spacing);

    font-smooth: always;
    --webkit-font-smoothing: antialiased;
}

.italic {
    --style: italic;
}

.display-1,
.display-2,
.display-3,
.heading-1,
.heading-2,
.heading-3,
.heading-4,
.heading-5,
.heading-6 {
    --family: 'BankGothic';
    --weight: 500;
}
.body-1,
.body-2,
.body-3,
.label-1,
.label-2 {
    --family: 'Circe'
}

.display-1,
.display-2,
.display-3 {
    --line-height: 1.2;
    --spacing: -2%;
}

.heading-1,
.heading-2,
.heading-3,
.heading-4,
.heading-5,
.heading-6 {
    --line-height: 1.32;
    --spacing: 2%;
}

.body-1,
.body-2,
.body-3 {
    --line-height: 1.47;
    --spacing: 0;
}

.label-1,
.label-2 {
    --line-height: 1.41;
    --spacing: 3%;
}

.display-1 {
    --size: 3rem;
}
.display-2 {
    --size: 2.25rem;
}
.display-3 {
    --size: 1.875rem;
}

.heading-1 {
    --size: 3rem;
}
.heading-2 {
    --size: 2.5rem;
}
.heading-3 {
    --size: 2rem;
}
.heading-4 {
    --size: 1.5rem;
}
.heading-5 {
    --size: 1.25rem;
}
.heading-6 {
    --size: 1rem;
}
.body-1 {
    --size: 1.25rem;
}
.body-2 {
    --size: 1.125rem;
}
.body-3 {
    --size: 1rem;
}
.label-1 {
    --size: 1rem;
}
.label-2 {
    --size: 0.875rem;
}

@media (min-width: 768px) {
    .display-1 {
        --size: 6rem;
    }
    .display-2 {
        --size: 4.5rem;
    }
    .display-3 {
        --size: 3.75rem;
    }
}
</style>
