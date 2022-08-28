<template>
<nav :class="$style.Navigation">
    <vertical-navigation-item text="Главная" to="/" />
    <vertical-navigation-group-item
        label="Новости"
        :items="[
            { text: 'События' },
            { text: 'Мероприятия' },
        ]"
    />
    <vertical-navigation-group-item
        label="Квантумы"
        :items="[
            { text: 'Промдизайн-квантум' },
            { text: 'Промробо-квантум' },
            { text: 'VR/AR-квантум' },
            { text: 'IT-квантум' },
            { text: 'авто-квантум' },
            { text: 'аэро-квантум' },
            { text: 'хайтек' },
            { text: 'математика' },
            { text: 'технический английский' },
            { text: 'квантошахматы' },
        ]"
    />
    <vertical-navigation-group-item
        label="О нас"
        :items="[
            { text: 'Общаяя информация' },
            { text: 'Сотрудники' },
            { text: 'Сведения об организации' },
            { text: 'Документы' },
        ]"
    />
</nav>
</template>

<style module lang="postcss">
.Navigation {
    @apply flex flex-col gap-2;
}
</style>