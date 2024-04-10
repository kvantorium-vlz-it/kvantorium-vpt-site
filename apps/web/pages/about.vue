<script setup lang="ts">
const { data } = useSanityQuery<any[]>(groq`*[_type == 'settings'][0].about`)

console.log(data);
</script>

<template>
    <KContainer>
        <KSection heading="О нас">
            <div style="max-width: 50rem; margin-inline: auto;">
                <BlockContent v-if="data" :blocks="data" />
            </div>
        </KSection>
    </KContainer>
</template>
