<script setup lang="ts">
import { employeeQueryFieldsFragment, employeeQueryFilterFragment, type EmployeeQueryResult } from '@kvantoriumvlz/shared';

const query = groq`
    *[${employeeQueryFilterFragment}] {
        ${employeeQueryFieldsFragment}
        'curriculaId': *[_type == 'curriculum' && references(^._id)]._id,
    }
`

const { data } = useSanityQuery<EmployeeQueryResult[]>(query)
</script>

<template>
    <slot :employees="data || []"></slot>
</template>
