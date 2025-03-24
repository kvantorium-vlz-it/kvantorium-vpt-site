<script setup lang="ts">
import type { Employee } from '~/assets/typescript/types'

const props = defineProps<{
    employee: Employee
}>()

const fullName = computed(() => {
    return props.employee.patronymic
        ? `${props.employee.surname} ${props.employee.name} ${props.employee.patronymic}`
        : `${props.employee.surname} ${props.employee.name}`
})
</script>

<template>
    <ShCard>
        <img
            :src="employee.image.asset.src!"
            alt=""
            class="aspect-square w-full object-cover rounded-lg"
        >

        <ShCardHeader>
            <ShCardTitle class="-tracking-tight leading-input">
                {{ fullName }}
            </ShCardTitle>

            <ShCardDescription>
                {{ employee.description }}
            </ShCardDescription>
        </ShCardHeader>
    </ShCard>
</template>
