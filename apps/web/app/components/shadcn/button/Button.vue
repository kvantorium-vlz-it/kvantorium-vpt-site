<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { PrimitiveProps } from 'radix-vue'
import type { VariantProps } from 'class-variance-authority'
import { Primitive } from 'radix-vue'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
    `
    inline-flex items-center justify-center
    whitespace-nowrap
    font-serif leading-input -tracking-base
    transition-colors
    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
    disabled:pointer-events-none disabled:opacity-50
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
                    'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                ghost:
                    'text-blue-dark hover:bg-accent hover:text-accent-foreground',
                gradient:
                    'bg-gradient-to-br from-primary to-accent text-background shadow hover:from-primary/85 hover:to-accent/85',
                outline:
                    'border border-input bg-transparent shadow-sm hover:bg-gray-light/10 hover:border-accent',
                secondary:
                    'bg-secondary text-secondary-foreground shadow hover:bg-secondary/80',
            },
            rounding: {
                rounded: 'rounded-full',
                square: 'rounded-lg',
            },
            size: {
                small: 'px-4 py-1.5 text-sm font-medium [&_svg]:size-4 gap-1.5',
                default: 'px-6 py-2 text-base font-medium [&_svg]:size-5 gap-2',
                big: 'px-8 py-2.5 text-md font-medium [&_svg]:size-6 gap-2.5',
            },
        },
        compoundVariants: [
            {
                theme: 'light',
                variant: 'ghost',
                class: 'text-white',
            },
            {
                theme: 'light',
                variant: 'outline',
                class: 'text-white',
            },
        ],
        defaultVariants: {
            variant: 'default',
            size: 'default',
            rounding: 'rounded',
            theme: 'dark',
        },
    },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

interface ShadcnButtonBaseProps {
    rounding?: ButtonVariants['rounding']
    variant?: ButtonVariants['variant']
    theme?: ButtonVariants['theme']
    size?: ButtonVariants['size']
    class?: HTMLAttributes['class']
}

export interface ShadcnButtonProps
extends
    PrimitiveProps,
    ShadcnButtonBaseProps
{}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ShadcnButtonProps>(), {
    as: 'button',
})
</script>

<template>
    <Primitive
        :as="as"
        :as-child="asChild"
        :class="cn(buttonVariants({ variant, size, rounding, theme }), props.class)"
    >
        <slot />
    </Primitive>
</template>
