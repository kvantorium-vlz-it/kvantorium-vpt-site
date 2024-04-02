<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapZoomControl, YandexMapScaleControl, YandexMapGeolocationControl, YandexMapControls, YandexMapDefaultFeaturesLayer } from 'vue-yandex-maps';

</script>

<template>
    <VueFinalModal :class="$style.modal">
        <KSection heading="Записаться" :class="$style.section">
            <div :class="$style.content">
                <KNavigation
                    direction="vertical"
                    heading="Контакты"
                    variant="dark"
                    :items="[
                        {
                            label: '8(902)383-50-24',
                            iconName: 'ic:baseline-phone',
                            to: 'tel:89023835024',
                        },
                        {
                            label: 'Волжский ул. Машиностроителей, 15, 404121',
                            iconName: 'bi:geo-alt-fill',
                            to: 'geo:48.786934,44.772160',
                        },
                    ]"
                />
                <div :class="$style['map-wrapper']">
                    <ClientOnly>
                        <YandexMap
                            :settings="{
                                location: {
                                    center: [44.772160, 48.786934],
                                    zoom: 18,
                                    easing: { p1: { x: 1, y: 4 }, p2: { x: 2, y: 4 } }
                                },
                                camera: {
                                    tilt: Math.PI * 45 / 180,
                                }
                            }"
                            width="100%"
                            height="22rem"
                            :class="$style.map"
                        >
                            <YandexMapDefaultSchemeLayer />
                            <YandexMapControls :settings="{ position: 'left' }">
                                <YandexMapZoomControl />
                                <YandexMapGeolocationControl />
                            </YandexMapControls>
                        </YandexMap>
                    </ClientOnly>
                </div>
            </div>
        </KSection>
    </VueFinalModal>
</template>

<style module>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
}
.section {
    background-color: var(--c-site-background);
    padding: 1.5rem 2.5rem;
    border-radius: 1rem;
    width: 50vw;
}
.content {
    display: grid;
    /* grid-template-columns: auto 1fr; */
    gap: 1rem;
}
.map-wrapper {
    height: 22rem;
}
</style>
