<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useIndexPageStore } from '@/store/indexPage'

const indexPageStore = storeToRefs(useIndexPageStore())
</script>

<template>
    <main>
        <the-hero />
        <page-section>
            <page-section-content>
                <template #heading>
                    {{ indexPageStore.kvantums.value.heading }}
                </template>
                <template #subheading>
                    {{ indexPageStore.kvantums.value.subHeading }}
                </template>
                <kvantums-cards-provider #="{ cards }">
                    <kvantums-cards-carousel :kvantums="cards" />
                </kvantums-cards-provider>
            </page-section-content>
        </page-section>
        <page-section>
            <page-section-content>
                <template #heading>
                    {{ indexPageStore.advantages.value.heading }}
                </template>
                <template #subheading>
                    {{ indexPageStore.advantages.value.subHeading }}
                </template>
                <kvantorium-advantages-provider #="{ advantages }">
                    <kvantorium-advantages-list :advantages="advantages" />
                </kvantorium-advantages-provider>
            </page-section-content>
        </page-section>
        <the-kvantorium-address-map />
    </main>
</template>
