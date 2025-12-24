<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { kvantumProjection, q } from '#shared/sanity';
import type { InferResultItem } from 'groqd';

const query = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(kvantumProjection)

const { data: kvantums } = await useSanityQuery<InferResultItem<typeof query>[]>(query.query)
</script>

<template>
    <div>
        <Section>
            <SectionContainer>
                <SectionHeading>
                    Квантумы
                </SectionHeading>

                <ul class="grid grid-cols-1 gap-2 laptop:grid-cols-2 desktop:grid-cols-3">
                    <li v-for="kvantum in kvantums" :key="kvantum._id" class="h-full">
                        <KvantumCard :kvantum="kvantum" class="h-full" />
                    </li>
                </ul>
            </SectionContainer>
        </Section>
    </div>
</template>
