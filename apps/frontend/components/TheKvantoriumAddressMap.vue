<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useIndexPageStore } from '@/store/indexPage'

const indexPageStore = storeToRefs(useIndexPageStore())
</script>

<template>
    <page-section>
        <page-section-content :class="$style.location">
            <template #heading>
                {{ indexPageStore.map.value.heading }}
            </template>
            <template #subheading>
                {{ indexPageStore.map.value.subHeading }}
            </template>
            <div :class="$style.location__details">
                <address :class="$style.location__address">
                    <h3 :class="$style.location__title">
                        Адрес:
                    </h3>

                    <a
                        :class="$style.location__link"
                        href="geo:48.786934,44.772160"
                    >
                        ул. Машиностроителей, 15, г. Волжский, Волгоградская область, Россия
                    </a>
                </address>
                <kvantorium-map :class="$style.location__map" />
            </div>
        </page-section-content>
    </page-section>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.location {
    &__details {
        display: flex;
        flex-direction: column;
        gap: #{px-to-rem(8px)};
        align-items: flex-start;
    }

    &__address {
        padding-left: #{px-to-rem(10px)};

        font-style: normal;

        border-left: #{px-to-rem(8px)} solid rgb(var(--c-secondary-700));
    }

    &__title {
        margin: 0;
        margin-bottom: #{px-to-rem(8px)};

        color: rgb(var(--c-secondary-700));
        @include typo(body-1-normal);
    }

    &__link {
        margin: 0;

        color: rgb(var(--c-secondary-700));
        text-decoration: none;
        @include typo(body-2-normal);
    }

    &__map {
        width: 100%;
        min-height: #{px-to-rem(224px)};
    }
    @include only-mobile {
        &__link {
            text-decoration: underline;
        }
    }
    @include from-desktop {
        &__details {
            flex-direction: row;
        }

        &__map {
            flex: 1 0 65%;

            min-height: #{px-to-rem(304px)};
        }
    }
}
</style>
