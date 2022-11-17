<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKvantumsStore } from '@/store/kvantums'

const kvantum = ref(useKvantumsStore().getKvantumById(useRoute().params.id as string))
</script>

<template>
    <PageSection :class="kvantum">
        <PageSectionDefaultLayout v-if="kvantum">
            <template #heading>
                {{ kvantum.name }}
            </template>
            <RichText :blocks="kvantum.description"></RichText>

            <div :class="$style.kvantum__buttons">
                <BaseButton to="/">
                    Записаться
                </BaseButton>
            </div>
        </PageSectionDefaultLayout>
    </PageSection>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.kvantum {
    &__buttons {
        margin-top: rem(16px);
    }
}
</style>
