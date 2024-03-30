<script setup lang="ts">
const { data: documents } = useSanityQuery<{
    _id: string
    name: string
    file: {
        url: string
        size: number
    }
    _updatedAt: string
    _createdAt: string
}[]>(groq`
    *[_type == 'paper'] {
        _id,
        name,
        'file': file.asset-> {
            url,
            'size': size / 1024
        },
        _updatedAt,
        _createdAt,
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
            <ul :class="$style.list">
                <li
                    v-for="document in documents"
                    :key="document._id"
                >
                <div :class="$style.card">
                    <div :class="$style.title">
                        {{ document.name }}
                    </div>
                    <div :class="$style.date">
                        <template v-if="document._updatedAt">
                            (Обновлено {{ formatDate(new Date(document._updatedAt)) }})
                        </template>
                        <template v-else>
                            (Создано {{ formatDate(new Date(document._createdAt)) }})
                        </template>
                    </div>
                    <a download target="_blank" :href="document.file.url">
                        <Icon name="ph:file"/>
                        (Скачать/скачать {{ Math.floor(document.file.size * 100) / 100 }} кб.)
                    </a>
                </div>
                </li>
            </ul>
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
    margin-bottom: 0.25rem
}
.date {
    margin-bottom: 1.5rem;
    font-size: 0.75rem;
}
</style>
