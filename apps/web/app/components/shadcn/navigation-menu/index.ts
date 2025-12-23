import { cva } from 'class-variance-authority'

export { default as NavigationMenu } from './NavigationMenu.vue'
export { default as NavigationMenuContent } from './NavigationMenuContent.vue'
export { default as NavigationMenuViewport } from './NavigationMenuViewport.vue'
export { default as NavigationMenuItem } from './NavigationMenuItem.vue'
export { default as NavigationMenuLink } from './NavigationMenuLink.vue'
export { default as NavigationMenuList } from './NavigationMenuList.vue'
export { default as NavigationMenuTrigger } from './NavigationMenuTrigger.vue'

export const navigationMenuTriggerStyle = cva(
    // `
    // group
    // transition-colors
    // inline-flex items-center justify-center gap-1
    // font-light text-lg text-white font-body leading-input
    // disabled:opacity-50 disabled:pointer-events-none
    // hover:text-gray-light focus:text-gray-light data-[state=open]:text-gray-light
    // `,
)

// hover:bg-gray-light/15 hover:text-accent-foreground
// focus:bg-gray-light/15 focus:text-accent-foreground
// data-[state=open]:bg-gray-light/15 data-[active]:bg-gray-light/15
// focus:outline-none
