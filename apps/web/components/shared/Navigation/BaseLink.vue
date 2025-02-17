<script lang="ts">
import type { VariantProps } from 'class-variance-authority'
import type { NuxtLinkProps } from '#app'
import type { HTMLAttributes } from 'vue'
import type { PrimitiveProps } from 'radix-vue'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Primitive } from 'radix-vue'
import { NuxtLink } from '#components'

type BaseLinkVariants = VariantProps<typeof baseLinkVariants>

export interface BaseLinkProps {
    to?: NuxtLinkProps['to']
    asChild?: PrimitiveProps['asChild']
    variant?: BaseLinkVariants['variant']
    size?: BaseLinkVariants['size']
    color?: BaseLinkVariants['color']
    class?: HTMLAttributes['class']
}

const baseLinkVariants = cva(
    `
    font-serif leading-input -tracking-base font-medium
    inline-flex items-center gap-1 justify-center
    group/link [&>svg]:transition-transform transition-all
    cursor-pointer disabled:cursor-default
    `,
    {
        variants: {
            color: {
                white: 'text-white hover:text-white/80 focus:text-white/80 data-[state=open]:text-white/80',
                black: 'text-foreground hover:text-foreground/80 focus:text-foreground/80 data-[state=open]:text-foreground/80',
            },
            variant: {
                link: '',
                outline: 'rounded-full',
            },
            size: {
                small: 'text-md [&>svg]:size-4',
                default: 'text-lg [&>svg]:size-5',
                big: 'text-xl [&>svg]:size-6',
            },
        },
        defaultVariants: {
            size: 'default',
            variant: 'link',
            color: 'black',
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
                color: 'white',
                class: 'hover:bg-gray-light/20',
            },
            {
                variant: 'outline',
                color: 'black',
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
        :class="cn(baseLinkVariants({ variant, size, color }), props.class)"
    >
        <slot></slot>
    </Primitive>
</template>
