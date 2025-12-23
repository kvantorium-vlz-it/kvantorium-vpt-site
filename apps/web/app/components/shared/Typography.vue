<script lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'

const typographyVariants = cva(
    'font-serif -tracking-[0.05ch]',
    {
        variants: {
            variant: {
                'heading-6': 'font-bold text-heading-6 leading-heading',
                'heading-5': 'font-bold text-heading-5 leading-heading',
                'heading-4': 'font-bold text-heading-4 leading-heading',
                'heading-3': 'font-bold text-heading-3 leading-heading',
                'heading-2': 'font-bold text-heading-2 leading-heading',
                'heading-1': 'font-bold text-heading-1 leading-heading',
                'body': 'text-body leading-body',
                'body-small': 'text-body-small leading-body',
                'body-extra-small': 'text-body-extra-small leading-body',
                'input': 'text-body leading-input'
            }
        },
        defaultVariants: {
            variant: 'body',
        }
    }
)

export type TypographyVariants = VariantProps<typeof typographyVariants>

type Props = PrimitiveProps & {
    variant?: TypographyVariants['variant']
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<Props>(), {
    as: 'section',
})
</script>

<template>
    <Primitive
        :as="as"
        :as-child="asChild"
        :class="cn(typographyVariants({ variant: variant }), props.class)"
    >
        <slot></slot>
    </Primitive>
</template>
