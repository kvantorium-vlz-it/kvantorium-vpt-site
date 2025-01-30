<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { InferResultItem } from 'groqd'

const queryBuilder = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project((sub) => ({
        _id: true,
        name: true,
        slug: sub.field('slug.current'),
    }))

type QueryResult = InferResultItem<typeof queryBuilder>

const { data: kvantums } = useSanityQuery<QueryResult[]>(queryBuilder.query)
</script>

<template>
    <div>
        <h2 class="font-display text-white uppercase text-4xl w-fit ml-auto">
            Направления
        </h2>

        <ShNavigationMenu class="mt-2">
            <ShNavigationMenuList class="justify-end flex-wrap gap-x-2 gap-y-1">
                <HeroKvantumsNavigationItem
                    v-for="kvantum in kvantums"
                    :curriculum="kvantum.name"
                    :to="`/kvantum/${kvantum.slug}/`"
                />
            </ShNavigationMenuList>
        </ShNavigationMenu>
    </div>
</template>
