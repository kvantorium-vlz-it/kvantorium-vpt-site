<script setup lang="ts">
import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-vue-next'

const isHeaderMustHaveBackground = inject('isHeaderMustHaveBackground', true)
</script>

<template>
    <header
        :class="
            cn(
                `
                fixed z-50 top-0 left-0 right-0
                py-3 after:absolute after:top-0 after:left-0 after:right-0 after:bg-white
                isolate after:-z-10 after:transition-all after:shadow
                `,
                isHeaderMustHaveBackground ? 'after:bottom-0' : 'after:bottom-full'
            )
        "
    >
        <div class="container grid grid-cols-12 items-center content-center justify-center gap-6">
            <NuxtLink
                :to="{ path: '/', }"
                class="group bg-white p-2 rounded-full w-10 aspect-square col-span-5 laptop:col-span-2"
            >
                <KvantoriumLogo class="group-hover:rotate-[360deg] transition-transform ease-in-out duration-300" />
            </NuxtLink>

            <HeaderNavigationMenu class="hidden laptop:block col-span-10 laptop:col-span-8 justify-self-center" />

            <div class="col-span-2 laptop:hidden flex justify-center">
                <ShSidebarTrigger :class="isHeaderMustHaveBackground ? 'text-black' : 'text-white'">
                    <MenuIcon />
                </ShSidebarTrigger>
            </div>

            <ShDialog>
                <div class="laptop:col-span-2 col-span-5 laptop:w-full flex justify-end">
                    <ShDialogTrigger as-child>
                        <HeaderButton/>
                    </ShDialogTrigger>
                </div>

                <EnrollModalContent />
            </ShDialog>
        </div>
    </header>
</template>
