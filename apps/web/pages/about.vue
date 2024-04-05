<script setup lang="ts">
const { data } = useSanityQuery<{
    about: any[]
}>(groq`
    *[_type == 'siteSettings'][0] {
        about[]{
            ...,
            _type == "imageBlock" => {
                ...,
                'image': image.asset->url,
            }
        }
    }
`)

console.log(data);
</script>

<template>
    <KContainer>
        <KSection heading="О нас">
            <div style="max-width: 50rem; margin-inline: auto;">
                <BlockContent v-if="data" :blocks="data.about" />
            </div>
        </KSection>
    </KContainer>
</template>
