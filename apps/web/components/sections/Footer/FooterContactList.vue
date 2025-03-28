<script setup lang="ts">
import { LINK_TYPE } from '@kvantoriumvlz/shared';
import { MailIcon, GlobeIcon, MapPinIcon, PhoneIcon, ArrowUpRightIcon } from 'lucide-vue-next'

interface Props {
    links?: {
        linkType: typeof LINK_TYPE[keyof typeof LINK_TYPE]
        label?: string
        link: string
    }[]
    heading: string
}

withDefaults(defineProps<Props>(), {
    links: () => []
})
</script>

<template>
    <div>
        <h1 class="font-serif text-2xl leading-heading -tracking-tight font-medium">
            {{ heading }}
        </h1>

        <ShNavigationMenu>
            <ShNavigationMenuList class="flex-col items-start">
                <ShNavigationMenuItem v-for="link in links">
                    <BaseLink
                        :to="link.link"
                        variant="default"
                        theme="light"
                        target="_blank"
                    >
                        <MailIcon v-if="link.linkType === LINK_TYPE.EMAIL" />
                        <MapPinIcon v-else-if="link.linkType === LINK_TYPE.GEOLOCATION" />
                        <GlobeIcon v-else-if="link.linkType === LINK_TYPE.WEBSITE" />
                        <PhoneIcon v-else-if="link.linkType === LINK_TYPE.PHONE" />
                        <ArrowUpRightIcon v-else />

                        {{ link.label || link.link }}
                    </BaseLink>
                </ShNavigationMenuItem>
            </ShNavigationMenuList>
        </ShNavigationMenu>
    </div>
</template>
