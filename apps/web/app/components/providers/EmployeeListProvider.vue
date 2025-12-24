<script setup lang="ts">
import { DOCUMENT_TYPES } from '@kvantoriumvlz/shared'
import type { InferResultType } from 'groqd'
import { q, employeeProjection } from '#shared/sanity'

const builder = q
    .star
    .filterByType(DOCUMENT_TYPES.EMPLOYEE)
    .project(employeeProjection)

type EmployeeQueryResult = InferResultType<typeof builder>

const { data } = useSanityQuery<EmployeeQueryResult[]>(builder.query)
</script>

<template>
    <slot :employees="data || []"></slot>
</template>
