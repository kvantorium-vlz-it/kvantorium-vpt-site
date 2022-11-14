<script setup lang="ts">
interface kvantum {
    name: string
    description: string
    image: string
    link?: string
}

defineProps<{
    kvantum: kvantum
}>()

defineEmits<{
    (e: 'showFullDescription'): void
}>()

const ALLOWED_DESCRIPTION_LENGTH = 200
</script>

<template>
    <article :class="$style.card">
        <h3 :class="$style.card__name">
            {{ kvantum.name }}
        </h3>
        <div :class="$style['card__image-wrapper']">
            <img
                :src="kvantum.image"
                :alt="kvantum.name"
                :class="$style.card__image"
            >
        </div>
        <p :class="$style.card__description">
            <hideable-text
                show-button-text="..."
                :allowed-length="ALLOWED_DESCRIPTION_LENGTH"
                :text="kvantum.description"
                @show-full-text="$emit('showFullDescription')"
            />
        </p>
        <base-button
            :to="kvantum.link"
            :class="$style.card__button"
        >
            Подробнее
        </base-button>
        <div :class="$style.card__decoration"></div>
    </article>
</template>

<style module lang="scss">
@use 'sass:string' as string;
@use '@styles/main.scss' as *;

.card {
    --gap-x: #{rem(12px)};
    --p: #{rem(12px)};
    --p-t: #{rem(8px)};

    isolation: isolate;
    position: relative;

    padding: var(--p);
    padding-top: var(--p-t);

    text-align: right;

    background-image: var(--g-kvantum-card-vertical);
    border-top: #{rem(24px)} solid rgb(var(--c-secondary-700));
    border-radius: var(--br-16);
    box-shadow: var(--bs-8);

    & > * {
        text-align: left;
    }

    &__decoration {
        z-index: -1;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        overflow: hidden;

        border-radius: inherit;

        &::after {
            $size: #{rem(112px)};

            content: '';

            position: absolute;
            top: 100%;
            left: 70%;
            transform: translate(-90%, -75%);

            box-sizing: content-box;
            aspect-ratio: 1;
            width: $size;
            height: $size;

            border: #{rem(24px)} solid rgb(var(--c-secondary-400));
            border-radius: var(--br-full);
            @include from-breakpoint(desktop) {
                right: 70%;
                left: auto;
                transform: translate(90%, -50%);
            }
        }
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
        margin-bottom: #{rem(12px)};

        color: rgb(var(--text-body));

        border-bottom: 2px solid rgb(var(--c-secondary-900));
        @include typo(h3-bold);
    }

    &__description {
        margin: 0;
        margin-bottom: #{rem(12px)};

        color: rgb(var(--text-body));
        @include typo(body-2-normal);
    }
    @include between-breakpoint(mobile, desktop) {
        --image-size: #{rem(80px)};
        --gap-x: #{rem(12px)};

        &__image-wrapper {
            float: left;

            margin-right: var(--gap-x);
            margin-bottom: #{rem(4px)};
        }

        &__button {
            clear: both;

            margin-left: auto;
        }
    }
    @include from-breakpoint(desktop) {
        --image-size: #{rem(96px)};

        $translate-percent: 70;

        &__image-wrapper {
            position: absolute;
            bottom: 100%;
            left: 100%;
            transform: translate((string.unquote('-#{$translate-percent}%')), 50%);

            box-sizing: content-box;
            padding: #{rem(16px)};

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
}
</style>
