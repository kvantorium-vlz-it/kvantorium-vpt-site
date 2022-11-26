<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useKvantumsStore } from '@/store/kvantums'

const store = storeToRefs(useKvantumsStore())

const kvantum = ref(useKvantumsStore().getKvantumById(useRoute().params.id as string))

const allKvantums = computed(() => {
    return store.kvantums.value.map(_kvantum => ({
        name: _kvantum.name,
        description: _kvantum.shortDescription,
        image: _kvantum.icon,
        id: _kvantum.id,
        to: `/kvantum-${_kvantum.id}`
    }))
})
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

            <div :class="$style.kvantum__other">
                <h2 :class="$style['kvantum__other-heading']">
                    Другие квантумы
                </h2>

                <ClientOnly>
                    <KvantumsSwiper :kvantums="allKvantums" />
                </ClientOnly>
            </div>
        </PageSectionDefaultLayout>
    </PageSection>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.kvantum {
    &__buttons {
        display: flex;
        justify-content: flex-end;
        margin-top: rem(16px);
    }

    &__other-heading {
        @include typo(h2-bold)
    }
}
</style>
