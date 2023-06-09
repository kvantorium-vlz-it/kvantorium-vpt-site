<script setup lang="ts">
import { Curriculum } from '~/assets/typescript/types';
import { useEmployeesStore } from '~/store/employees';

const {
    curriculum,
} = defineProps<{
    curriculum: Curriculum
}>()

const employeesStore = useEmployeesStore()

const teacher = computed(() => employeesStore.employees.find((e) => e.id === curriculum.teacher)!)
</script>

<template>
    <div>
        <h3 class="text-[26px] font-black text-[#3C4580] mb-[30px]">
            Программа "{{ curriculum.name }}"
        </h3>

        <RichText :blocks="curriculum.description" class="text-[26px] font-medium text-[#313340] mb-[20px]" />

        <p class="text-[26px] font-medium text-[#313340] mb-[20px]">
            Возраст от <strong>{{ curriculum.fromAge }}</strong> до <strong>{{ curriculum.toAge }}</strong> лет
        </p>

        <p class="text-[26px] font-medium text-[#313340] mb-[20px] grid grid-cols-2">
            <div>
                Педагог: <strong>{{ teacher.firstName }}
                {{ teacher.patronymic?.slice(0, 1).toUpperCase() }}.
                {{ teacher.lastName?.slice(0, 1).toUpperCase() }}.</strong>
            </div>

            <BaseButton @click="useModal().open" variant="yellow">
                Записаться
            </BaseButton>
        </p>

        <h4 class="text-[26px] font-semibold mb-0">
            Примеры проектов:
        </h4>
        <ul class="text-[26px] font-medium">
            <li
                v-for="example, index in curriculum.projectExamples"
                :key="index"
            >
                {{ example }}
            </li>
        </ul>
    </div>
</template>
