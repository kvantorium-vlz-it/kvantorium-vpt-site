<script setup lang="ts">
</script>

<template>
    <header
        class="
            fixed z-50 top-0 left-0 right-0
            py-3
            bg-blue-600 bg-opacity-20 backdrop-blur-sm shadow-md
        "
    >
        <div class="container grid grid-cols-12 items-center content-center justify-center gap-6">
            <NuxtLink
                to="/"
                class="bg-white p-2 rounded-full w-10 aspect-square col-span-2"
            >
                <KvantoriumLogo />
            </NuxtLink>

            <HeaderNavigation class="col-span-8 justify-self-center" />

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
