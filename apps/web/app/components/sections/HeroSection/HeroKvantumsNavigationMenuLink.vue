<script lang="ts">
import { ArrowUpRightIcon } from 'lucide-vue-next';
import type { BaseLinkProps } from '~/components/shared/Navigation/BaseLink.vue'

interface HeroKvantumsNavigationMenuLinkBaseProps {
    to?: BaseLinkProps['to']
}

interface HeroKvantumsNavigationMenuLinkProps
extends
    HeroKvantumsNavigationMenuLinkBaseProps
{}
</script>

<script setup lang="ts">
defineProps<HeroKvantumsNavigationMenuLinkProps>()
</script>

<template>
    <ShNavigationMenuLink as-child>
        <BaseLink
            :to="to"
            size="big"
            theme="light"
        >
            <ShBadge
                size="big"
                variant="outline"
                theme="light"
            >
                <slot></slot>

                <ArrowUpRightIcon class="group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
            </ShBadge>
        </BaseLink>
    </ShNavigationMenuLink>
</template>
