<!-- TODO: add socials -->

<script setup lang="ts">
import { CONTACT_LINK_TYPE, DOCUMENT_TYPES } from '@kvantoriumvlz/shared';
import { q } from '~/assets/typescript/groqd.client';
import type { InferResultItem } from 'groqd'

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
                class="from-primary to-blue-dark bg-gradient-to-br text-white p-12 rounded-2xl w-full grid grid-cols-4 gap-x-4 gap-y-6"
            >

                <FooterInfo class="col-start-1 row-span-2" />

                <FooterSiteNavigation class="col-start-3 row-span-1" />

                <FooterContactList
                    heading="Кванториум"
                    class="col-start-4 row-span-1"
                    :links="data?.kvantoriumContacts?.map((link) => ({
                        link: link.link,
                        linkType: link.linkType,
                        title: link.title
                    }))"
                />

                <FooterContactList
                    heading="Техникум"
                    class="col-start-4 row-span-1"
                    :links="data?.collegeContacts?.map((link) => ({
                        link: link.link,
                        linkType: link.linkType,
                        title: link.title
                    }))"
                />

                <hr class="col-span-4">

                <FooterCopyright class="col-span-4" />
            </div>
        </SectionContainer>
    </Section>
</template>
