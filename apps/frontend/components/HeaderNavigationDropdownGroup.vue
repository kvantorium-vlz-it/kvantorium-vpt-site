<script setup lang="ts">
import { HeaderNavigationDropdownGroupProps } from '@types'

defineProps<HeaderNavigationDropdownGroupProps>()
</script>

<template>
    <details class="group relative w-fit ">
        <summary class="list-none bg-[#E6E7EE] rounded-[10px] text-[20px] px-2 py-1 cursor-pointer">
            {{ label }}
            <Icon
                name="tabler:chevron-down"
                class="w-5 h-5 text-black group-open:rotate-180"
            />
        </summary>

        <ul
            v-show="items.length > 0"
            class="group-open:absolute group-open:top-[calc(100%+10px)] bg-[#E6E7EE] z-10 max-w-full p-[10px] rounded-[10px]"
        >
            <li
                v-for="item, index in items"
                :key="index"
            >
                <HeaderNavigationDropdownItem
                    :label="item.label"
                    :to="item.to"
                />
            </li>
        </ul>
    </details>
</template>
