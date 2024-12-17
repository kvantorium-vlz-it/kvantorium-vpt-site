<script setup lang="ts">
const props = defineProps<{
    teacher?: string
    kvantum?: string
    level?: 1 | 2 | 3

    count?: number
    offset?: number
}>()

const isTeacherFiltering = computed(() => typeof props.teacher !== 'undefined')
const isKvantumFiltering = computed(() => typeof props.kvantum !== 'undefined')
const isLevelFiltering = computed(() => typeof props.level !== 'undefined')
const isCountFiltering = computed(() => typeof props.count !== 'undefined')

const teacherFilter = groq`teacher._ref == $teacherId`
const kvantumFilter = groq`kvantum._ref == $kvantumId`
const levelFilter = groq`level == $level`
const countFilter = groq`[$offset...$count + $offset]`

const query = groq`
    *[
        _type == 'kvantorium.curriculum'
        && (
            ${isTeacherFiltering.value ? teacherFilter : true}
            && ${isKvantumFiltering.value ? kvantumFilter : true}
            && ${isLevelFiltering.value ? levelFilter : true}
        )
    ] ${isCountFiltering.value ? countFilter : ''} {
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
    teacherId: props.teacher || '',
    kvantumId: props.kvantum || '',
    level: props.level || 1,
    count: props.count || 0,
    offset: props.count || 0,
})
</script>

<template>
    <slot :curricula="data || []"></slot>
</template>
