<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import StrongMark from './marks/StrongMark.vue'
import UnderlineMark from './marks/UnderlineMark.vue'
import EmMark from './marks/EmMark.vue'
import ImageBlock from './blocks/ImageBlock.vue'
import NormalBlock from './blocks/NormalBlock.vue'
import HeadingBlock from './blocks/HeadingBlock.vue'
import LinkMark from './marks/LinkMark.vue'
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import type { PortableTextFragment } from '@kvantoriumvlz/query'

defineProps<{
    blocks: PortableTextFragment[]
}>()
</script>

<template>
    <div>

    </div>
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
                [`${DOCUMENT_TYPES.LINK}`]: LinkMark,
            },
        }"
        :on-missing-component="false"
    />
</template>
