<script lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Primitive, type PrimitiveProps } from 'radix-vue'

export const badgeVariants = cva(
    `
    inline-flex items-center
    rounded-full border
    font-serif leading-input -tracking-base
    transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
    [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform
    `,
    {
        variants: {
            theme: {
                light: '',
                dark: '',
            },
            variant: {
                default:
                    'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                secondary:
                    'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                outline: 'border-gray',
            },
            size: {
                small: 'px-1.5 py-0.5 text-sm font-medium [&_svg]:size-3 gap-1',
                default: 'px-2.5 py-1 text-base font-medium [&_svg]:size-4 gap-1.5',
                big: 'px-6 py-1.5 text-md font-semibold [&_svg]:size-5 gap-2',
            }
        },
        compoundVariants: [
            {
                theme: 'light',
                variant: 'outline',
                class: 'text-gray-light hover:bg-gray-light/10',
            },
            {
                theme: 'dark',
                variant: 'outline',
                class: 'text-gray-dark hover:bg-gray-dark/10',
            },
        ],
        defaultVariants: {
            variant: 'default',
            size: 'default',
            theme: 'dark',
        },
    },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>

interface ShadcnBadgeBaseProps {
    variant?: BadgeVariants['variant']
    theme?: BadgeVariants['theme']
    size?: BadgeVariants['size']
    class?: HTMLAttributes['class']
    asChild?: PrimitiveProps['asChild']
    as?: PrimitiveProps['as']
}

export interface ShadcnBadgeProps
extends
    ShadcnBadgeBaseProps
{}
</script>

<script setup lang="ts">
const props = defineProps<ShadcnBadgeBaseProps>()
</script>

<template>
    <Primitive
        :class="cn(badgeVariants({ variant, size, theme }), props.class)"
        :as-child="asChild"
        :as="as"
    >
        <slot />
    </Primitive>
</template>
