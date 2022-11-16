<template>
    <div :class="$style.app">
        <TheHeader />
        <div>
            <NuxtPage />
        </div>
        <TheFooter />
    </div>
</template>

<style module lang="scss">
.app {
    overflow-x: clip;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
