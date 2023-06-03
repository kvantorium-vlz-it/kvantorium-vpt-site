<template>
    <Section heading="Демонстрационные занятия июнь 2023">
        <ul class="grid grid-cols-3 gap-x-24 gap-y-8">
            <li>
                <DemoLessonCard
                    :age="{ from: 12, to: 18 }"
                    image="/images/hero-closeup.webp"
                    kvantum="IT-Квантум"
                    :time="{ from: '10:00', to: '11:30' }"
                    name="Терменвокс"
                    teacher="Золотухин В.Р."
                />
            </li>
            <li>
                <DemoLessonCard
                    :age="{ from: 12, to: 18 }"
                    image="/images/hero-closeup.webp"
                    kvantum="IT-Квантум"
                    :time="{ from: '10:00', to: '11:30' }"
                    name="Терменвокс"
                    teacher="Золотухин В.Р."
                />
            </li>
            <li>
                <DemoLessonCard
                    :age="{ from: 12, to: 18 }"
                    image="/images/hero-closeup.webp"
                    kvantum="IT-Квантум"
                    :time="{ from: '10:00', to: '11:30' }"
                    name="Терменвокс"
                    teacher="Золотухин В.Р."
                />
            </li>
            <li>
                <DemoLessonCard
                    :age="{ from: 12, to: 18 }"
                    image="/images/hero-closeup.webp"
                    kvantum="IT-Квантум"
                    :time="{ from: '10:00', to: '11:30' }"
                    name="Терменвокс"
                    teacher="Золотухин В.Р."
                />
            </li>
        </ul>
    </Section>
</template>
