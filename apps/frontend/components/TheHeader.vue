<script setup lang="ts">
</script>

<template>
    <header id="#header" class="z-50 shadow-xl sticky top-0 bg-white">
        <Container class="flex justify-between items-center py-7">
            <div class="flex gap-1 items-center">
                <KvantoriumLogo
                    is-multicolor
                    class="w-16 h-16"
                />

                <h1 class="text-[26px] font-bold">
                    Кванториум “Волжский политех”
                </h1>
            </div>

            <TheHeaderNavigation />
        </Container>
    </header>
</template>
