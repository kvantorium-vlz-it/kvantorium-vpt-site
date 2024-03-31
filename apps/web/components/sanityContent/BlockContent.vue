<script setup lang="ts">
import { ImageBlock, LinkMark, SanityContent, SpanBlock } from '#components'

type SanityContentProps = InstanceType<typeof SanityContent>['$props']
type SanityContentSerializer = SanityContentProps['serializers']

defineProps<{
    blocks: SanityContentProps['blocks']
}>()

const serializer: SanityContentSerializer = {
    types: {
        imageBlock: ImageBlock,
        span: SpanBlock
    },
    marks: {
        link: LinkMark,
    }
}
</script>

<template>
    <SanityContent :blocks="blocks" :serializers="serializer" />
</template>
