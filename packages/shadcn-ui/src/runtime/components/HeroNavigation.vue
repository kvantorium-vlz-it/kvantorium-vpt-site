<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@sh-module/shadcn/ui/navigation-menu'
</script>

<template>
    <div :class="$style.navigation">
        <h1 :class="$style.title">
            Направления
        </h1>

        <NavigationMenu>
            <NavigationMenuList :class="$style.list">
                <NavigationMenuItem>
                    <NuxtLink to="https://google.com" target="_blank">
                        <NavigationMenuLink as-child>
                            <CurriculumBadge curriculum="VR/AR-квантум" />
                        </NavigationMenuLink>
                    </NuxtLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NuxtLink to="https://google.com" target="_blank">
                        <NavigationMenuLink as-child>
                            <CurriculumBadge curriculum="IT-квантум" />
                        </NavigationMenuLink>
                    </NuxtLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NuxtLink to="https://google.com" target="_blank">
                        <NavigationMenuLink as-child>
                            <CurriculumBadge curriculum="медиа-квантум" />
                        </NavigationMenuLink>
                    </NuxtLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
</template>

<style module>
.navigation {
    width: min-content;
}
.title {
    font-family: 'BankGothic';
    font-size: 3rem;
    font-weight: 500;
}
.list {
    flex-wrap: wrap;
    justify-content: flex-end;
}
</style>
