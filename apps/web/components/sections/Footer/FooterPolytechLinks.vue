<script setup lang="ts">
import { MailIcon, GlobeIcon } from 'lucide-vue-next'
</script>

<template>
    <div>
        <h1 class="font-serif text-2xl leading-heading -tracking-tight font-medium">
            Техникум
        </h1>

        <ShNavigationMenu>
            <ShNavigationMenuList class="flex-col items-start">
                <ShNavigationMenuItem>
                    <BaseLink to="mailto:kvantoriumvlz@volpt.com" variant="default" theme="light">
                        <MailIcon />

                        volpt@volganet.ru
                    </BaseLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <BaseLink variant="default" theme="light">
                        <GlobeIcon />

                        volpt.ru
                    </BaseLink>
                </ShNavigationMenuItem>
            </ShNavigationMenuList>
        </ShNavigationMenu>
    </div>
</template>
