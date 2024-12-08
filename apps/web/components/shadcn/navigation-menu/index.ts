import { cva } from 'class-variance-authority'

export { default as NavigationMenu } from './NavigationMenu.vue'
export { default as NavigationMenuContent } from './NavigationMenuContent.vue'
export { default as NavigationMenuItem } from './NavigationMenuItem.vue'
export { default as NavigationMenuLink } from './NavigationMenuLink.vue'
export { default as NavigationMenuList } from './NavigationMenuList.vue'
export { default as NavigationMenuTrigger } from './NavigationMenuTrigger.vue'

export const navigationMenuTriggerStyle = cva(
    `
    group
    transition-colors
    inline-flex items-center justify-center
    w-max px-4 py-1 rounded-3xl
    font-light text-sm font-body
    bg-background
    hover:bg-accent hover:text-accent-foreground
    focus:bg-accent focus:text-accent-foreground focus:outline-none
    data-[state=open]:bg-accent/50 data-[active]:bg-accent/50
    disabled:opacity-50 disabled:pointer-events-none
    `,
)
