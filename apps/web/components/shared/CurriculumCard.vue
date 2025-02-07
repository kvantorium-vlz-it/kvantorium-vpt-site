<script setup lang="ts">
import { getCurriculumLevelLabel } from '@kvantoriumvlz/shared';
import type { Curriculum } from '~/assets/typescript/types'

const props = defineProps<{
    curriculum: Curriculum
}>()

const hoursPerYear = computed(() => {
    const {
        firstHalf = 0,
        secondHalf = 0,
    } = props.curriculum.hoursPerYear

    return firstHalf + secondHalf
})
</script>

<template>
    <ShCard class="aspect-square flex flex-col">
        <ShCardHeader class="flex-1 flex flex-col justify-between">
            <ShCardDescription>
                <ShBadge>
                    Учебная программа
                </ShBadge>
            </ShCardDescription>

            <ShCardTitle>
                {{ curriculum.name }}
            </ShCardTitle>
        </ShCardHeader>

        <ShCardContent>
            <p>
                Квантум:
                <span class="font-bold">
                    {{ curriculum.kvantum.name }}
                </span>
            </p>
            <p>
                Уровень программы:
                <span class="font-bold">
                    {{ getCurriculumLevelLabel(curriculum.level) }}
                </span>
            </p>
            <p>
                Продолжительность:
                <span class="font-bold">
                    {{ hoursPerYear }} акад.ч.
                </span>
            </p>
            <p>
                Возраст:
                <span class="font-bold">
                    {{ curriculum.minimalAge }}+
                </span>
            </p>
        </ShCardContent>
        <ShCardFooter>
            <ShButton as-child>
                <NuxtLink :to="`/curricula/${curriculum._id}`">
                    Подробнее
                </NuxtLink>
            </ShButton>
        </ShCardFooter>
    </ShCard>
</template>
