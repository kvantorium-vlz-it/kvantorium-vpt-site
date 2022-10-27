<script setup>
const map = ref(null)

onMounted(() => {
    ymaps.ready(init)
})

const init = () => {
    // eslint-disable-next-line no-new
    new ymaps.Map(map.value, {
        center: [48.786934, 44.772160],
        zoom: 15
    })
}
</script>

<template>
    <div ref="map" :class="$style.map" />
</template>

<style module lang="scss">
.map {
    overflow: hidden;

    border-radius: var(--br-l);
    box-shadow: var(--bs-8);
}
</style>
