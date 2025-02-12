<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { InferResultItem } from 'groqd'
import type { Kvantum } from '~/assets/typescript/types';

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
            <HeroNavigationList class="flex-row flex-wrap laptop:justify-end gap-x-2 gap-y-1">
                <HeroNavigationItem v-for="kvantum in kvantums">
                    <NavigationBadgeLink :to="`/kvantums/${kvantum.slug}/`">
                        {{ kvantum.name }}
                    </NavigationBadgeLink>
                    <!-- <HeroKvantumNavigationItem :kvantum="kvantum"/> -->
                </HeroNavigationItem>
            </HeroNavigationList>
        </HeroNavigationMenu>
    </div>
</template>
