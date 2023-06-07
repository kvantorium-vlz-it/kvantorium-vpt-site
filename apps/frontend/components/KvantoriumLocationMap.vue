<script setup lang="ts">
import ymaps from 'ymaps'

const {
    id,
} = defineProps<{
    id: string
}>()

const KVANTORIUM_LOCATION = {
    latitude: 48.786934,
    longitude: 44.772160,
}

onMounted(() => {
    ymaps
        .load()
        .then((maps) => {
            const map = new maps.Map(id, {
                center: [KVANTORIUM_LOCATION.latitude, KVANTORIUM_LOCATION.longitude],
                zoom: 15
            })

            map.controls.remove('trafficControl')
            map.controls.remove('searchControl')
            map.controls.remove('typeSelector')

            map.geoObjects.add(new maps.Placemark([KVANTORIUM_LOCATION.latitude, KVANTORIUM_LOCATION.longitude], {
                balloonContent: '<strong>Кванториум ВОЛЖСКИЙ ПОЛИТЕХ</strong>'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/images/logo.png',
                iconImageSize: [32, 32],

                preset: 'islands#icon',
                iconColor: '#0095b6',
            }))
        })
        .catch(error => console.log('Failed to load Yandex Maps', error));
})
</script>

<template>
    <div :id="id" class="w-full aspect-[2] rounded-[20px] overflow-hidden"></div>
</template>

