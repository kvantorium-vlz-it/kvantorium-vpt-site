<script setup lang="ts">
const offersAdvantages = [
    'Множество востребованных направлений',
    'Разнообразные программы - от простых к продвинутым',
    'Много практики',
    'Высокотехнологичное оборудование',
    'Команду квалифицированных педагогов-наставников',
]

const skillsAdvantage = [
    'Навыки работы в команде',
    'Умение выступать на публике',
    'Критическое мышление',
    'Понимание клиентов и их проблем',
    'Навыки тайм-менеджмента',
    'Умение саморефлексировать',
]
</script>

<template>
    <Section
        heading="Почему Кванториум?"
        id="advantages"
    >
        <h3 class="font-extrabold text-[28px] ml-[122px] mb-[30px]">
            Мы предлагаем
        </h3>
        <ul class="flex gap-x-[50px] gap-y-[30px]  mb-[70px] flex-wrap justify-center">
            <li
                class="group"
                v-for="advantage, index in offersAdvantages"
                :key="index"
            >
                <Advantage
                    :advantage="advantage"
                />
            </li>
        </ul>

        <h3 class="font-extrabold text-[28px] ml-[122px] mb-[30px]">
            Наши ученики, помимо профессиональных навыков, также приобретают:
        </h3>
        <ul class="flex gap-x-[50px] gap-y-[30px]  mb-[70px] flex-wrap justify-center">
            <li
                class="group"
                v-for="advantage, index in skillsAdvantage"
                :key="index"
            >
                <Advantage
                    :advantage="advantage"
                />
            </li>
        </ul>

        <BaseButton class="mx-auto" variant="yellow" @click="useModal().open">
            Записаться за занятия
        </BaseButton>
    </Section>
</template>
