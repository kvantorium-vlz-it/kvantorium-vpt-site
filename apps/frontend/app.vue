<script setup lang="ts">
import { useKvantumsStore } from './store/kvantums'
import { useNewsStore } from './store/News'
import { useStaffStore } from './store/Staff'
import { useFilesStore } from './store/Files'

await Promise.all([
    useKvantumsStore(),
    useNewsStore(),
    useStaffStore(),
    useFilesStore(),
])
</script>

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
