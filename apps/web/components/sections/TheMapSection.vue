<script setup lang="ts">
import { YandexMap, YandexMapDefaultSchemeLayer, YandexMapZoomControl, YandexMapScaleControl, YandexMapGeolocationControl, YandexMapControls, YandexMapDefaultFeaturesLayer } from 'vue-yandex-maps';
</script>

<template>
    <KContainer>
        <KSection heading="мы на карте">
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
        </KSection>
    </KContainer>
</template>

<style module>
.section {
    padding-inline: var(--site-margin);
}
.map-wrapper {
    height: 22rem;
    margin-top: 2rem;
}
.map {
    height: 100%;
    border-radius: 0.75rem;
    border: 1px solid var(--c-site-background-darker-2);
    overflow: hidden;
}
.heading {
    font-size: 2.5rem;
    font-family: 'BankGothic';
    text-align: center;
}
</style>
