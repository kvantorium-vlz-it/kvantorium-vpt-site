<script setup lang="ts">
import { Kvantum } from '~/assets/typescript/types';
import { useCurriculasStore } from '~/store/curriculas';
import { useModalStore } from '~/store/modal';

const curriculasStore = useCurriculasStore()
const modalStore = useModalStore()

const {
    kvantum,
} = defineProps<{
    kvantum: Kvantum
}>()

const curriculas = computed(() => curriculasStore.curriculas.filter((c) => c.kvantum === kvantum.id))

const isOpened = ref<boolean>(false)
</script>

<template>
    <article class="">
        <div class="flex items-start mb-[70px]">
            <img
                class="flex-shrink-0 flex-grow-0 w-[420px] mr-[50px]"
                :src="kvantum.icon"
                alt=""
            >

            <div class="flex-1">
                <h3 class="text-[38px] font-black text-[#3C4580] ml-[100px] mb-[100px]">
                    {{ kvantum.name }}
                </h3>

                <RichText :blocks="kvantum.description" />

                <div class="flex justify-evenly">
                    <BaseButton
                        @click="modalStore.open"
                        variant="yellow"
                    >
                        Записаться на занятия
                    </BaseButton>

                    <BaseButton
                        variant="yellow"
                        @click="() => isOpened = !isOpened"
                    >
                        {{ isOpened ? 'Скрыть программы' : 'Учебные программы' }}
                        <Icon
                            name="tabler:chevron-down"
                            :class="isOpened ? 'rotate-180' : 'rotate-0'"
                        />
                    </BaseButton>
                </div>
            </div>
        </div>

        <ul
            v-if="isOpened"
            class="grid grid-cols-2 gap-[120px]"
        >
            <li
                v-for="curriculum in curriculas"
                :key="curriculum.id"
            >
                <Curriculum
                    :curriculum="curriculum"
                />
            </li>
        </ul>
    </article>
</template>
