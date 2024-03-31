<script setup lang="ts">
interface Props {
    href: string
}

defineProps<Props>()
</script>

<template>
    <KLink
        external
        :to="href"
        variant="dark"
        :class="$style.link"
        target="_blank"
    >
        <slot></slot><Icon name="ph:arrow-up-right" />
    </KLink>
</template>

<style module>
.link {
    color: var(--c-site-primary-lighter-2);
}
.link:visited {
    color: var(--c-site-primary);
}
</style>
