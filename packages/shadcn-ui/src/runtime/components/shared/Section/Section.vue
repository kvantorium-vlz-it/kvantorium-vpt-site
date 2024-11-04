<template>
    <section class="my-24">
        <div class="container">
            <div
                v-if="$slots.heading"
                class="font-display text-6xl text-center mb-12"
            >
                <slot name="heading"></slot>
            </div>

            <div>
                <slot></slot>
            </div>
        </div>
    </section>
</template>
