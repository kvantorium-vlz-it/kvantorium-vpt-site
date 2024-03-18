<script setup lang="ts">
interface News {
    title: string
    publishDate: Date
    previewImage: string
    tags: string[]
}

interface Props {
    news: News
}

defineProps<Props>()
</script>

<template>
    <div :class="$style.card">
        <img
            :src="news.previewImage"
            alt=""
            :class="$style.image"
        >

        <div :class="$style.info">
            <div :class="$style.tags">
                <KBadge
                    v-for="tag, index in news.tags"
                    :key="index"
                    :class="$style.tag"
                >
                    #{{ tag }}
                </KBadge>
            </div>

            <h3 :class="$style.title">
                {{ news.title }}
            </h3>

            <div :class="$style.date">
                {{ news.publishDate.getDate() }}.{{ news.publishDate.getMonth() }}.{{ news.publishDate.getFullYear() }}
            </div>
        </div>
    </div>
</template>

<style module>
.card {
    aspect-ratio: 1;
    border-radius: 1rem;
    position: relative;
    border: 2px solid var(--c-site-background-darker-2);
    overflow: hidden;
}
.image {
    position: absolute;
    display: block;
    object-fit: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
.info {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: var(--c-site-background);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.title {
    margin-bottom: 0.5rem;
    margin-top: 0.25rem;
    font-family: 'BankGothic';
    font-size: 2rem;
}
.date {
    font-size: 0.75rem;
}
.tag {
    /* font-size: 0.75rem; */
    line-height: 1;
}
</style>
