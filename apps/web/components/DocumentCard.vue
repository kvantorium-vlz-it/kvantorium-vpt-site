<script setup lang="ts">
interface Props {
    document: {
        url: string
        size: number
        name: string
    }
}

defineProps<Props>()
</script>

<template>
    <NuxtLink
        download
        target="_blank"
        :to="document.url"
        style="
            text-decoration: none;
            color: var(--c-site-text);
        "
        :class="$style.link"
    >
        <KCard>
            <KCardSection>
                <KBaseTypography
                    variant="body-1"
                    #="{ classes }"
                >
                    <h3 :class="[classes, $style.name]">
                        {{ document.name }}
                    </h3>
                </KBaseTypography>
            </KCardSection>
            <KCardSection style="text-align: end; font-size: 1.5rem;">
                <Icon :class="$style.icon" name="tabler:download" />
            </KCardSection>
        </KCard>
    </NuxtLink>
</template>

<style module>
.name,
.icon {
    color: var(--c-site-text);
    transition: 0.2s ease-in-out;
}
.link:hover .name,
.link:hover .icon {
    color: var(--c-site-primary);
}
</style>
