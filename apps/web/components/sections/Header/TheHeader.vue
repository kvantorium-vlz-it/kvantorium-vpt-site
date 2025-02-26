<script setup lang="ts">
import { cn } from '@/lib/utils'

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
                :to="{ hash: '#top' }"
                class="group bg-white p-2 rounded-full w-10 aspect-square col-span-2"
            >
                <KvantoriumLogo class="group-hover:rotate-[360deg] transition-transform ease-in-out duration-300" />
            </NuxtLink>

            <HeaderNavigationMenu class="col-span-8 justify-self-center" />

            <ShDialog>
                <ShDialogTrigger as-child>
                    <HeaderButton class="col-span-2 w-full" />
                </ShDialogTrigger>

                <ShDialogContent>
                    <HeaderModal />
                </ShDialogContent>
            </ShDialog>
        </div>
    </header>
</template>
