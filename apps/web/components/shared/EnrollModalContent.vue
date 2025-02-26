<script setup lang="ts">
import { MapPinIcon, PhoneIcon } from 'lucide-vue-next';
import { YandexMap, YandexMapControls, YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker, YandexMapDefaultSchemeLayer, YandexMapGeolocationControl, YandexMapZoomControl, type YandexMapSettings } from 'vue-yandex-maps';
</script>

<template>
    <ShDialogContent class="rounded-2xl max-w-[80ch]">
        <ShDialogHeader>
            <ShDialogTitle class="text-left">
                Записаться
            </ShDialogTitle>
        </ShDialogHeader>

        <div>
            <div class="font-serif text-2xl font-bold mb-4">
                Контакты
            </div>

            <ShNavigationMenu>
                <ShNavigationMenuList class="flex flex-col items-start gap-1">
                    <ShNavigationMenuItem>
                        <BaseLink to="tel:89023835024" external>
                            <PhoneIcon />

                            8(902)383-50-24
                        </BaseLink>
                    </ShNavigationMenuItem>

                    <ShNavigationMenuItem>
                        <BaseLink to="geo:48.786934,44.772160" external>
                            <MapPinIcon />

                            Волжский ул. Машиностроителей, 15, 404121
                        </BaseLink>
                    </ShNavigationMenuItem>
                </ShNavigationMenuList>
            </ShNavigationMenu>
        </div>

        <div>
            <YandexMap
                ref="map"
                :settings="{
                    location: {
                        center: [44.772160, 48.786934],
                        zoom: 16
                    },
                    camera: {
                        tilt: (20 * Math.PI) / 180,
                        duration: 2500,
                    },
                    showScaleInCopyrights: true,
                }"
                width="100%"
                height="22rem"
                real-settings-location
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
    </ShDialogContent>
</template>
