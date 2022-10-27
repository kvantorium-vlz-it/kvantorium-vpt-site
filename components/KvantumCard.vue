<script setup lang="ts">
interface kvantum {
    name: string;
    description: string;
    link: string;
    image: string;
}

defineProps<{
    kvantum: kvantum;
}>()

defineEmits<{
    (e: 'show-full-description'): void;
}>()

const ALLOWED_DESCRIPTION_LENGTH = 200
</script>

<template>
    <article :class="$style.card">
        <div :class="$style['card__image-wrapper']">
            <img
                :src="kvantum.image"
                :alt="kvantum.name"
                :class="$style.card__image"
            >
        </div>
        <h3 :class="$style.card__name">
            {{ kvantum.name }}
        </h3>
        <p :class="$style.card__description">
            <hideable-text
                button-text="..."
                :allowed-length="ALLOWED_DESCRIPTION_LENGTH"
                :text="kvantum.description"
                @show-full-text="$emit('show-full-description')"
            />
        </p>
        <base-button :class="$style.card__button">
            Подробнее
        </base-button>
        <kvantum-card-decoration :class="$style.card__decoration" />
    </article>
</template>

<style module lang="scss">
@use 'sass:string' as string;
@use '@styles/functional' as *;

.card {
    --image-size: #{px-to-rem(84px)};
    --gap-x: #{px-to-rem(12px)};
    --p: #{px-to-rem(12px)};
    --p-t: #{px-to-rem(8px)};

    isolation: isolate;
    position: relative;

    padding: var(--p);
    padding-top: var(--p-t);

    text-align: right;

    background-image: var(--g-promo-vertical);
    border-top: #{px-to-rem(24px)} solid rgb(var(--c-secondary-700));
    border-radius: var(--br-l);
    box-shadow: var(--bs-8);

    & > * {
        text-align: left;
    }

    &__decoration {
        z-index: -1;
    }

    /// Image wrapper element for make padding on image and not cut it by border-radius
    &__image-wrapper {
        $size: var(--image-size);

        position: relative;

        overflow: hidden;

        aspect-ratio: 1;
        width: $size;
        height: $size;
    }

    &__image {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 100%;
        padding: inherit;
    }

    &__name {
        margin: 0;
        margin-bottom: #{px-to-rem(12px)};

        color: rgb(var(--text-body));

        border-bottom: 2px solid rgb(var(--c-secondary-900));
        @include typo(h3-bold);
    }

    &__description {
        margin: 0;
        margin-bottom: #{px-to-rem(12px)};

        color: rgb(var(--text-body));
        @include typo(body-2-normal);
    }
    @include only-mobile {
        $translate-percent: 70;

        &__image-wrapper {
            position: absolute;
            bottom: 100%;
            left: 100%;
            transform: translate((string.unquote('-#{$translate-percent}%')), 50%);

            box-sizing: content-box;
            padding: #{px-to-rem(16px)};

            background-color: rgb(var(--c-secondary-400));
            border: 2px solid rgb(var(--c-secondary-700));
            border-radius: var(--br-full);
        }

        &__image {
            object-fit: cover;
        }

        &__name {
            margin-right: calc(var(--image-size) / 100 * #{$translate-percent} - var(--p));
        }
    }
    @include from-desktop {
        --image-size: #{px-to-rem(96px)};
        --gap-x: #{px-to-rem(12px)};

        &__image-wrapper {
            float: left;

            margin-right: var(--gap-x);
            margin-bottom: #{px-to-rem(4px)};
        }

        &__name {
            margin-left: calc(var(--image-size) + var(--gap-x));
        }

        &__button {
            clear: both;

            margin-left: auto;
        }
    }
}
</style>
