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

const ALLOWED_DESCRIPTION_LENGTH = 200
</script>

<template>
    <article :class="$style.card">
        <img
            :src="kvantum.image"
            :alt="kvantum.name"
            :class="$style.card__image"
        >
        <h3 :class="$style.card__name">
            {{ kvantum.name }}
        </h3>
        <p :class="$style.card__description">
            <hideable-text
                :allowed-length="ALLOWED_DESCRIPTION_LENGTH"
                button-text="..."
                :text="kvantum.description"
            />
        </p>
        <base-button :class="$style.card__button">
            Подробнее
        </base-button>
        <kvantum-card-decoration :class="$style.card__decoration" />
    </article>
</template>

<style module lang="scss">
@use '@styles/functional' as *;

.card {
    --image-size: #{px-to-rem(84px)};

    isolation: isolate;
    position: relative;

    padding: #{px-to-rem(12px)};
    padding-top: #{px-to-rem(8px)};

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

    &__image {
        $size: var(--image-size);

        aspect-ratio: 1;
        width: $size;
        height: $size;
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
        &__image {
            position: absolute;
            bottom: 100%;
            left: 100%;
            transform: translate(-100%, 50%);

            box-sizing: content-box;
            padding: #{px-to-rem(16px)};

            background-color: rgb(var(--c-secondary-400));
            border: 1px solid rgb(var(--c-secondary-700));
            border-radius: var(--br-full);
        }

        &__name {
            margin-right: var(--image-size);
        }
    }
    @include from-desktop {
        --image-size: #{px-to-rem(96px)};
        --gap-x: #{px-to-rem(12px)};

        &__image {
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
