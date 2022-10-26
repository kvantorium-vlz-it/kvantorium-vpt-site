<template>
    <page-section :class="$style.hero" :wrapper-class="$style.hero__wrapper">
        <div :class="$style.hero__content">
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

                <base-button variant="light">
                    узнать больше
                </base-button>
            </div>
        </div>
    </page-section>
</template>

<style module lang="ts">
</style>

<style module lang="scss">
@use '@styles/functional' as *;

.hero {
    --hero-image: url('@/assets/images/hero-closeup.webp');
    --hero-image-blur: var(--b-hero);

    background-color: rgb(var(--c-black));

    &__wrapper {
        padding: 0;

        background: url('@/assets/images/hero-closeup.webp') rgb(var(--c-black)) no-repeat bottom right;
        background-size: contain;
    }

    &__content {
        padding: var(--p-y) var(--p-x);

        backdrop-filter: blur(calc(var(--hero-image-blur) / 2));
    }

    &__info {
        width: min-content;
    }

    &__heading {
        margin: 0;
        margin-bottom: #{px-to-rem(16px)};

        color: rgb(var(--c-white));
        @include typo(h1-bold);
    }

    &__paragraph {
        color: rgb(var(--c-white));
        @include typo(body-1-normal);
    }

    &__buttons {
        display: flex;
        flex-direction: column;
        gap: #{px-to-rem(8px)};
        align-items: flex-start;
    }
    @include from-desktop {
        --hero-image: url('@/assets/images/hero-fullshot.webp');

        background-size: auto;

        &__content {
            --desktop-p-y: calc(#{px-to-rem(96px)} + var(--p-y));

            padding-top: var(--desktop-p-y);
            padding-bottom: var(--desktop-p-y);
        }

        &__buttons {
            flex-direction: row;
            gap: #{px-to-rem(48px)};
        }
    }
}
</style>
