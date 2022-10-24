<template>
    <footer :class="$style.footer">
        <div :class="$style.footer__sections">
            <the-footer-section
                name="Навигация"
                :class="$style.footer__section"
            >
                <the-footer-navigation />
            </the-footer-section>

            <the-footer-section
                name="Соц. сети"
                :class="$style.footer__section"
            >
                <the-footer-socials />
            </the-footer-section>

            <the-footer-section
                name="Контакты"
                :class="$style.footer__section"
            >
                <the-footer-contacts />
            </the-footer-section>
        </div>

        <hr :class="$style.footer__separator">
        <p :class="$style.footer__copyright">
            &#169; {{ new Date().getFullYear() }} Кванториум ВОЛЖСКИЙ ПОЛИТЕХ
        </p>
    </footer>
</template>

<style module lang="scss">
@use '@/assets/css/mixins' as *;

.footer {
    background-color: rgb(var(--bg-footer));

    &__sections {
        --gap: 0.5rem;

        display: flex;
        flex-flow: row wrap;
        gap: var(--gap);
        justify-content: space-between;
    }

    &__section {
        width: calc((100% / 2) - var(--gap) / 2);
        max-width: calc((100% / 2) - var(--gap) / 2);
    }

    &__separator {
        margin-top: 0.5rem;
        margin-bottom: 0.25rem;

        border: 1px solid rgb(var(--c-primary-100));
    }

    &__copyright {
        margin: 0;

        color: rgb(var(--c-white));
        text-align: center;

        @include typo-body-2;
    }

    @include page-section;
}

@include from-desktop {
    .footer {
        &__section {
            width: auto;
        }
    }
}
</style>
