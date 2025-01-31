<script setup lang="ts">
import { kvantumFragmentFactory } from '@kvantoriumvlz/query';
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { Kvantum } from '~/assets/typescript/types';

const route = useRoute()

const slug = route.params.slug as string

const query = q
    .star
    .filterByType(DOCUMENT_TYPES.KVANTUM)
    .filterBy(`slug.current == "${slug}"`)
    .project(kvantumFragmentFactory(q))
    .slice(0)

const { data: kvantum } = await useSanityQuery<Kvantum>(query.query)
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                <span v-if="kvantum">
                    {{ kvantum.name }}
                </span>
                <span v-else>
                    Квантум не найден
                </span>
            </SectionHeading>

            <div v-if="kvantum" class="grid grid-cols-1 lg:grid-cols-[auto,minmax(auto,1fr)] gap-4">
                <img
                    class="block mx-auto max-w-64 w-full lg:sticky lg:top-32"
                    :src="kvantum.icon?.asset?.src!"
                    :alt="`Логотип ${kvantum.name}`"
                >

                <div class="mt-4">
                    <PortableBlocks :blocks="kvantum.description" />
                </div>
            </div>
        </SectionContainer>
    </Section>
</template>
