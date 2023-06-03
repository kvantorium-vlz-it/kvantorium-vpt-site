<script setup lang="ts">
interface DemoLessonCardTime {
    from: string
    to: string
}
interface DemoLessonCardAge {
    from: number
    to: number
}

defineProps<{
    name: string
    time: DemoLessonCardTime
    kvantum: string
    age: DemoLessonCardAge
    teacher: string

    to?: string
    image: string
}>()
</script>

<template>
    <article>
        <div
            :style="`background-image: url(${image});`"
            class="aspect-square bg-center bg-cover relative mb-4"
        >
            <div class="text-center text-white font-bold text-[36px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                "{{ name }}"
                <br>
                {{ time.from }}-{{ time.to }}
            </div>
            <BaseButton class="bottom-6 absolute left-1/2 -translate-x-1/2">
                Записаться
            </BaseButton>
        </div>

        <div class="text-center font-semibold text-[26px]">
            <strong class="font-bold">
                {{ kvantum }}
            </strong>
            <br>
            Возраст от {{ age.from }} до {{ age.to }}
            <br>
            {{ teacher }}
        </div>
    </article>
</template>
