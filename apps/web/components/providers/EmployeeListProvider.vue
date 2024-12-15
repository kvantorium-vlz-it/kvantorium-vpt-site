<script setup lang="ts">
import type { Employee } from '~/assets/typescript/types'

const query = groq`
    *[_type == 'kvantorium.employee'] {
        _id,
        surname,
        name,
        patronymic,
        description,
        isTeacher,
        'imageURL': image.asset -> url,
    }
`

const { data } = useSanityQuery<Employee[]>(query)
</script>

<template>
    <slot :employees="data || []"></slot>
</template>
