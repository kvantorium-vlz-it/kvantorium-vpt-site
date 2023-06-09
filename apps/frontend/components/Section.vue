<script setup lang="ts">
type SectionTag = 'section' | 'footer' | 'header'

withDefaults(defineProps<{
    heading: string
    id?: string
    tag?: SectionTag
}>(), {
    tag: 'section'
})
</script>

<template>
    <component
        class="py-12"
        :is="tag"
        :id="id"
    >
        <Container>
            <h2 class="mb-14 text-center mx-auto text-[#3C4580] font-black text-[38px]">
                {{ heading }}
            </h2>

            <slot></slot>
        </Container>
    </component>
</template>
