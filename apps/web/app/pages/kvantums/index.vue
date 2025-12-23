<script setup lang="ts">
import { kvantumFragmentFactory } from '@kvantoriumvlz/query';
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { Kvantum } from '~/assets/typescript/types';

const query = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .project(kvantumFragmentFactory(q))

const { data: kvantums } = await useSanityQuery<Kvantum[]>(query.query)
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
