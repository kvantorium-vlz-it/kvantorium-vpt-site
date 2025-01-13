<script setup lang="ts">
const route = useRoute()

const slug = route.params.slug as string
</script>

<template>
    <KvantumProvider #="{ kvantum }" :slug="slug">
        <Section>
            <SectionContainer>
                <SectionHeading>
                    <span v-if="kvantum">
                        {{ kvantum.name }}
                    </span>
                    <span v-else>
                        Квантум не найден
                    </span>
                </SectionHeading>

                <div v-if="kvantum" class="grid grid-cols-1 lg:grid-cols-[auto,minmax(auto,1fr)] gap-4">
                    <img
                        class="block mx-auto max-w-64 w-full lg:sticky lg:top-32"
                        :src="kvantum.icon?.asset?.src!"
                        :alt="`Логотип ${kvantum.name}`"
                    >

                    <div class="mt-4">
                        <PortableBlocks :blocks="kvantum.description" />
                    </div>
                </div>
            </SectionContainer>
        </Section>

        <Section>
            <SectionContainer>
                <SectionHeading>
                    Все квантумы
                </SectionHeading>

                <KvantumListProvider #="{ kvantums }">
                    <KvantumsCarousel :kvantums="kvantums" />
                </KvantumListProvider>
            </SectionContainer>
        </Section>
    </KvantumProvider>
</template>
