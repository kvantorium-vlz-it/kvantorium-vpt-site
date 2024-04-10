<script setup lang="ts">
const { data } = useSanityQuery<{
    _key: string
    url: string
}[]>(groq`*[_type == 'settings'][0].mediaGallery[] {
    _key,
    'url': image.asset->url,
    }
`)
</script>

<template>
    <KContainer :class="$style.container">
        <KSection heading="Галерея" v-if="data">
            <KGrid :columns="5">
                <KGridCell v-for="image in data" :key="image._key">
                    <img :class="$style.image" :src="image.url" alt="">
                </KGridCell>
            </KGrid>
        </KSection>
    </KContainer>
</template>

<style module>
.image {
    display: block;
    width: 100%;
    object-fit: cover;
    height: 100%;
}
</style>
