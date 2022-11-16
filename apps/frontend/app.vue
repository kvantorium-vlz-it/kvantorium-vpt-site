<template>
    <div :class="$style.app">
        <TheHeader />
        <main>
            <NuxtPage />
        </main>
        <TheFooter />
    </div>
</template>

<style module lang="scss">
.app {
    overflow-x: clip;
    min-height: 100vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
}
</style>
