<script setup lang="ts">
import { ArrowUpCircleIcon } from 'lucide-vue-next'
</script>

<template>
    <ShCard>
        <ShCardHeader>
            <ShCardTitle class="order-last font-display text-4xl font-normal">
                IT-квантум
            </ShCardtitle>

            <ShCardDescription class="flex items-center justify-between">
                <img
                    class="w-16 aspect-square object-cover"
                    src="https://cdn.sanity.io/images/89inj6dr/production/c005c0568abc13038e430d0fb6fd993afe829b83-266x266.png"
                    alt=""
                >

                <NuxtLink class="aspect-square h-full" to="/">
                    <ArrowUpCircleIcon
                        class="rotate-45"
                        :size="64"
                        :stroke-width="1"
                    />
                </NuxtLink>
            </ShCardDescription>
        </ShCardHeader>

        <ShCardContent>
            <ol class="list-decimal list-inside">
                <li>Разработка под микроконтроллеры</li>
                <li>Разработка веб-сайтов</li>
                <li>Разработка мобильных приложений</li>
            </ol>
        </ShCardContent>

        <ShCardFooter>
            Возрастная категория: 12+
        </ShCardFooter>
    </ShCard>
</template>
