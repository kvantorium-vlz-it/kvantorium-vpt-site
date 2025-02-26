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
                    <BaseLink variant="default" theme="light">
                        Главная
                        <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </BaseLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <BaseLink variant="default" theme="light">
                        О нас
                        <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </BaseLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <BaseLink variant="default" theme="light">
                        Новости
                        <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </BaseLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <BaseLink variant="default" theme="light">
                        Направления
                        <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </BaseLink>
                </ShNavigationMenuItem>
            </ShNavigationMenuList>
        </ShNavigationMenu>
    </div>
</template>
