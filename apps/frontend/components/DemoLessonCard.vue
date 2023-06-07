<script setup lang="ts">
import { DemoLesson } from '~/assets/typescript/types';

defineProps<{
    lesson: DemoLesson
}>()
</script>

<template>
    <article>
        <div
            :style="`background-image: url(${lesson.image});`"
            class="aspect-square bg-center bg-cover relative mb-4"
        >
            <div class="text-center text-white font-bold text-[36px] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                "{{ lesson.name }}"
                <br>
                {{ lesson.fromTime }}-{{ lesson.toTime }}
            </div>
            <BaseButton class="bottom-6 absolute left-1/2 -translate-x-1/2">
                Записаться
            </BaseButton>
        </div>

        <div class="text-center font-semibold text-[26px]">
            <strong class="font-bold">
                {{ lesson.kvantum }}
            </strong>
            <br>
            Возраст от {{ lesson.fromAge }} до {{ lesson.toAge }}
            <br>
            {{ lesson.teacher }}
        </div>
    </article>
</template>
