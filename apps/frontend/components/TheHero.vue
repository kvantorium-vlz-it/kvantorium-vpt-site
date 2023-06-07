<script setup lang="ts">
import { useModalStore } from '~/store/modal';

const modalStore = useModalStore()
</script>

<template>
    <section id="#hero" class="bg-[url(/images/hero-fullshot.webp)] bg-no-repeat bg-cover bg-bottom">
        <Container
            class="py-28 grid grid-cols-2 gap-y-12 gap-x-12"
        >
            <div class="text-[36px] font-semibold text-white">
                Кванториум - современное учреждение дополнительного оборазования, оснащённое высокотехнологичным оборудованием
            </div>

            <div class="justify-self-end self-center">
                <BaseLink variant="yellow" to="/#demo-lessons">
                    Демонстрационные занятия июнь 2023
                    <Icon
                        name="tabler:chevron-down"
                        class="w-10 h-10"
                    />
                </BaseLink>
            </div>

            <div class="flex gap-8">
                <BaseButton @click="modalStore.open">
                    Записаться на занятия
                </BaseButton>
                <BaseLink to="/about">
                    Узнать больше
                </BaseLink>
            </div>
        </Container>
    </section>
</template>
