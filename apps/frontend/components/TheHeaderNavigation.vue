<template>
    <nav>
        <ul class="flex flex-wrap items-center gap-10">
            <TheHeaderNavigationProvider>
                <template #="{ items, checkIsGroupItem }">
                    <li
                        v-for="item, index in items"
                        :key="index"
                    >
                        <HeaderNavigationDropdownGroup
                            v-if="checkIsGroupItem(item)"
                            :items="item.items"
                            :label="item.label"
                        />

                        <HeaderNavigationItem
                            v-else
                            :label="item.label"
                            :to="item.to"
                        />
                    </li>
                </template>
            </TheHeaderNavigationProvider>
        </ul>
    </nav>
</template>
