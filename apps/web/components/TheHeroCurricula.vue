<script setup lang="ts">
import TheHeroCurriculaCursor from './TheHeroCurriculaCursor.vue'

interface Props {
    name: string
    to?: string
}

defineProps<Props>()

const { changeCursor, clearCursor } = useGlobalCursor()
</script>

<template>
    <NuxtLink
        @mouseover="() => {
            changeCursor({
                cursor: {
                    component: TheHeroCurriculaCursor,
                    attrs: { name: name }
                },
            })
        }"
        @mouseout="() => {
            clearCursor()
        }"
        :to="to"
    >
        <KBadge>
            {{ name }}

            <Icon name="ph:arrow-up-right" />
        </KBadge>
    </NuxtLink>
</template>
