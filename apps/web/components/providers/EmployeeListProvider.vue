<script setup lang="ts">
import { createEmployeeFragment, DOCUMENT_TYPES, q } from '@kvantoriumvlz/shared'
import type { InferResultType } from 'groqd'

const builder = q
    .star
    .filterByType(DOCUMENT_TYPES.EMPLOYEE)
    .project(createEmployeeFragment(q))

type EmployeeQueryResult = InferResultType<typeof builder>

const { data } = useSanityQuery<EmployeeQueryResult[]>(builder.query)
</script>

<template>
    <slot :employees="data || []"></slot>
</template>
