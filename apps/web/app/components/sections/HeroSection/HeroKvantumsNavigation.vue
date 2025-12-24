<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '#shared/sanity';
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
        <HeroNavigationHeading class="text-center laptop:text-right">
            направления
        </HeroNavigationHeading>

        <HeroNavigationMenu class="mx-auto laptop:mx-0">
            <ShNavigationMenuList class="flex-row flex-wrap laptop:justify-end gap-x-2 gap-y-1">
                <ShNavigationMenuItem v-for="kvantum in kvantums">
                    <HeroKvantumsNavigationMenuLink :to="`/kvantums/${kvantum.slug}/`">
                        {{ kvantum.name }}
                    </HeroKvantumsNavigationMenuLink>
                </ShNavigationMenuItem>
            </ShNavigationMenuList>
        </HeroNavigationMenu>
    </div>
</template>
