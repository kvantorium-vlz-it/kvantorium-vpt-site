<script setup lang="ts">
import { CONTACT_LINK_TYPE } from '@kvantoriumvlz/shared';
import { MailIcon, GlobeIcon, MapPinIcon, PhoneIcon, ArrowUpRightIcon } from 'lucide-vue-next'

interface Props {
    links?: {
        linkType: typeof CONTACT_LINK_TYPE[keyof typeof CONTACT_LINK_TYPE]
        title: string
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
                        <MailIcon v-if="link.linkType === CONTACT_LINK_TYPE.EMAIL" />
                        <MapPinIcon v-else-if="link.linkType === CONTACT_LINK_TYPE.GEOLOCATION" />
                        <GlobeIcon v-else-if="link.linkType === CONTACT_LINK_TYPE.WEBSITE" />
                        <PhoneIcon v-else-if="link.linkType === CONTACT_LINK_TYPE.PHONE" />
                        <ArrowUpRightIcon v-else-if="link.linkType === CONTACT_LINK_TYPE.OTHER" />

                        {{ link.title }}
                    </BaseLink>
                </ShNavigationMenuItem>
            </ShNavigationMenuList>
        </ShNavigationMenu>
    </div>
</template>
