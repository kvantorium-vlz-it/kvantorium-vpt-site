<script setup lang="ts">
const { data } = useSanityQuery<{
    mediaGallery: { image: string, _id: string }[]
}>(groq`
    *[_type == 'siteSettings'][0] {
        mediaGallery[] {
            _id,
            'image': asset->url
        }
    }
`)
</script>

<template>
    <KContainer :class="$style.container">
        <KSection heading="Галерея">
            <KGrid :columns="5">
                <KGridCell v-for="image in data?.mediaGallery" :key="image._id">
                    <img :class="$style.image" :src="image.image" alt="">
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
