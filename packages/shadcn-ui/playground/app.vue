<script setup lang="ts">
import { TheCursor } from 'curseur-vif';
import TestCursor from './components/TestCursor.vue';
</script>

<template>
    <div class="p-5">
        <NuxtLink v-curseur="TestCursor" href="https://google.com" target="_blank">
            <CurriculumBadge curriculum="VR/AR-квантум">
                Lorem, ipsum.
            </CurriculumBadge>
        </NuxtLink>

        <ClientOnly>
            <TheCursor set-visible-on-mounted>

                <div style="width: 32px; height: 32px; background-color: red;"></div>
            </TheCursor>
        </ClientOnly>
    </div>
</template>
