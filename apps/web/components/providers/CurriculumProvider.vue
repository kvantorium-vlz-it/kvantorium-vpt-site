<script setup lang="ts">
const props = defineProps<{
    id?: string
}>()

const query = groq`
    *[
        _type == 'kvantorium.curriculum'
        && _id == $id
    ] {
        level,
        _id,
        description,
        name,
        minimalAge,
        studentsInGroup,
        hoursPerYear,
        schedule,
        'teacherId': teacher._ref,
        'kvantumId': kvantum._ref,
    }
`

const { data } = useSanityQuery(query, {
    id: props.id,
})
</script>

<template>
    <slot></slot>
</template>
