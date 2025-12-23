<script setup lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next'
</script>

<template>
    <div>
        <h1 class="font-serif text-2xl leading-heading -tracking-tight font-medium">
            Навигация
        </h1>

        <ShNavigationMenu>
            <ShNavigationMenuList class="flex-col items-start">
                <ShNavigationMenuItem>
                    <BaseLink
                        variant="default"
                        theme="light"
                        to="/"
                    >
                        Главная
                        <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </BaseLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <BaseLink
                        variant="default"
                        theme="light"
                        :to="{ path: '/about/', hash: '#about' }"
                    >
                        О нас
                        <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </BaseLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <BaseLink
                        variant="default"
                        theme="light"
                        to="/news/"
                    >
                        Новости
                        <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </BaseLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <BaseLink
                        variant="default"
                        theme="light"
                        to="/kvantums/"
                    >
                        Направления
                        <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </BaseLink>
                </ShNavigationMenuItem>
            </ShNavigationMenuList>
        </ShNavigationMenu>
    </div>
</template>
