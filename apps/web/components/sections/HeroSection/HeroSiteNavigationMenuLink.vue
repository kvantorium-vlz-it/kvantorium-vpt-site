<script lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next';
import type { BaseLinkProps } from '~/components/shared/Navigation/BaseLink.vue'

interface HeroSiteNavigationMenuLinkBaseProps {
    to?: BaseLinkProps['to']
}

export interface HeroSiteNavigationMenuLinkProps
extends
    HeroSiteNavigationMenuLinkBaseProps
{}
</script>

<script setup lang="ts">

defineProps<HeroSiteNavigationMenuLinkProps>()
</script>

<template>
    <ShNavigationMenuLink as-child>
        <BaseLink
            :to="to"
            theme="light"
            size="big"
        >
            <slot></slot>
            <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </BaseLink>
    </ShNavigationMenuLink>
</template>
