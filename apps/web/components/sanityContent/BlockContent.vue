<script setup lang="ts">
import {
    ImageBlock,
    SanityContent,
} from '#components'
import {
    BlockQuoteStyle,
    HeadingStyle,
    NormalStyle,
} from '#components'
import {
    CodeMark,
    EmMark,
    LinkMark,
    StrikeThroughMark,
    StrongMark,
    UnderlineMark,
} from '#components'

type SanityContentProps = InstanceType<typeof SanityContent>['$props']
type SanityContentSerializer = SanityContentProps['serializers']

defineProps<{
    blocks: SanityContentProps['blocks']
}>()

const serializer: SanityContentSerializer = {
    types: {
        imageBlock: ImageBlock,
    },
    marks: {
        link: LinkMark,
        'strike-through': StrikeThroughMark,
        underline: UnderlineMark,
        code: CodeMark,
        em: EmMark,
        strong: StrongMark,
    },
    styles: {
        h1: HeadingStyle,
        h2: HeadingStyle,
        h3: HeadingStyle,
        h4: HeadingStyle,
        h5: HeadingStyle,
        h6: HeadingStyle,
        normal: NormalStyle,
        blockquote: BlockQuoteStyle,
    },
}
</script>

<template>
    <div :class="$style.content">
        <SanityContent
            :class="$style.content"
            :blocks="blocks"
            :serializers="serializer"
        />
    </div>
</template>

<style module>
/* Fix:
   Fixing nested list until until @nuxt/sanity not adds the ability to
   conveniently customize the list
*/
.content ul,
.content ol {
    padding-left: 2ch;
    list-style-position: inside;
}
.content > ul,
.content > ol {
    padding: 0;
}
</style>
