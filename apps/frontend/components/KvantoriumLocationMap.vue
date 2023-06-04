<script setup>
import ymaps from 'ymaps'

const YANDEX_API = '20dfd6f4-545a-43cf-b1c8-96e82339316a'

const KVANTORIUM_LOCATION = {
    latitude: 48.786934,
    longitude: 44.772160,
}

onMounted(() => {
    ymaps
        .load(`https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_API}&lang=ru_RU`)
        .then(maps => {
            const map = new maps.Map('map', {
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
    <div id="map" class="w-full aspect-[2] rounded-[20px] overflow-hidden"></div>
</template>

