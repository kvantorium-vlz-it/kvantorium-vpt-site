<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
    <div class="text-center font-display text-md leading-tight tracking-tighter">
        <span>
            детский технопарк "кванториум "волжский политех"
        </span>

        <br>

        <span>
            {{ currentYear }}
        </span>
    </div>
</template>
