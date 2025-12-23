<script lang="ts">
import { getCurriculumLevelLabel } from '@kvantoriumvlz/shared'
import type {
    Curriculum as _Curriculum,
    Kvantum as _Kvantum,
} from '~/assets/typescript/types'
import { ArrowUpRightIcon } from 'lucide-vue-next'

export interface CurriculumKvantum {
    _id: _Kvantum['_id']
    _type: _Kvantum['_type']
    name: string
    slug: string
    icon: string
}

export interface Curriculum {
    _id: _Curriculum['_id']
    type: _Curriculum['_type']
    name: string
    level: _Curriculum['level']
    minimalAge: number
    hoursPerYear: _Curriculum['hoursPerYear']
    kvantum: CurriculumKvantum
}

export interface CurriculumCardProps<T extends Curriculum = Curriculum> {
    curriculum: T
}
</script>


<script setup lang="ts" generic="T extends Curriculum = Curriculum">
const props = defineProps<CurriculumCardProps<T>>()

const hoursPerYear = computed(() => {
    const {
        firstHalf = 0,
        secondHalf = 0,
    } = props.curriculum.hoursPerYear

    return firstHalf + secondHalf
})
</script>

<template>
    <ShCard class="relative overflow-hidden isolate group bg-white flex flex-col">
        <ShCardHeader>
            <ShBadge class="w-fit" size="small" variant="outline">
                Учебная программа
            </ShBadge>

            <ShCardTitle class="font-serif font-bold -tracking-tight leading-input">
                {{ curriculum.name }}
            </ShCardTitle>
        </ShCardHeader>

        <img
            class="size-64 absolute -bottom-24 -right-24 -z-10 group-hover:-translate-x-8 group-hover:-translate-y-8 transition-all"
            :src="curriculum.kvantum.icon"
            alt=""
        >

        <ShCardContent class="font-serif -tracking-tight flex-1" >
            <ul class="">
                <li>
                    <span class="text-gray-dark">
                        Квантум:
                    </span>
                    <span class="font-bold text-primary">
                        <NuxtLink
                            :to="`/kvantums/${curriculum.kvantum.slug}/`"
                            class="group/link inline-flex gap-1 items-center"
                        >
                            <span>
                                {{ curriculum.kvantum.name }}
                            </span>

                            <ArrowUpRightIcon class="size-4 group-hover/link:translate-x-0.5 transition-all group-hover/link:-translate-y-0.5" />
                        </NuxtLink>
                    </span>
                </li>
                <li>
                    <span class="text-gray-dark">
                        Уровень программы:
                    </span>
                    <span class="font-bold text-primary">
                        {{ getCurriculumLevelLabel(curriculum.level) }}
                    </span>
                </li>
                <li>
                    <span class="text-gray-dark">
                        Продолжительность:
                    </span>
                    <span class="font-bold text-primary">
                        {{ hoursPerYear }} акад.ч.
                    </span>
                </li>
                <li>
                    <span class="text-gray-dark">
                        Возраст:
                    </span>
                    <span class="font-bold text-primary">
                        {{ curriculum.minimalAge }}+
                    </span>
                </li>
            </ul>
        </ShCardContent>

        <ShCardFooter>
            <ShButton
                as-child
                variant="secondary"
                class="group/button"
                size="small"
            >
                <NuxtLink :to="`/curricula/${curriculum._id}/`">
                    Подробнее
                    <ArrowUpRightIcon class="group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                </NuxtLink>
            </ShButton>
        </ShCardFooter>
    </ShCard>
</template>
