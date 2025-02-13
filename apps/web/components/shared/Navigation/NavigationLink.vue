<script lang="ts">
import type { NuxtLinkProps } from '#app'
import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'

const navigationLinkVariants = cva(
    `
    font-serif leading-input -tracking-base
    inline-flex items-center gap-1 justify-center
    group/navigation-item
    `,
    {
        variants: {
            variant: {
                light: 'text-white',
                dark: 'text-foreground',
            },
            size: {
                small: 'text-md [&>svg]:size-4',
                base: 'text-lg [&>svg]:size-5',
            }
        },
        defaultVariants: {
            size: 'base',
            variant: 'light',
        }
    }
)

type NavigationLinkVariants = VariantProps<typeof navigationLinkVariants>

type NavigationLinkProps = {
    to?: NuxtLinkProps['to']
    variant?: NavigationLinkVariants['variant']
    size?: NavigationLinkVariants['size']
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ArrowUpRightIcon } from 'lucide-vue-next'

const props = defineProps<NavigationLinkProps>()
</script>

<template>
    <NuxtLink
        :to="to"
        :class="cn(navigationLinkVariants({ variant, size }), props.class)"
    >
        <span>
            <slot></slot>
        </span>

        <ArrowUpRightIcon
            class="
                group-hover/navigation-item:-translate-y-1
                group-hover/navigation-item:translate-x-1 transition-transform
            "
        />
    </NuxtLink>
</template>
