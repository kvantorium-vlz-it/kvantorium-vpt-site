<script setup lang="ts">
interface Kvantum {
    name: string
    icon: string
    slug: string
    topics: string[]
    minAge: number
}

interface Props {
    kvantum: Kvantum
}

defineProps<Props>()
</script>

<template>
    <TheKvantumsSectionCard :class="$style.card">
        <template #header>
            <div :class="$style['header-wrapper']">
                <img :class="$style.image" :src="kvantum.icon" alt="">

                <NuxtLink
                    :to="`/kvantum/${kvantum.slug}`"
                    :class="$style.link"
                >
                    <Icon size="100%" name="ph:arrow-up-right" />
                </NuxtLink>
            </div>
        </template>

        <h3 :class="$style.name">
            {{ kvantum.name }}
        </h3>

        <ul :class="$style.list">
            <li v-for="topic in kvantum.topics">
                {{ topic }}
            </li>
        </ul>

        <template #footer>
            <div :class="$style['footer-wrapper']">
                Минимальный возраст: {{ kvantum.minAge }}
            </div>
        </template>
    </TheKvantumsSectionCard>
</template>

<style module>
.card {
    border: 2px solid var(--c-site-background-darker-2);
    background-color: var(--c-site-background);
    overflow: hidden;
}
.header-wrapper {
    display: flex;
    justify-content: space-between;
}
.image {
    width: 2.5rem;
}
.link {
    width: 2.5rem;
    border: 1px solid var(--c-site-primary);
    border-radius: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    color: var(--c-site-primary);
}
.name {
    font-size: 1.5rem;
    font-family: 'BankGothic';
    line-height: 1;
    color: var(--c-site-text);
}
.body {
    overflow: hidden;
}
.list {
    list-style-position: inside;
    color: var(--c-site-text);
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-weight: 300;
    font-family: 'Circe';
    line-height: 1.4;
    overflow-y: hidden;
}
.footer-wrapper {
    font-size: 0.75rem;
    font-weight: 300;
    font-family: 'Circe';
}
</style>
