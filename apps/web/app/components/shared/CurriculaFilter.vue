<script lang="ts">
import type { Kvantum } from '~/assets/typescript/types'

interface CurriculaFilterKvantum {
    _id: Kvantum['_id']
    _type: Kvantum['_type']
    name: Kvantum['name']
    slug: Kvantum['slug']
}

interface CurriculaFilterProps<T extends CurriculaFilterKvantum> {
    kvantums: T[]
}
</script>

<script setup lang="ts" generic="T extends CurriculaFilterKvantum = CurriculaFilterKvantum">
import { CURRICULUM_LEVEL, getCurriculumLevelLabel } from '@kvantoriumvlz/shared'

const props = defineProps<CurriculaFilterProps<T>>()

const emit = defineEmits<{
    (e: 'reset'): void
}>()

const [selectedKvantum] = defineModel<CurriculaFilterKvantum | undefined, "selectedKvantum", string | undefined, string | undefined>('selectedKvantum', {
    get(kvantum) {
        if (typeof kvantum === 'undefined') {
            return undefined
        }

        return kvantum._id
    },
    set(id) {
        if (typeof id === 'undefined') {
            return undefined
        }

        return props.kvantums.find((kvantum) => kvantum._id === id)
    }
})

const [selectedLevel] = defineModel<number | undefined, 'selectedLevel', string | undefined, string | undefined>('selectedLevel', {
    get(level) {
        if (typeof level === 'undefined') {
            return undefined
        }

        return '' + level
    },
    set(level) {
        if (typeof level === 'undefined') {
            return undefined
        }

        return level
    },
})

const reset = () => {
    selectedKvantum.value = undefined
    selectedLevel.value = undefined
    emit('reset')
}
</script>

<template>
    <div>
        <ShSelect v-model="selectedKvantum">
            <ShSelectTrigger>
                <ShSelectValue placeholder="Квантум" />
            </ShSelectTrigger>

            <ShSelectContent>
                <ShSelectItem
                    v-for="kvantum in kvantums"
                    :value="kvantum._id"
                    :key="kvantum._id"
                >
                    {{ kvantum.name }}
                </ShSelectItem>
            </ShSelectContent>
        </ShSelect>

        <ShSelect v-model="selectedLevel">
            <ShSelectTrigger>
                <ShSelectValue placeholder="Уровень обучения" />
            </ShSelectTrigger>

            <ShSelectContent>
                <ShSelectItem
                    v-for="level in Object.values(CURRICULUM_LEVEL)"
                    :value="'' + level"
                    :key="level"
                >
                    {{ getCurriculumLevelLabel(level) }}
                </ShSelectItem>
            </ShSelectContent>
        </ShSelect>

        <ShButton
            variant="secondary"
            rounding="square"
            class="tablet:col-span-2 desktop:col-span-1"
            @click="reset"
        >
            Сброс
        </ShButton>
    </div>
</template>
