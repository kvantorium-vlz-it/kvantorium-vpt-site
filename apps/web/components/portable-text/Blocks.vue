<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import StrongMark from './marks/StrongMark.vue'
import UnderlineMark from './marks/UnderlineMark.vue'
import EmMark from './marks/EmMark.vue'
import ImageBlock from './blocks/ImageBlock.vue'
import NormalBlock from './blocks/NormalBlock.vue'
import HeadingBlock from './blocks/HeadingBlock.vue'
import LinkMark from './marks/LinkMark.vue'

defineProps<{
    blocks: any[]
}>()
</script>

<template>
    <PortableText
        :value="blocks"
        :components="{
            block: {
                normal: NormalBlock,
                h1: HeadingBlock,
                h2: HeadingBlock,
                h3: HeadingBlock,
                h4: HeadingBlock,
                h5: HeadingBlock,
                h6: HeadingBlock,
            },

            types: {
                image: ImageBlock,
            },

            marks: {
                em: EmMark,
                strong: StrongMark,
                underline: UnderlineMark,
                link: LinkMark,
            },
        }"
        :on-missing-component="false"
    />
</template>
