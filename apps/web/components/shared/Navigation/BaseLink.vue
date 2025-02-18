<script lang="ts">
import type { VariantProps } from 'class-variance-authority'
import type { NuxtLinkProps } from '#app'
import type { HTMLAttributes } from 'vue'
import type { PrimitiveProps } from 'radix-vue'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Primitive } from 'radix-vue'
import { NuxtLink } from '#components'

export type BaseLinkVariants = VariantProps<typeof baseLinkVariants>

export interface BaseLinkProps {
    to?: NuxtLinkProps['to']
    asChild?: PrimitiveProps['asChild']
    variant?: BaseLinkVariants['variant']
    size?: BaseLinkVariants['size']
    theme?: BaseLinkVariants['theme']
    class?: HTMLAttributes['class']
}

export const baseLinkVariants = cva(
    `
    font-serif leading-input -tracking-base font-medium
    inline-flex items-center gap-1 justify-center
    group/link [&>svg]:transition-transform transition-all
    cursor-pointer disabled:cursor-default [&_svg]:transition-transform
    `,
    {
        variants: {
            theme: {
                light: 'text-white hover:text-white/80 focus:text-white/80 data-[state=open]:text-white/80',
                dark: 'text-foreground hover:text-foreground/80 focus:text-foreground/80 data-[state=open]:text-foreground/80',
            },
            variant: {
                default: '',
                outline: 'rounded-full',
            },
            size: {
                small: 'text-base [&>svg]:size-4',
                default: 'text-md [&>svg]:size-5',
                big: 'text-lg [&>svg]:size-6',
            },
        },
        defaultVariants: {
            size: 'default',
            variant: 'default',
            theme: 'dark',
        },
        compoundVariants: [
            {
                size: 'small',
                variant: 'outline',
                class: 'px-2 py-1',
            },
            {
                variant: 'outline',
                size: 'default',
                class: 'px-3 py-1.5',
            },
            {
                variant: 'outline',
                size: 'big',
                class: 'px-4 py-2',
            },

            {
                variant: 'outline',
                theme: 'light',
                class: 'hover:bg-gray-light/20',
            },
            {
                variant: 'outline',
                theme: 'dark',
                class: 'hover:bg-blue-dark/10',
            }
        ]
    },
)
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseLinkProps>(), {
    asChild: false,
})
</script>

<template>
    <Primitive
        :to="to"
        :as="NuxtLink"
        :as-child="asChild"
        :class="cn(baseLinkVariants({ variant, size, theme }), props.class)"
    >
        <slot></slot>
    </Primitive>
</template>
