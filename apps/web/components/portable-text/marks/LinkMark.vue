<!-- TODO: fix fetching link data every opening hover card -->

<script setup lang="ts">
import type { PortableTextMarkComponentProps } from '@portabletext/vue'

interface BaseLink {
    isOpenNewTab: boolean
    _key: string
    _type: string
}

interface InternalLink extends BaseLink {
    internal: {
        _id: string
        _type: string
        slug: string
    }
    linkType: 1
}

interface ExternalLink extends BaseLink {
    external: string
    linkType: 0
}

const props = defineProps<PortableTextMarkComponentProps<InternalLink | ExternalLink>>()

const isInternalLink = computed(() => props.value?.linkType === 1)

const link = computed(() => {
    return (props.value?.linkType === 0
        ? props.value.external
        : (
            props.value?.internal._type === 'kvantorium.kvantum'
                ? `/kvantums/${props.value.internal.slug}`
                : (
                    props.value?.internal._type === 'kvantorium.news'
                        ? `/news/${props.value.internal.slug}`
                        : ''
                )
        )
    )
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
    <DefineTemplate>
        <NuxtLink
            :to="link"
            :target="value?.isOpenNewTab ? '_blank' : '_self'"
            class="text-blue-800 hover:underline"
        >
            <slot></slot>
        </NuxtLink>
    </DefineTemplate>

    <ShHoverCard v-if="value?.linkType === 1" :open-delay="0.1" :close-delay="0.15">
        <ShHoverCardTrigger as-child>
            <ReuseTemplate />
        </ShHoverCardTrigger>
        <ShHoverCardContent class="rounded-2xl">
            <div
                v-if="(props.value as InternalLink).internal._type === 'kvantorium.kvantum'"
                class="grid grid-cols-[auto,minmax(auto,1fr)] gap-2"
            >
                <KvantumProvider
                    :id="(props.value as InternalLink).internal._id"
                    #="{ kvantum }"
                >
                    <img :src="kvantum?.icon" alt="" class="block w-8 aspect-square object-cover">

                    <span>{{ kvantum?.name }}</span>
                </KvantumProvider>
            </div>
            <div
                v-else-if="(props.value as InternalLink).internal._type === 'kvantorium.news'"
            >
                <NewsProvider
                    :id="(props.value as InternalLink).internal._id"
                    #="{ news }"
                >
                    <span>
                        {{ news?.title }}
                    </span>
                    <img :src="news?.previewImage.src" alt="" class="block w-full rounded-md mt-2">

                    <div class="flex gap-1 mt-2">
                        <ShBadge v-for="tag in news?.tags">
                            {{ tag.name }}
                        </ShBadge>
                    </div>
                </NewsProvider>
            </div>
        </ShHoverCardContent>
    </ShHoverCard>

    <ReuseTemplate v-else />
</template>
