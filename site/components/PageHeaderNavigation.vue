<!-- Component for header links organization -->
<template>
<nav :class="$style.Navigation">
    <navigation-item text="Главная" to="/" />
    <navigation-dropdown-item
        group-name="Новости"
        :items="[
            { text: 'События' },
            { text: 'Мероприятия' },
        ]"
    />
    <navigation-dropdown-item
        group-name="Квантумы"
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
    <navigation-dropdown-item
        group-name="О нас"
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
    @apply flex flex-col gap-4;
}
</style>
