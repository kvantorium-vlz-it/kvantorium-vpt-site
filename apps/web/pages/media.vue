<template>
    <KContainer :class="$style.container">
        <KSection heading="Медиа" />
    </KContainer>
    <KContainer :class="$style.container">
        <KSection heading="Галерея" />
    </KContainer>
</template>

<style module>
.container {
    margin-top: 5rem;
}
.heading {
    text-align: center;
    font-size: 2rem;
    font-family: 'BankGothic';
    margin-bottom: 4rem;
}
</style>
