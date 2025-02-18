<script setup lang="ts">
import { NuxtLink } from '#components';
import { ArrowUpRightIcon } from 'lucide-vue-next';

</script>

<template>
    <SectionContainer class="my-32" full-width>
        <div>
            <h1 class="text-2xl font-bold mb-4">
                Badges (size\\variant\\theme)
            </h1>

            <div class="grid laptop:grid-cols-3 gap-y-4 gap-x-2">
                <h2 class="text-1xl font-bold">Small</h2>
                <h2 class="text-1xl font-bold">Default</h2>
                <h2 class="text-1xl font-bold">Big</h2>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <ShBadge size="small" as-child>
                        <NuxtLink to="/">
                            Badge\\small\\default\\dark
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShBadge>
                    <ShBadge size="small" variant="outline">
                        Badge\\small\\outline\\dark
                        <ArrowUpRightIcon />
                    </ShBadge>
                    <ShBadge size="small" variant="secondary">
                        Badge\\small\\secondary\\dark
                        <ArrowUpRightIcon />
                    </ShBadge>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <ShBadge as-child>
                        <NuxtLink to="/">
                            Badge\\default\\default\\dark
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShBadge>
                    <ShBadge variant="outline">
                        Badge\\default\\outline\\dark
                        <ArrowUpRightIcon />
                    </ShBadge>
                    <ShBadge variant="secondary">
                        Badge\\default\\secondary\\dark
                        <ArrowUpRightIcon />
                    </ShBadge>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <ShBadge size="big" as-child>
                        <NuxtLink to="/">
                            Badge\\big\\default\\dark
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShBadge>
                    <ShBadge size="big" variant="outline">
                        Badge\\big\\outline\\dark
                        <ArrowUpRightIcon />
                    </ShBadge>
                    <ShBadge size="big" variant="secondary">
                        Badge\\big\\secondary\\dark
                        <ArrowUpRightIcon />
                    </ShBadge>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <ShBadge size="small" as-child theme="light">
                        <NuxtLink to="/">
                            Badge\\small\\default\\light
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShBadge>
                    <ShBadge :as="NuxtLink" to="/" size="small" variant="outline" theme="light">
                        Badge\\small\\outline\\light
                        <ArrowUpRightIcon />
                    </ShBadge>
                    <ShBadge size="small" variant="secondary" theme="light">
                        Badge\\small\\secondary\\light
                        <ArrowUpRightIcon />
                    </ShBadge>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <ShBadge as-child theme="light">
                        <NuxtLink to="/">
                            Badge\\default\\default\\light
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShBadge>
                    <ShBadge variant="outline" theme="light">
                        Badge\\default\\outline\\light
                        <ArrowUpRightIcon />
                    </ShBadge>
                    <ShBadge variant="secondary" theme="light">
                        Badge\\default\\secondary\\light
                        <ArrowUpRightIcon />
                    </ShBadge>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <ShBadge size="big" as-child theme="light">
                        <NuxtLink to="/">
                            Badge\\big\\default\\light
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShBadge>
                    <ShBadge size="big" variant="outline" theme="light">
                        Badge\\big\\outline\\light
                        <ArrowUpRightIcon />
                    </ShBadge>
                    <ShBadge size="big" variant="secondary" theme="light">
                        Badge\\big\\secondary\\light
                        <ArrowUpRightIcon />
                    </ShBadge>
                </div>
            </div>
        </div>

        <div>
            <h1 class="text-2xl font-bold mb-4">
                Buttons (size\\variant\\theme\\rounded)
            </h1>

            <div class="grid laptop:grid-cols-3 gap-y-4 gap-x-2">
                <h2 class="text-1xl font-bold">Small</h2>
                <h2 class="text-1xl font-bold">Default</h2>
                <h2 class="text-1xl font-bold">Big</h2>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <ShButton as-child size="small">
                        <NuxtLink to="/">
                            Button\\small\\default\\dark\\rounded
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton variant="secondary" size="small">
                        Button\\small\\secondary\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="gradient" size="small">
                        Button\\small\\gradient\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="outline" size="small">
                        Button\\small\\outline\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="ghost" size="small">
                        Button\\small\\ghost\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <ShButton as-child>
                        <NuxtLink to="/">
                            Button\\default\\default\\dark\\rounded
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton variant="secondary">
                        Button\\default\\secondary\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="gradient">
                        Button\\default\\gradient\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="outline">
                        Button\\default\\outline\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="ghost">
                        Button\\default\\ghost\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <ShButton as-child size="big">
                        <NuxtLink to="/">
                            Button\\big\\default\\dark\\rounded
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton variant="secondary" size="big">
                        Button\\big\\secondary\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="gradient" size="big">
                        Button\\big\\gradient\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="outline" size="big">
                        Button\\big\\outline\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="ghost" size="big">
                        Button\\big\\ghost\\dark\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <ShButton as-child size="small" theme="light">
                        <NuxtLink to="/">
                            Button\\small\\default\\light\\rounded
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton variant="secondary" size="small" theme="light">
                        Button\\small\\secondary\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="gradient" size="small" theme="light">
                        Button\\small\\gradient\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="outline" size="small" theme="light">
                        Button\\small\\outline\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="ghost" size="small" theme="light">
                        Button\\small\\ghost\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <ShButton as-child theme="light">
                        <NuxtLink to="/">
                            Button\\default\\default\\light\\rounded
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton variant="secondary" theme="light">
                        Button\\default\\secondary\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="gradient" theme="light">
                        Button\\default\\gradient\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="outline" theme="light">
                        Button\\default\\outline\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="ghost" theme="light">
                        Button\\default\\ghost\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <ShButton as-child size="big" theme="light">
                        <NuxtLink to="/">
                            Button\\big\\default\\light\\rounded
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton variant="secondary" size="big" theme="light">
                        Button\\big\\secondary\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="gradient" size="big" theme="light">
                        Button\\big\\gradient\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="outline" size="big" theme="light">
                        Button\\big\\outline\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton variant="ghost" size="big" theme="light">
                        Button\\big\\ghost\\light\\rounded
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>




                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <ShButton rounding="square" size="small">
                        <NuxtLink to="/">
                            Button\\small\\default\\dark\\square
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton rounding="square" variant="secondary" size="small">
                        Button\\small\\secondary\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="gradient" size="small">
                        Button\\small\\gradient\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="outline" size="small">
                        Button\\small\\outline\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="ghost" size="small">
                        Button\\small\\ghost\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <ShButton rounding="square" as-child>
                        <NuxtLink to="/">
                            Button\\default\\default\\dark\\square
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton rounding="square" variant="secondary">
                        Button\\default\\secondary\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="gradient">
                        Button\\default\\gradient\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="outline">
                        Button\\default\\outline\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="ghost">
                        Button\\default\\ghost\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <ShButton rounding="square" as-child size="big">
                        <NuxtLink to="/">
                            Button\\big\\default\\dark\\square
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton rounding="square" variant="secondary" size="big">
                        Button\\big\\secondary\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="gradient" size="big">
                        Button\\big\\gradient\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="outline" size="big">
                        Button\\big\\outline\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="ghost" size="big">
                        Button\\big\\ghost\\dark\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <ShButton rounding="square" as-child size="small" theme="light">
                        <NuxtLink to="/">
                            Button\\small\\default\\light\\square
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton rounding="square" variant="secondary" size="small" theme="light">
                        Button\\small\\secondary\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="gradient" size="small" theme="light">
                        Button\\small\\gradient\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="outline" size="small" theme="light">
                        Button\\small\\outline\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="ghost" size="small" theme="light">
                        Button\\small\\ghost\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <ShButton rounding="square" as-child theme="light">
                        <NuxtLink to="/">
                            Button\\default\\default\\light\\square
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton rounding="square" variant="secondary" theme="light">
                        Button\\default\\secondary\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="gradient" theme="light">
                        Button\\default\\gradient\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="outline" theme="light">
                        Button\\default\\outline\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="ghost" theme="light">
                        Button\\default\\ghost\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <ShButton rounding="square" as-child size="big" theme="light">
                        <NuxtLink to="/">
                            Button\\big\\default\\light\\square
                            <ArrowUpRightIcon />
                        </NuxtLink>
                    </ShButton>
                    <ShButton rounding="square" variant="secondary" size="big" theme="light">
                        Button\\big\\secondary\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="gradient" size="big" theme="light">
                        Button\\big\\gradient\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="outline" size="big" theme="light">
                        Button\\big\\outline\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                    <ShButton rounding="square" variant="ghost" size="big" theme="light">
                        Button\\big\\ghost\\light\\square
                        <ArrowUpRightIcon />
                    </ShButton>
                </div>
            </div>
        </div>

        <div>
            <h1 class="text-2xl font-bold mb-4 items-center">
                Links(size\\variant\\theme)
            </h1>

            <div class="grid laptop:grid-cols-3 gap-y-4 gap-x-2">
                <h2 class="text-1xl font-bold">Small</h2>
                <h2 class="text-1xl font-bold">Default</h2>
                <h2 class="text-1xl font-bold">Big</h2>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <BaseLink size="small" variant="default" theme="dark">
                        Link\\small\\default\\dark
                        <ArrowUpRightIcon />
                    </BaseLink>
                    <BaseLink size="small" variant="outline" theme="dark">
                        Link\\small\\outline\\dark
                        <ArrowUpRightIcon />
                    </BaseLink>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <BaseLink size="default" variant="default" theme="dark">
                        Link\\default\\default\\dark
                        <ArrowUpRightIcon />
                    </BaseLink>
                    <BaseLink size="default" variant="outline" theme="dark">
                        Link\\default\\outline\\dark
                        <ArrowUpRightIcon />
                    </BaseLink>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center">
                    <BaseLink size="big" variant="default" theme="dark">
                        Link\\big\\default\\dark
                        <ArrowUpRightIcon />
                    </BaseLink>
                    <BaseLink size="big" variant="outline" theme="dark">
                        Link\\big\\outline\\dark
                        <ArrowUpRightIcon />
                    </BaseLink>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <BaseLink size="small" variant="default" theme="light">
                        Link\\small\\default\\light
                        <ArrowUpRightIcon />
                    </BaseLink>
                    <BaseLink size="small" variant="outline" theme="light">
                        Link\\small\\outline\\light
                        <ArrowUpRightIcon />
                    </BaseLink>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <BaseLink size="default" variant="default" theme="light">
                        Link\\default\\default\\light
                        <ArrowUpRightIcon />
                    </BaseLink>
                    <BaseLink size="default" variant="outline" theme="light">
                        Link\\default\\outline\\light
                        <ArrowUpRightIcon />
                    </BaseLink>
                </div>

                <div class="flex flex-col flex-wrap gap-2 p-2 items-center justify-center bg-blue-dark">
                    <BaseLink size="big" variant="default" theme="light">
                        Link\\big\\default\\light
                        <ArrowUpRightIcon />
                    </BaseLink>
                    <BaseLink size="big" variant="outline" theme="light">
                        Link\\big\\outline\\light
                        <ArrowUpRightIcon />
                    </BaseLink>
                </div>
            </div>
        </div>
    </SectionContainer>
</template>
