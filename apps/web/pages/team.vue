<script setup lang="ts">
const { data: employes } = useSanityQuery<{
    isTeacher: boolean
    patronymic?: string
    surname: string
    name: string
    description: string
    image: string
    _id: string
}[]>(groq`
    *[_type == 'employee'] {
        isTeacher,
        patronymic,
        surname,
        name,
        description,
        _id,
        'image': image.image.asset->url
    }
`)
</script>

<template>
    <KContainer :class="$style.container">
        <KSection heading="Наша команда">
            <KGrid :class="$style.grid">
                <KGridCell v-for="employee in employes" :key="employee._id">
                    <div :class="$style.card">
                        <img :src="employee.image" :alt="`${employee.name} ${employee.surname} ${employee.patronymic}`" :class="$style.image">
                        <div :class="$style.name">
                            {{ employee.name }}
                            {{ employee.patronymic }}
                            {{ employee.surname }}
                        </div>

                        <div>
                            {{ employee.description }}
                        </div>
                    </div>
                </KGridCell>
            </KGrid>
        </KSection>
    </KContainer>
</template>

<style module>
.container {
    margin-top: 6rem;
}
.heading {
    text-align: center;
    font-family: 'BankGothic';
    margin-bottom: 4rem;
}
.grid {
    --columns: 1;
}

@media screen and (min-width: 768px) {
    .grid {
        --columns: 3;
    }
}
.card {
    --padding: 1rem;
    --border-radius: 1rem;
    padding: var(--padding);
    border-radius: var(--border-radius);
    border: 1px solid var(--c-site-background-darker-2);
}
.image {
    display: block;
    width: calc(100% + var(--padding) * 2);
    transform: translate(calc(var(--padding) * -1));
    margin-top: calc(var(--padding) * -1);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin-bottom: 1rem;
    aspect-ratio: 1;
    object-fit: cover;
}
.name {
    font-size: 2rem;
    margin-bottom: 1.5rem;
}
</style>
