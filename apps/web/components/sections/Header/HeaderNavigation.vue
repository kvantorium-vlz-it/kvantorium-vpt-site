<script setup lang="ts">
import { FileTextIcon, UserRoundIcon, ImageIcon } from 'lucide-vue-next'
</script>

<template>
    <ShNavigationMenu class="z-50">
        <ShNavigationMenuList class="gap-2">
            <HeaderNavigationItem
                label="О нас"
                to="/"
            >
                <ul class="grid grid-cols-[minmax(0,2fr)_minmax(0,2fr)] gap-4">
                    <HeaderNavigationContentLink
                        class="flex justify-center items-center row-span-3 text-center hover:!pl-0 hover:pb-2 bg-blue-600 text-white"
                        as="li"
                        to="/about"
                    >
                        Об организации
                    </HeaderNavigationContentLink>

                    <HeaderNavigationContentLink
                        as="li"
                        to="/team/"
                        class="hover:bg-slate-200"
                    >
                        <UserRoundIcon :size="16" />

                        Наша команда
                    </HeaderNavigationContentLink>

                    <HeaderNavigationContentLink
                        as="li"
                        to="/documents"
                        class="hover:bg-slate-200"
                    >
                        <FileTextIcon :size="16" />

                        Документы
                    </HeaderNavigationContentLink>

                    <HeaderNavigationContentLink
                        as="li"
                        to="/media"
                        class="aspect-video flex justify-center items-center bg-slate-600 hover:pb-2 hover:!pl-0 text-white"
                    >
                        <ImageIcon :size="16" />
                        Медиа
                    </HeaderNavigationContentLink>
                </ul>
            </HeaderNavigationItem>

            <HeaderNavigationItem
                label="Новости"
                to="/news"
            />

            <HeaderNavigationItem
                label="Направления"
                to="/kvantums"
            />

            <HeaderNavigationItem
                label="Контакты"
                to="/contacts"
            />
            <!-- <ShNavigationMenuItem>
                <ShNavigationMenuTrigger>
                    О нас
                </ShNavigationMenuTrigger>

                <HeaderNavigationContent
                    as="ul"
                    class="grid grid-cols-[minmax(0,3fr)_minmax(0,5fr)] grid-rows-[minmax(0,auto)_minmax(0,auto)_minmax(0,1fr)]"
                >
                    <li class="rounded-md overflow-hidden row-span-3">
                        <ShNavigationMenuLink as-child class="relative group">
                            <NuxtLink to="/about">
                                <img
                                    class="block h-full aspect-[3/5]"
                                    src="https://avatars.mds.yandex.net/get-altay/4439632/2a0000017768b8ea88e0dafde19e040f604a/L_height"
                                    alt=""
                                >

                                <div class="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center text-white bg-slate-700 hover:bg-opacity-80 transition-colors bg-opacity-60 group">
                                    <span class="text-center group-hover:pb-2 transition-all">
                                        Об организации
                                    </span>
                                </div>
                            </NuxtLink>
                        </ShNavigationMenuLink>
                    </li>
                    <li>
                        <ShNavigationMenuLink>
                            <NuxtLink to="/team" class="flex items-center gap-2 hover:pl-2 transition-all hover:bg-gray-100 rounded">
                                <UserRoundIcon :size="16" />

                                Наша команда
                            </NuxtLink>
                        </ShNavigationMenuLink>
                    </li>
                    <li>
                        <ShNavigationMenuLink>
                            <NuxtLink to="/documents" class="flex gap-2 items-center hover:pl-2 transition-all hover:bg-gray-100 rounded">
                                <FileTextIcon :size="16" />
                                Документы
                            </NuxtLink>
                        </ShNavigationMenuLink>
                    </li>
                    <li class="rounded-md overflow-hidden">
                        <ShNavigationMenuLink as-child class="relative">
                            <NuxtLink to="/media" class="hover:pb-2 transition-all hover:bg-blue-700 bg-blue-600 w-full h-full gap-2 text-white flex justify-center items-center">
                                <ImageIcon :size="16" />

                                Медиа
                            </NuxtLink>
                        </ShNavigationMenuLink>
                    </li>
                </HeaderNavigationContent>
            </ShNavigationMenuItem>

            <ShNavigationMenuItem>
                <ShNavigationMenuTrigger>
                    Новости
                </ShNavigationMenuTrigger>

                <HeaderNavigationContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, a.
                </HeaderNavigationContent>
            </ShNavigationMenuItem>

            <ShNavigationMenuItem>
                <ShNavigationMenuLink
                    href="/news"
                    :class="navigationMenuTriggerStyle()"
                >
                    Направления
                </ShNavigationMenuLink>
            </ShNavigationMenuItem>

            <ShNavigationMenuItem>
                <ShNavigationMenuLink
                    href="/contacts"
                    :class="navigationMenuTriggerStyle()"
                >
                    Контакты
                </ShNavigationMenuLink>
            </ShNavigationMenuItem> -->
        </ShNavigationMenuList>
    </ShNavigationMenu>
</template>
