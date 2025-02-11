import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap text-gray-dark transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                // destructive:
                //     'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-accent',
                secondary: 'bg-secondary text-secondary-foreground shadow hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-accent hover:text-primary underline-offset-4 hover:underline',
                gradient: 'bg-gradient-to-br from-primary to-accent text-background shadow hover:from-primary/85 hover:to-accent/85'
            },
            rounding: {
                rounded: 'rounded-full',
                square: 'rounded-lg',
            },
            size: {
                default: 'px-8 py-2 gap-2'
                // default: 'h-9 px-4 py-2',
                // sm: 'h-8 px-3 text-xs',
                // lg: 'h-10 px-8',
                // icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            rounding: 'rounded',
        },
    },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
