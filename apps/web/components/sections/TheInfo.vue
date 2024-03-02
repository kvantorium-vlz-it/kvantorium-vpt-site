<script setup lang="ts">
const info = ref()
const isVisible = useElementVisibility(info)
const isLoadedOnce = ref(false)

watch(isVisible, () => {
    isLoadedOnce.value = true
}, {
    once: true,
})

const isPlayAnimation = computed(() => isLoadedOnce.value)
</script>

<template>
    <div ref="info" :class="{
        [$style.container]: true,
        [$style.visible]: isPlayAnimation
    }">
        <div :class="$style.content">
            <TheInfoBlockWrapper :is-visible="isPlayAnimation">
                <template #right>
                    <TheInfoBlockContent label="О нас">
                        Детские технопарки «Кванториум» — это федеральная сеть образовательных площадок, оснащенных высокотехнологичным оборудованием, где дети учатся по принципу проектного обучения: от теории сразу к практике.
                    </TheInfoBlockContent>
                </template>
            </TheInfoBlockWrapper>
            <TheInfoBlockWrapper :animation-delay="0.3" :is-visible="isPlayAnimation">
                <template #left>
                    <TheInfoBlockContent label="Миссия">
                        Содействовать ускоренному техническому развитию детей и реализации научно-технического потенциала российской молодежи, внедряя эффективные модели образования, доступные для тиражирования во всех регионах страны.
                    </TheInfoBlockContent>
                </template>
            </TheInfoBlockWrapper>
            <TheInfoBlockWrapper :animation-delay="0.6" :is-visible="isPlayAnimation">
                <template #right>
                    <TheInfoBlockContent label="Задачи">
                        <ol :class="$style.list">
                            <li>
                                Развитие творческого потенциала детей
                            </li>
                            <li>
                                Возрождение интереса к техническим профессиям.
                            </li>
                            <li>
                                Воспитание будущих высококлассных специалистов в стратегически важных областях российской науки и техники
                            </li>
                        </ol>
                    </TheInfoBlockContent>
                </template>
            </TheInfoBlockWrapper>
        </div>
    </div>
</template>

<style module>
.container {
    padding-inline: var(--site-margin);
    /* margin-bottom: 4rem; */
    padding-top: 4rem;
    position: relative;
}
.container::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: calc(100% - 4rem);
    left: 50%;
    translate: -50%;
    width: 2px;
    background-color: var(--c-site-background-darker-2);
}
.content::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    translate: -50%;
    bottom: 0;
    background-color: var(--c-site-background);
    width: 2rem;
    transition: 0.9s linear;
}
.visible .content::after {
    top: 100%;
}
.list {
    padding: 0;
    margin: 0;
    list-style-position: inside;
}
</style>
