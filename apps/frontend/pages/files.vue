<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFilesStore } from '@/store/Files'

const {
    curriculums,
    regularFiles,
} = storeToRefs(useFilesStore())
</script>

<template>
    <PageSection>
        <PageSectionDefaultLayout>
            <template #heading>
                Документы
            </template>
            <article>
                <h2>
                    Документы:
                </h2>

                <div
                    v-for="file in regularFiles"
                    :key="file.id"
                    :class="$style.file"
                >
                    <span :class="$style.file__label">
                        {{ file.label }}
                    </span>
                    <a :href="file.file" download>
                        <NuxtIcon name="document" :class="$style.file__icon" />
                    </a>
                </div>
            </article>

            <article>
                <h2>
                    Программы квантумов:
                </h2>

                <div
                    v-for="file in curriculums"
                    :key="file.id"
                    :class="$style.file"
                >
                    <span :class="$style.file__label">
                        {{ file.label }}
                    </span>
                    <a :href="file.file" download>
                        <NuxtIcon name="document" :class="$style.file__icon" />
                    </a>
                </div>
            </article>
        </PageSectionDefaultLayout>
    </PageSection>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;


.file {
    &__label {
        @include typo(body-1-normal);
        margin: 0;
    }
    &__icon {
        margin-left: 1ch;
        display: inline-block;
        @include typo(body-1-normal);

        color: rgb(var(--c-primary-500));
    }
}
</style>
