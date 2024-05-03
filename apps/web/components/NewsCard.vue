<script setup lang="ts">
interface News {
    title: string
    publishDate: Date
    previewImage: string
    tags: string[]
    slug: string
}

interface Props {
    news: News
}

defineProps<Props>()
const formatter = Intl.DateTimeFormat('ru', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
})
</script>

<template>
    <NuxtLink :to="`/news/${news.slug}`" :class="$style.link">
        <KCard :class="$style.card">
            <img :class="$style.image":src="news.previewImage" alt="">
            <KCardSection :class="$style.wrapper"
                style="
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                "
            >
                <div
                    style="
                        background-color: var(--c-site-background);
                        padding: 0.75rem;
                        border-radius: 0.75rem;
                    "
                >
                    <KBaseTypography
                        variant="heading-4"
                        #="{ classes }"
                    >
                        <h3 :class="[$style.title, ...classes]">
                            {{ news.title }}
                        </h3>
                    </KBaseTypography>
                    <KBaseTypography
                        variant="label-2"
                        #="{ classes }"
                    >
                        <div :class="classes" style="color: var(--c-site-text-lighter-2); margin-bottom: 0.75rem;">
                            {{ formatter.format(news.publishDate) }}
                        </div>
                    </KBaseTypography>

                    <div style="display: flex; justify-content: space-between; gap: 0.5rem;">
                        <div :class="$style.tags">
                            <KBadge
                                v-for="tag, index in news.tags"
                                :key="index"
                                :class="$style.tag"
                            >
                                #{{ tag }}
                            </KBadge>
                        </div>

                        <KCircleIcon
                            variant="primary"
                            :class="$style.icon"
                            icon-name="ph:arrow-right"
                            style="align-self: flex-end;"
                        />
                    </div>
                </div>
            </KCardSection>
        </KCard>
    </NuxtLink>
</template>

<style module>
.link {
    text-decoration: none;
}
.link:hover .icon {
    --background-color: var(--c-site-primary);
    --icon-color: var(--c-site-background);
    rotate: -45deg;
}
.link:hover .title {
    color: var(--c-site-primary);
}
.icon {
    transition: all 0.2s ease-in-out;
}
.card {
    aspect-ratio: 1;
    border-radius: 1rem;
    position: relative;
    border: 2px solid var(--c-site-background-darker-2);
    overflow: hidden;
    text-decoration: none;
    color: var(--c-site-text);
}
.link:hover .image {
    scale: 1.1;
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
    transition: 0.2s ease-in-out;
}
.wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
}
.info {
    color: var(--c-site-background);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.title {
    line-height: 1;
}
.date {
    font-size: 0.75rem;
}
.tags {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.25rem;
    row-gap: 0.125rem;
    align-self: flex-start;
}
.tag {
    --border-color: var(--c-site-text-lighter-2);
    --text-color: var(--c-site-text);
}
</style>
