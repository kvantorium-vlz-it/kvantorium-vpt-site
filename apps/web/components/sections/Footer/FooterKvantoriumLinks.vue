<script setup lang="ts">
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-vue-next'
</script>

<template>
    <div>
        <h1 class="font-serif text-2xl leading-heading -tracking-tight font-medium">
            Кванториум
        </h1>

        <ShNavigationMenu>
            <ShNavigationMenuList class="flex-col items-start">
                <ShNavigationMenuItem>
                    <BaseLink to="mailto:kvantoriumvlz@volpt.com" variant="default" theme="light">
                        <MailIcon />

                        kvantoriumvlz@volpt.com
                    </BaseLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <BaseLink variant="default" theme="light">
                        <PhoneIcon />

                        8(902)383-50-24
                    </BaseLink>
                </ShNavigationMenuItem>

                <ShNavigationMenuItem>
                    <BaseLink variant="default" theme="light">
                        <MapPinIcon />

                        Волжский ул. Машиностроителей, 15, 404121
                    </BaseLink>
                </ShNavigationMenuItem>
            </ShNavigationMenuList>
        </ShNavigationMenu>
    </div>
</template>
