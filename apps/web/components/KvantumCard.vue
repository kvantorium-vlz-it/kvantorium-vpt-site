<script setup lang="ts">
interface Kvantum {
    name: string
    icon: string
    slug: string
    topics: string[]
    minAge: number
}

defineProps<{
    kvantum: Kvantum
}>()
</script>

<template>
    <NuxtLink :class="$style.link" :to="`/kvantum/${kvantum.slug}`">
        <KCard :class="$style.card">
            <KCardSection :class="$style.info">
                <div>
                    <KTypography
                        font-family="BankGothic"
                        font-size="h2"
                    >
                        <template #="{ classes }">
                            <h3 :class="[classes, $style.name]">
                                {{ kvantum.name }}
                            </h3>
                        </template>
                    </KTypography>

                    <ol :class="$style.list">
                        <li v-for="topic in kvantum.topics">
                            {{ topic }}
                        </li>
                    </ol>
                </div>

                <div :class="$style['icon-wrapper']">
                    <img
                        style="display: block;"
                        :src="kvantum.icon"
                        alt=""
                        :class="$style.icon"
                    >
                </div>
            </KCardSection>

            <KCardSection :class="$style.footer">
                <KBadge :class="$style.badge">
                    Возрастная категория: {{ kvantum.minAge }}+
                </KBadge>

                <KCircleIcon :class="$style.button">
                    <Icon name="ph:arrow-right" />
                </KCircleIcon>
            </KCardSection>
        </KCard>
    </NuxtLink>
</template>

<style module>
.link {
    text-decoration: none;
    color: var(--c-site-text);
    display: inline-block;
}
.name {
    margin-bottom: 0.5rem;
    line-height: 1;
}
.info {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    flex: 1 0 0;
}
.footer {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}
.list {
    padding-left: 2ch;
    color: var(--c-site-text-lighter-2);
}
.badge {
    --text-color: var(--c-site-text-lighter-2);
    --border-color: var(--c-site-text-lighter-2);
}
.button {
    transition: all 0.2s ease-in-out !important;
    --icon-color: var(--c-site-primary);
    --background-color: var(--c-site-background);
    border: 1px solid var(--c-site-primary);
    align-self: center;
}
.card {
    height: 100%;
}
.icon-wrapper {
    align-self: center;
    padding: 1rem;
    background-color: var(--c-site-background-darker-1);
    border-radius: 1.5rem;
    transition: 0.2s ease-in-out;
}
.icon {
    max-width: 3rem;
    transition: 0.2s ease-in-out;
}
.card:hover .icon-wrapper {
    padding: 0.75rem;
}
.card:hover .icon {
    max-width: 3.5rem;
}
.card:hover .name {
    color: var(--c-site-primary);
}
.card:hover .button {
    --background-color: var(--c-site-primary);
    --icon-color: var(--c-site-background);

    rotate: -45deg;
}
</style>
