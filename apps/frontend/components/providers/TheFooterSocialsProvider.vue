<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSiteSettingsStore } from '@/store/siteSettings'

interface ISocial {
    icon: string;
    link: string;
    title?: string;
}

const siteSettingsStore = storeToRefs(useSiteSettingsStore())

const socials = computed<ISocial[]>(() =>
    siteSettingsStore.footerSocials.value.map((social) => {
        return {
            icon: social.icon,
            link: social.link,
            title: social.title,
        }
    })
)
</script>

<template>
    <slot :socials="socials" />
</template>
