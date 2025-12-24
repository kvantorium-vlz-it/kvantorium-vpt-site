<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { FileIcon } from 'lucide-vue-next';
import { q, settingsProjection, type SettingsProjection } from '#shared/sanity';

const aboutQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.SETTINGS)
    .project(settingsProjection)
    .slice(0)

const { data } = useSanityQuery<SettingsProjection>(aboutQuery.query)
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
