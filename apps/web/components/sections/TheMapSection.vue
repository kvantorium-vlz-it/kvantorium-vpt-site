<script setup lang="ts">
import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultMarker,
    YandexMapDefaultFeaturesLayer,
    YandexMapZoomControl,
    YandexMapGeolocationControl,
    YandexMapControls,
    YandexMapControlButton,
    type YandexMapSettings,
} from 'vue-yandex-maps';

import type {
    YMapCameraRequest,
} from '@yandex/ymaps3-types/imperative/YMap'

const map = ref<HTMLDivElement>()
onClickOutside(map, () => {
    isFocused.value = false
})

const [isFocused] = useToggle(false)

type BehaviourType = YandexMapSettings['behaviors']

const behaviors = computed<BehaviourType>(() => {
    const shared: BehaviourType = ['drag', 'pinchZoom', 'mouseTilt', 'mouseRotate']

    return isFocused.value ? [...shared, 'scrollZoom'] : shared
})

const camera = ref<YMapCameraRequest>({
    tilt: (45 * Math.PI) / 180,
    duration: 2500,
})

const location = ref({
    center: [44.772160, 48.786934],
    zoom: 16
})
</script>

<template>
    <KContainer>
        <KSection heading="Мы на карте">
            <KGrid :class="$style.grid">
                <KGridCell
                    :class="$style['grid-contacts-cell']"
                >
                    <KNavigation
                        :items="[
                            {
                                label: 'kvantoriumvlz@volpt.com',
                                iconName: 'mingcute:mail-fill',
                                to: 'mailto:kvantoriumvlz@volpt.com',
                            },
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
                        variant="dark"
                        direction="vertical"
                        heading="Контакты"
                    />
                </KGridCell>

                <KGridCell :class="$style['map-grid-cell']">
                    <div :class="[$style['map-wrapper'], { [$style.focused]: isFocused }]">
                        <ClientOnly>
                            <YandexMap
                                ref="map"
                                @mousedown="() => { isFocused = true }"
                                @mouseleave="() => { isFocused = false }"
                                :settings="{
                                    location: {
                                        ...location,
                                        duration: camera.duration,
                                    },
                                    camera: camera,
                                    behaviors: behaviors,
                                    showScaleInCopyrights: true,
                                }"
                                width="100%"
                                height="22rem"
                                :class="$style.map"
                                real-settings-location
                            >
                                <YandexMapDefaultSchemeLayer />
                                <YandexMapDefaultFeaturesLayer />

                                <!-- <YandexMapControls :settings="{ position: 'top' }">
                                    <YandexMapControlButton
                                        style="align-items: center; display: grid; grid-template-columns: auto 1fr; gap: 0.5rem; max-width: 20rem; white-space: wrap;"
                                        :settings="{
                                            onClick: () => {
                                                location.center = [44.772160, 48.786934]
                                            }
                                        }"
                                    >
                                        <Icon style="font-size: 2rem;" name="ph:map-pin" />

                                        Детский технопарк "Кванториум "Волжский Политех"
                                    </YandexMapControlButton>
                                    <YandexMapControlButton
                                        style="align-items: center; display: grid; grid-template-columns: auto 1fr; gap: 0.5rem; max-width: 20rem; white-space: wrap;"
                                        :settings="{
                                            onClick: () => {
                                                location.center = [44.729346, 48.807840]
                                            }
                                        }"
                                    >
                                        <Icon style="font-size: 2rem;" name="ph:map-pin" />

                                        Волжский политехнический техникум
                                    </YandexMapControlButton>
                                </YandexMapControls> -->

                                <YandexMapControls :settings="{ position: 'right' }">
                                    <YandexMapZoomControl />
                                    <YandexMapGeolocationControl />
                                </YandexMapControls>

                                <YandexMapDefaultMarker
                                    :settings="{
                                        coordinates: [44.772160, 48.786934],
                                        color: '#213A8F',
                                    }"
                                />
                                <!-- <YandexMapDefaultMarker
                                    :settings="{
                                        coordinates: [44.729346, 48.807840],
                                        color: '#3E5062',
                                    }"
                                /> -->
                            </YandexMap>
                        </ClientOnly>
                    </div>
                </KGridCell>
            </KGrid>
        </KSection>
    </KContainer>
</template>

<style module>
.section {
    padding-inline: var(--site-margin);
}
.map-wrapper {
    height: 22rem;
}
.map-wrapper:hover > .map {
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
}
.focused {
    outline: 4px dashed var(--c-site-background-darker-2);
    outline-offset: 4px;
    border-radius: 0.75rem;
}
.grid {
    --columns: 1;
}
@media screen and (min-width: 768px) {
    .grid {
        --columns: 6;
    }
    .grid-contacts-cell {
        --start-column: 1;
        --end-column: 3;
    }
    .map-grid-cell {
        --start-column: 3;
        --end-column: 7;
    }
}
.map {
    height: 100%;
    border-radius: 0.75rem;
    border: 1px solid var(--c-site-background-darker-2);
    overflow: hidden;
    transition: 0.2s ease-out;
}
.heading {
    font-size: 2.5rem;
    font-family: 'BankGothic';
    text-align: center;
}
</style>
