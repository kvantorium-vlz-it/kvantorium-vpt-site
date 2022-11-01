<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDocumentsStore } from '@/store/documentsStore'

const documentsStore = storeToRefs(useDocumentsStore())
</script>

<template>
    <page-section as="main" style="height: 100%;">
        <page-section-content>
            <div
                v-for="(document, index) in documentsStore.list.value"
                :key="index"
                :class="$style.document"
            >
                <h3 :class="$style.document__name">
                    {{ document.name }}:
                </h3>
                <a
                    target="_blank"
                    download
                    :title="`скачать ${document.name}`"
                    :href="document.file"
                    :class="$style.document__file"
                >
                    <nuxt-icon name="document" />
                </a>
            </div>
        </page-section-content>
    </page-section>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.document {
    &__name {
        display: inline;
        @include typo(body-1-normal);
        color: rgb(var(--c-primary-600));
    }
    &__file {
        display: inline-flex;
        @include typo(body-1-normal);

        color: tgb(var(--c-primary-900));
    }
}
</style>
