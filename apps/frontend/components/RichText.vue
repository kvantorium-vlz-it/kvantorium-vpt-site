<script setup lang="ts">
import RichTextImage from '@/components/RichTextImage.vue';

defineProps<{
    // IDK where find block types
    blocks: any[];
}>()

const serializers = {
    types: {
        image: RichTextImage
    }
}
</script>

<template>
    <div
        :class="$style['rich-text']"
    >
        <SanityContent
            :blocks="blocks"
            :serializers="serializers"
        />
    </div>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;
.rich-text {
    * { color: rgb(var(--c-primary-600)); }
    p {@include typo(body-1-normal)}
    h1 {@include typo(h1-bold)}
    h2 {@include typo(h1-bold)}
    h3 {@include typo(h2-bold)}
    h4 {@include typo(h2-bold)}
    h5 {@include typo(h3-bold)}
    h6 {@include typo(h3-bold)}
    a {@include typo(body-2-normal)}
    li {@include typo(body-1-normal)}

    img {
        float: left;
    }

    &::after {
        content: "";
        clear: both;
        display: table;
    }
}
</style>
