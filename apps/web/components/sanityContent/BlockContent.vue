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
        imageAsset: ImageBlock,
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
    <KBaseTypography
        variant="body-2"
        #="{ classes }"
    >
        <div :class="[classes, $style.content]" :="{...$attrs}">
            <SanityContent
                :blocks="blocks"
                :serializers="serializer"
            />
        </div>
    </KBaseTypography>
</template>

<style module>
/* Fix:
   Fixing nested list until until @nuxt/sanity not adds the ability to
   conveniently customize the list
*/
.content ul,
.content ol {
    padding-left: 1.5rem;
    list-style-position: inside;
    color: var(--c-site-text-lighter-2);
}
.content > ul,
.content > ol {
    padding-left: 1.5rem;
    margin-block: 1.5em;
}
</style>
