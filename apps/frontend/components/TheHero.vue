<template>
    <PageSection
        :class="$style.hero"
        :wrapper-class="$style.hero__wrapper"
    >
        <div :class="$style.hero__content">
            <div :class="$style.hero__info">
                <h1 :class="$style.hero__heading">
                    «Кванториум»
                </h1>
                <p :class="$style.hero__subheading">
                    Современное учреждение дополнительного образования, оснащённое высокотехнологичным оборудованием.
                </p>
            </div>
            <div :class="$style.hero__buttons">
                <BaseButton to="/">
                    записаться
                </BaseButton>
                <BaseButton variant="light" to="/about">
                    Узнать больше
                </BaseButton>
            </div>
        </div>
    </PageSection>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.hero {

    background-color: rgb(var(--c-black));
    &__content {
        backdrop-filter: blur(2px);
        padding: rem(108px) var(--p-x);
    }
    &__info {
        width: min-content;
        backdrop-filter: blur(2px);
    }
    &__heading {
        @include typo(h1-bold);
        color: rgb(var(--c-white));
        margin: 0;

        margin-bottom: rem(16px)
    }
    &__subheading {
        @include typo(body-1-normal);
        color: rgb(var(--c-white));
        margin: 0;
    }
    &__buttons {
        margin-top: rem(8px);
        display: flex;
        flex-direction: column;
        gap: rem(8px);

        & > * {
            width: fit-content;
        }
    }

    &__wrapper {
        padding: 0;
        background-image: url('/images/hero-closeup.webp');
        background-repeat: no-repeat;
        background-position: right bottom;
        background-size: contain;
    }

    @include from-breakpoint(desktop) {
        &__heading {
            margin-bottom: rem(48px);
        }

        &__buttons {
            flex-direction: row;
            gap: rem(42px);
        }

        &__wrapper {
            background-image: url('/images/hero-fullshot.webp');
        }
    }
}
</style>
