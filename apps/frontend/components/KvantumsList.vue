<script setup lang="ts">
import { Kvantum } from '~/assets/typescript/types';

defineProps<{
    kvantums: Kvantum[]
    heading: string
}>()
</script>

<template>
    <div>
        <header class="text-[38px] font-black text-[#3C4580] text-right mb-[60px]">
            {{ heading }}
        </header>

        <ul class="grid grid-cols-3 gap-[160px] mb-[40px]">
            <li
                v-for="kvantum in kvantums"
                :key="kvantum.id"
            >
                <KvantumCard
                    :kvantum="kvantum"
                />
            </li>
        </ul>
    </div>
</template>
