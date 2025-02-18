<script setup lang="ts">
</script>

<template>
    <div>
        <HeroNavigationHeading class="text-center laptop:text-left">
            навигация
        </HeroNavigationHeading>

        <HeroNavigationMenu class="mx-auto laptop:mx-0">
            <ShNavigationMenuList class="flex-col justify-center laptop:items-start gap-2">
                <ShNavigationMenuItem>
                    <HeroSiteNavigationMenuLink to="/about/">
                        Информация
                    </HeroSiteNavigationMenuLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <HeroSiteNavigationMenuLink to="/kvantums/">
                        Квантумы
                    </HeroSiteNavigationMenuLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <HeroSiteNavigationMenuLink to="/news/">
                        Новости
                    </HeroSiteNavigationMenuLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <HeroSiteNavigationMenuLink to="/#faq">
                        Часто задаваемые вопросы
                    </HeroSiteNavigationMenuLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <HeroSiteNavigationMenuLink to="/#map">
                        Мы на карте
                    </HeroSiteNavigationMenuLink>
                </ShNavigationMenuItem>
            </ShNavigationMenuList>
        </HeroNavigationMenu>
    </div>
</template>
