<script setup lang="ts">
interface Kvantum {
    name: string
    imageURL: string
    slug: string
    age: number
    topicsList: string[]
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
                <img :class="$style.image" :src="kvantum.imageURL" alt="">

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

        <ol :class="$style.list">
            <li v-for="item, index in kvantum.topicsList" :key="index">
                {{ item }}
            </li>
        </ol>

        <template #footer>
            <div :class="$style['footer-wrapper']">
                Возрастная категория: {{ kvantum.age }}+
            </div>
        </template>
    </TheKvantumsSectionCard>
</template>

<style module>
.card {
    border: 2px solid var(--c-site-background-darker-2);
    background-color: var(--c-site-background);
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
.list {
    list-style-position: inside;
    color: var(--c-site-text);
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-weight: 300;
    font-family: 'Circe';
    line-height: 1.4;
}
.footer-wrapper {
    font-size: 0.75rem;
    font-weight: 300;
    font-family: 'Circe';
}
</style>
