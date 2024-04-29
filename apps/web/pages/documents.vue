<script setup lang="ts">
const { data: documents } = useSanityQuery<{
    _key: string
    url: string
    size: number
    name: string
}[]>(groq`
    *[_type == 'settings'][0].papers[] {
        _key,
        'url': file.asset->url,
        'size': file.asset->size / 1024,
        name,
    }
`)

function formatDate(date: Date) {
    const dateString = date.toISOString().slice(0, 16).replace('T', ' в ')
    return dateString
}
</script>

<template>
    <KContainer>
        <KSection heading="Документы">
            <KGrid :class="$style.grid">
                <KGridCell
                    v-for="document in documents"
                    :key="document._key"
                >
                    <DocumentCard :document="document" />
                </KGridCell>
            </KGrid>
        </KSection>
    </KContainer>
</template>

<style module>
.list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
}
.link {
    text-decoration: none;
}
.grid {
    --columns: 1;
}
@media screen and (min-width: 768px) {
    .grid {
        --columns: 4;
    }
}
.card {
    border-radius: 1rem;
    padding: 1.5rem;
    border: 1px solid var(--c-site-background-darker-2);
    color: var(--c-site-text);
    /* display: flex; */
    /* flex-direction: column; */
    /* gap: 2rem; */
}
.title {
    font-size: 1.5rem;
    margin-bottom: 1.75rem;
}
.date {
    font-size: 0.75rem;
}
</style>
