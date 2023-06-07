<script setup lang="ts">
import { useKvantumsStore } from './store/kvantums'
import { useCurriculasStore } from './store/curriculas'
import { useEmployeesStore } from './store/employees'
import { useNewsStore } from './store/news';

await Promise.all([
    useKvantumsStore().fetchAllKvantuns(),
    useCurriculasStore().fetchAllCurriculas(),
    useEmployeesStore().fetchAllEmployees(),
    useNewsStore().fetchAllNews(),0
])
</script>

<template>
    <div
        id="root"
        class="min-h-screen grid grid-cols-1 grid-rows-layout"
    >
        <TheHeader />
        <main>
            <NuxtPage />
        </main>
        <TheFooter />
    </div>
</template>
