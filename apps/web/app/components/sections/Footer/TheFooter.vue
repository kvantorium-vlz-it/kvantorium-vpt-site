<!-- TODO: add socials -->

<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import type { InferResultItem } from 'groqd'
import { q } from '#shared/sanity';

const aboutQuery = q
    .star
    .filterByType(DOCUMENT_TYPES.SETTINGS)
    .project({
        collegeContacts: true,
        kvantoriumContacts: true,
    })
    .slice(0)

type Settings = InferResultItem<typeof aboutQuery>

const { data } = useSanityQuery<Settings>(aboutQuery.query)
</script>

<template>
    <Section>
        <SectionContainer full-width>
            <div
                class="from-primary to-blue-dark bg-gradient-to-br text-white p-12 rounded-2xl w-full grid grid-cols-1 laptop:grid-cols-4 gap-x-4 gap-y-6"
            >

                <FooterInfo class="laptop:col-start-1 laptop:row-span-2" />

                <FooterSiteNavigation class="laptop:col-start-3 laptop:row-span-1" />

                <FooterContactList
                    heading="Кванториум"
                    class="laptop:col-start-4 laptop:row-span-1"
                    :links="data?.kvantoriumContacts?.map((link) => ({
                        link: link.websiteValue || link.emailValue || link.phoneValue || link.geolocationValue || link.otherValue || '',
                        linkType: link.linkType,
                        label: link.label,
                    }))"
                />

                <FooterContactList
                    heading="Техникум"
                    class="laptop:col-start-4 laptop:row-span-1"
                    :links="data?.collegeContacts?.map((link) => ({
                        link: link.websiteValue || link.emailValue || link.phoneValue || link.geolocationValue || link.otherValue || '',
                        linkType: link.linkType,
                        label: link.label,
                    }))"
                />

                <hr class="laptop:col-span-4">

                <FooterCopyright class="laptop:col-span-4" />
            </div>
        </SectionContainer>
    </Section>
</template>
