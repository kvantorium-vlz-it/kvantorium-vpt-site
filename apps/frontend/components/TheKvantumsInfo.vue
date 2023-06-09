<script setup lang="ts">
import { useKvantumsStore } from '~/store/kvantums';

const kvantumsStore = useKvantumsStore()

const kvantums = computed(() => kvantumsStore.kvantums)
</script>

<template>
    <Container>
        <ul>
            <li
                v-for="kvantum in kvantums"
                :key="kvantum.id"
                class="mb-[110px]"
            >
                <KvantumInfo
                    :kvantum="kvantum"
                />
            </li>
        </ul>
    </Container>
</template>
