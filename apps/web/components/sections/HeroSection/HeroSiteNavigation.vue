<script setup lang="ts">
</script>

<template>
    <div>
        <HeroNavigationHeading class="text-center laptop:text-left">
            навигация
        </HeroNavigationHeading>

        <HeroNavigationMenu class="mx-auto laptop:mx-0">
            <HeroNavigationList class="flex-col justify-center laptop:items-start gap-2">
                <HeroNavigationItem>
                    <NavigationLink to="/about/">
                        Информация
                    </NavigationLink>
                </HeroNavigationItem>

                <HeroNavigationItem>
                    <NavigationLink to="/kvantums/">
                        Квантумы
                    </NavigationLink>
                </HeroNavigationItem>

                <HeroNavigationItem>
                    <NavigationLink to="/news/">
                        Новости
                    </NavigationLink>
                </HeroNavigationItem>

                <HeroNavigationItem>
                    <NavigationLink to="/#faq">
                        Часто задаваемые вопросы
                    </NavigationLink>
                </HeroNavigationItem>

                <HeroNavigationItem>
                    <NavigationLink to="/#map">
                        Мы на карте
                    </NavigationLink>
                </HeroNavigationItem>
            </HeroNavigationList>
        </HeroNavigationMenu>
    </div>
</template>
