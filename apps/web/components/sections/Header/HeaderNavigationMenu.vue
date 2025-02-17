<script setup lang="ts">
import { ShNavigationMenuList } from '#components'

const isHeaderMustHaveBackground = inject('isHeaderMustHaveBackground', true)
</script>

<template>
    <ShNavigationMenu class="z-50">
        <ShNavigationMenuList class="gap-4">
            <ShNavigationMenuItem>
                <HeaderNavigationMenuTrigger
                    :color="isHeaderMustHaveBackground ? 'black' : 'white'"
                >
                    О нас
                </HeaderNavigationMenuTrigger>

                <ShNavigationMenuContent>
                    <ShNavigationMenu>
                        <ShNavigationMenuList class="p-4 flex-col items-start gap-2">
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
                <HeaderNavigationMenuLink
                    to="/news/"
                    :color="isHeaderMustHaveBackground ? 'black' : 'white'"
                >
                    Новости
                </HeaderNavigationMenuLink>
            </ShNavigationMenuItem>

            <ShNavigationMenuItem>
                <HeaderNavigationMenuLink
                    to="/kvantums/"
                    :color="isHeaderMustHaveBackground ? 'black' : 'white'"
                >
                    Направления
                </HeaderNavigationMenuLink>
            </ShNavigationMenuItem>

            <ShNavigationMenuItem>
                <HeaderNavigationMenuLink
                    to="/#contacts"
                    :color="isHeaderMustHaveBackground ? 'black' : 'white'"
                >
                    Контакты
                </HeaderNavigationMenuLink>
            </ShNavigationMenuItem>
        </ShNavigationMenuList>
    </ShNavigationMenu>
</template>
