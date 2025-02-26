<script setup lang="ts">
const isHeaderMustHaveBackground = inject('isHeaderMustHaveBackground', true)
</script>

<template>
    <ShNavigationMenu class="z-50">
        <template #viewport>
            <ShNavigationMenuViewport class="rounded-xl" />
        </template>

        <ShNavigationMenuList class="">
            <ShNavigationMenuItem>
                <HeaderNavigationMenuTrigger
                    size="default"
                    :theme="isHeaderMustHaveBackground ? 'dark' : 'light'"
                >
                    О нас
                </HeaderNavigationMenuTrigger>

                <ShNavigationMenuContent>
                    <ShNavigationMenu>
                        <ShNavigationMenuList class="px-4 py-3 flex-col items-start gap-2">
                            <ShNavigationMenuItem>
                                <HeaderNavigationMenuLink
                                    to="/team/"
                                    size="small"
                                >
                                    Команда
                                </HeaderNavigationMenuLink>
                            </ShNavigationMenuItem>

                            <ShNavigationMenuItem>
                                <HeaderNavigationMenuLink
                                    to="/about/"
                                    size="small"
                                >
                                    Об организации
                                </HeaderNavigationMenuLink>
                            </ShNavigationMenuItem>

                            <ShNavigationMenuItem>
                                <HeaderNavigationMenuLink
                                    to="/documents/"
                                    size="small"
                                >
                                    Документы
                                </HeaderNavigationMenuLink>
                            </ShNavigationMenuItem>

                            <ShNavigationMenuItem>
                                <HeaderNavigationMenuLink
                                    to="/media/"
                                    size="small"
                                >
                                    Медиа
                                </HeaderNavigationMenuLink>
                            </ShNavigationMenuItem>
                        </ShNavigationMenuList>
                    </ShNavigationMenu>
                </ShNavigationMenuContent>
            </ShNavigationMenuItem>

            <ShNavigationMenuItem>
                <HeaderNavigationMenuTrigger
                    size="default"
                    :theme="isHeaderMustHaveBackground ? 'dark' : 'light'"
                >
                    Обучение
                </HeaderNavigationMenuTrigger>

                <ShNavigationMenuContent>
                    <ShNavigationMenu>
                        <ShNavigationMenuList class="px-4 py-3 flex-col items-start gap-2">
                            <ShNavigationMenuItem>
                                <HeaderNavigationMenuLink
                                    to="/kvantums/"
                                    size="small"
                                >
                                    Направления
                                </HeaderNavigationMenuLink>
                            </ShNavigationMenuItem>

                            <ShNavigationMenuItem>
                                <HeaderNavigationMenuLink
                                    to="/curricula/"
                                    size="small"
                                >
                                    Учебные программы
                                </HeaderNavigationMenuLink>
                            </ShNavigationMenuItem>
                        </ShNavigationMenuList>
                    </ShNavigationMenu>
                </ShNavigationMenuContent>
            </ShNavigationMenuItem>

            <ShNavigationMenuItem>
                <HeaderNavigationMenuLink
                    to="/"
                    :theme="isHeaderMustHaveBackground ? 'dark' : 'light'"
                >
                    Главная
                </HeaderNavigationMenuLink>
            </ShNavigationMenuItem>

            <ShNavigationMenuItem>
                <HeaderNavigationMenuLink
                    to="/news/"
                    :theme="isHeaderMustHaveBackground ? 'dark' : 'light'"
                    class="px-3 py-1.5"
                    size="default"
                >
                    Новости
                </HeaderNavigationMenuLink>
            </ShNavigationMenuItem>

            <ShNavigationMenuItem>
                <HeaderNavigationMenuLink
                    :to="{ hash: '#contacts' }"
                    :theme="isHeaderMustHaveBackground ? 'dark' : 'light'"
                    class="px-3 py-1.5"
                    size="default"
                >
                    Контакты
                </HeaderNavigationMenuLink>
            </ShNavigationMenuItem>
        </ShNavigationMenuList>
    </ShNavigationMenu>
</template>
