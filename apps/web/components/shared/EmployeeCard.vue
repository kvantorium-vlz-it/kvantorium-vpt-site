<script setup lang="ts">
import type { Employee } from '~/assets/typescript/types'

const props = defineProps<{
    employee: Employee
}>()

const fullName = computed(() => `${props.employee.surname} ${props.employee.name} ${props.employee.patronymic}`)
</script>

<template>
    <ShCard>
        <ShCardHeader>
            <ShCardTitle>
                {{ fullName }}
            </ShCardTitle>

            <ShCardDescription>
                {{ employee.description }}
            </ShCardDescription>
        </ShCardHeader>

        <ShCardContent>
            <img
                :src="employee.image.asset.src!"
                alt=""
                class="aspect-square object-cover rounded-lg"
            >
        </ShCardContent>
    </ShCard>
</template>
