<script setup lang="ts">
import { Kvantum } from '~/assets/typescript/types';

const {
    kvantum,
} = defineProps<{
    kvantum: Kvantum
}>()

</script>

<template>
    <SliderSlide
        class="relative bg-no-repeat bg-center bg-cover aspect-[2] rounded-[30px] overflow-hidden flex flex-col justify-center items-center"
        :style="`background-image: url(${kvantum.promoImage});`"
    >
        <div class="shadow-[0_0px_100px_100vh_rgba(0,0,0,0.5)] bg-[rgba(0,0,0,0.5)]">
            <div class="z-10 mb-28 text-white text-center text-[48px]">
                {{ kvantum.name }}
            </div>
            <BaseButton class="z-10 mx-auto" variant="yellow">
                Читать про направление
            </BaseButton>
        </div>
    </SliderSlide>
</template>
