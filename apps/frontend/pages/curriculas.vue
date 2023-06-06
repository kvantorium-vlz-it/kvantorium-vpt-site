<script setup lang="ts">
import { useCurriculasStore } from '~/store/curriculas';

const store = useCurriculasStore()

const curruculas = computed(() => store.curriculas.sort((c1, c2) => c1.name.localeCompare(c2.name)))
</script>

<template>
    <Section heading="Документы">
        <AboutParagraph>
            <strong>Расписание учебных занятий в детском технопарке “Кванториум “Волжский Политех”</strong>

            <!-- TODO add link -->
            <a href="">
                <Icon name="basil:document-outline" />
            </a>
        </AboutParagraph>

        <AboutParagraph>
            <strong>Программы квантумов</strong>

            <ul>
                <li
                    v-for="curriculum in curruculas"
                    :key="curriculum.id"
                >
                    {{ curriculum.name }}
                    <a :href="curriculum.file" target="_blank">
                        <Icon name="basil:document-outline" />
                    </a>
                </li>
            </ul>
        </AboutParagraph>
    </Section>
</template>
