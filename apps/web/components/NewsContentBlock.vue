<script setup lang="ts">
import { SanityContent, SanityImageBlock } from '#components'

type SanityContentProps = InstanceType<typeof SanityContent>['$props']

defineProps<{
    blocks: SanityContentProps['blocks']
}>()

const serializer = {
    types: {
        imageBlock: SanityImageBlock,
    }
}
</script>

<template>
    <SanityContent :blocks="blocks" :serializers="serializer" />
</template>
