<script setup lang="ts">
defineProps<{
    heading: string
    id?: string
}>()
</script>

<template>
    <section
        class="py-12"
        :id="id"
    >
        <Container>
            <h2 class="mb-14 text-center mx-auto text-[#3C4580] font-black text-[38px]">
                {{ heading }}
            </h2>

            <slot></slot>
        </Container>
    </section>
</template>
