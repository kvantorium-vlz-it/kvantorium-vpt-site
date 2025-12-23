<script setup lang="ts">
import { settingsFragmentFactory } from '@kvantoriumvlz/query';
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client'
import type { InferResultItem } from 'groqd'
import { FileIcon } from 'lucide-vue-next';

const aboutQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.SETTINGS)
    .project(settingsFragmentFactory(q))
    .slice(0)

type Settings = InferResultItem<typeof aboutQuery>

const { data } = useSanityQuery<Settings>(aboutQuery.query)
</script>

<template>
    <Section id="about">
        <SectionContainer>
            <SectionHeading>
                О нас
            </SectionHeading>

            <div v-if="data" class="max-w-[80ch] mx-auto">
                <PortableBlocks :blocks="data.about" />
            </div>
        </SectionContainer>
    </Section>

    <Section id="documents">
        <SectionContainer>
            <SectionHeading>
                Документы
            </SectionHeading>

            <div v-if="data" class="max-w-[80ch] mx-auto flex flex-col gap-1 items-start">
                    <BaseLink
                        v-for="document in data.documents"
                        class="text-secondary"
                        :to="document.file.asset.src!"
                        download
                    >
                        {{ document.label }}

                        <FileIcon class="group-hover/link:translate-x-1" />
                    </BaseLink>
            </div>
        </SectionContainer>
    </Section>
</template>
