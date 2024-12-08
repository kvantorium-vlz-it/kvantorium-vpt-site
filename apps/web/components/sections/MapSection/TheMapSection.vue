<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';
import { YandexMap, YandexMapControls, YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker, YandexMapDefaultSchemeLayer, YandexMapGeolocationControl, YandexMapZoomControl, type YandexMapSettings } from 'vue-yandex-maps';
import type {
    YMapCameraRequest,
} from '@yandex/ymaps3-types/imperative/YMap'
import { onClickOutside, useToggle } from '@vueuse/core';

const map = useTemplateRef<HTMLDivElement>('map')

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
    tilt: (20 * Math.PI) / 180,
    duration: 2500,
})

const location = ref({
    center: [44.772160, 48.786934],
    zoom: 16
})
</script>

<template>
    <Section>
        <SectionContainer>
            <SectionHeading>
                Мы на карте
            </SectionHeading>

            <div>
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
                    real-settings-location
                    :class="[
                        $style.map,
                        { [$style.focused]: isFocused },
                        'transition-all hover:shadow-lg'
                    ]"
                >
                    <YandexMapDefaultSchemeLayer />
                    <YandexMapDefaultFeaturesLayer />

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
                </YandexMap>
            </div>
        </SectionContainer>
    </Section>
</template>

<style module>
.focused {
    outline: 4px dashed gray;
    outline-offset: 4px;
    border-radius: 0.75rem;
}
.map {
    height: 100%;
    border-radius: 0.75rem;
    border: 1px solid var(--c-site-background-darker-2);
    overflow: hidden;
    transition: 0.2s ease-out;
}
</style>
