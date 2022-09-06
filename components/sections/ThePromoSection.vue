<template>
<main :class="$style.Promo">
    <div :class="$style.Promo__background">
    </div>

    <div :class="$style.Promo__wrapper">
        <div :class="$style.Promo__info">
            <h1 :class="$style.Promo__title">
                «Кванториум»
            </h1>
            <p :class="$style.Promo__about">
                Современное учреждение дополнительного образования, оснащённое высокотехнологичным оборудованием.
            </p>
        </div>

        <nav :class="$style.Promo__buttons">
            <nuxt-link>
                <base-button theme="dark" text="Записаться" />
            </nuxt-link>
            <nuxt-link>
                <base-button text="Узнать больше" />
            </nuxt-link>
        </nav>
    </div>
</main>
</template>

<style module lang="postcss">
.Promo {
    @apply bg-promo;
    @apply relative;

    &__background {
        @apply absolute w-full h-full z-10;
        @apply overflow-hidden bg-[url('/promo.png')] bg-cover blur-sm;
        @apply -scale-x-100;

        /* This shadow not converts into right css from config */
        @apply shadow-[inset_0px_-136px_32px_rgba(0,0,0,0.5)];
    }
    &__wrapper {
        @apply page-section;
        @apply relative z-20;
    }
    &__title {
        @apply text-primary-300 text-heading40;
    }
    &__about {
        @apply text-primary-300 text-body20;
        @apply mt-8;
    }

    &__buttons {
        @apply flex items-center justify-between gap-2;
        @apply mt-6;
    }
}
</style>