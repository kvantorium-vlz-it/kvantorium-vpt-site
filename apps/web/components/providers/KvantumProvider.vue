<script setup lang="ts">
import type { Kvantum } from '~/assets/typescript/types'

const props =withDefaults(defineProps<{
    id?: string
    name?: string
    slug?: string
}>(), {
    id: '',
    name: '',
    slug: '',
})

const query = groq`
    *[
        _type == 'kvantorium.kvantum'
        && (
            slug.current == $slug
            || name == $name
            || _id == $id
        )
    ] {
        "slug": slug.current,
        name,
        _id,
        "icon": icon.asset->url,
        description[] {
            ...,
            _type == 'block' => {
                ...,
                markDefs[] {
                    _type == 'link' => {
                        _type,
                        _key,
                        isOpenNewTab,
                        linkType == 0 => {
                            linkType,
                            external,
                        },
                        linkType == 1 => {
                            linkType,
                            'internal': internal-> {
                                _type,
                                'slug': slug.current,
                                _id,
                            }
                        },
                    },
                },
            },

            _type == 'image' => {
                _type,
                _key,
                '_ref': asset._ref,
                'crop': crop {
                    top,
                    left,
                    right,
                    bottom,
                },
                ...asset-> {
                    description,
                    title,
                    'alt': altText,
                    'src': url,
                    'dimensions': metadata.dimensions {
                        width,
                        height,
                        aspectRatio,
                    }
                }
            },
        },
        topics,
        'minimalAge': math::min(*[
            _type == 'kvantorium.curriculum'
            && references(^._id)
        ].minimalAge)
    }
`

const { data } = await useSanityQuery<Kvantum[]>(query, {
    slug: props.slug,
    name: props.name,
    id: props.id,
})
</script>

<template>
    <slot :kvantum="data?.length > 0 ? data?.[0] : null"></slot>
</template>
