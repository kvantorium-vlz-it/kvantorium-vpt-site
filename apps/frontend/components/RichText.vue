<script setup lang="tsx">
import { SanityBlocks } from 'sanity-blocks-vue-component'
import RichTextImage from './RichTextImage.vue'

defineProps<{
    blocks: [],
}>()

const serializers = ref({
    types: {
        image: RichTextImage
    }
})

</script>

<template>
    <div
        :class="$style['rich-text']"
    >
        <SanityBlocks
            :blocks="blocks"
            :serializers="serializers"
        />
    </div>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

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
}
</style>
