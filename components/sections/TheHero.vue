<template>
    <section :class="$style.hero">
        <div :class="$style.hero__wrapper">
            <div :class="$style.hero__info">
                <h1 :class="$style.hero__heading">
                    «Кванториум»
                </h1>
                <p :class="$style.hero__paragraph">
                    Современное учреждение дополнительного образования, оснащённое высокотехнологичным оборудованием.
                </p>
            </div>

            <div :class="$style.hero__buttons">
                <base-button>
                    записаться
                </base-button>

                <base-button theme="light">
                    узнать больше
                </base-button>
            </div>
        </div>
    </section>
</template>

<style module lang="ts">
</style>

<style module lang="scss">
@use '@/assets/css/mixins' as *;
@use '@/assets/css/variables' as *;

.hero {
    --hero-image: url('@/assets/images/hero-closeup.webp');
    --hero-image-blur: 2px;

    background: url('@/assets/images/hero-closeup.webp') rgb(var(--c-black)) no-repeat bottom right;
    background-size: contain;

    &__wrapper {
        backdrop-filter: blur(var(--hero-image-blur));

        // using page section mixin here cause image must be blurred

        @include page-section;
    }

    &__info {
        width: min-content;
    }

    &__heading {
        margin: 0;
        margin-bottom: 1rem;

        font-size: var(--fs-h1);
        font-weight: var(--fw-bold);
        color: rgb(var(--c-secondary-100));
    }

    &__paragraph {
        font-size: var(--fs-body-1);
        color: rgb(var(--c-secondary-100));
    }

    &__buttons {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }
}

@media (min-width: $min-bp-desktop) {
    .hero {
        --hero-image: url('@/assets/images/hero-fullshot.webp');
        --hero-image-blur: 1px;

        background-size: auto;

        &__wrapper {
            $padding-vertical: 6rem + 0.75rem;

            padding-top: $padding-vertical;
            padding-bottom: $padding-vertical;
        }

        &__buttons {
            flex-direction: row;
            gap: 3rem;
        }
    }
}
</style>
