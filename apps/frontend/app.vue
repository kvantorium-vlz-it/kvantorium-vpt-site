<script setup lang="ts">
import { useKvantumsStore } from './store/kvantums'
import { useCurriculasStore } from './store/curriculas'
import { useEmployeesStore } from './store/employees'

await Promise.all([
    useKvantumsStore().fetchAllKvantuns(),
    useCurriculasStore().fetchAllCurriculas(),
    useEmployeesStore().fetchAllEmployees(),
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
