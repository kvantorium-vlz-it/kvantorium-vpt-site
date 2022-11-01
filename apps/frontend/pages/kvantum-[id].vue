<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKvantumsStore } from '~~/store/kvamtuns'

const kvantumsStore = storeToRefs(useKvantumsStore())
const kvantum = kvantumsStore.map.value.get(useRoute().params.id as string)
</script>

<template>
    <page-section as="main">
        <page-section-content>
            <client-only>
                <template #heading>
                    {{ kvantum.name || 'Название квантума' }}
                </template>
                <rich-text :blocks="kvantum.description" />
            </client-only>
            <base-button>
                записаться
            </base-button>
        </page-section-content>
    </page-section>
</template>
