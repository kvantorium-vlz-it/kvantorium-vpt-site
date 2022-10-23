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
@use '@/assets/css/variables' as *;

.footer {
    @include page-section;

    background-color: rgb(var(--bg-footer));

    &__sections {
        --gap: 0.5rem;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--gap);
        justify-content: space-between;
    }
    &__section {
        width: calc((100% / 2) - var(--gap) / 2);
        max-width: calc((100% / 2) - var(--gap) / 2);
    }

    &__separator {
        margin-top: 0.5rem;
        border: 1px solid rgb(var(--c-primary-100));
        margin-bottom: 0.25rem;
    }

    &__copyright {
        margin: 0;

        text-align: center;
        color: rgb(var(--c-white));
        font-size: var(--fs-body-2);
    }
}

@media (min-width: $min-bp-desktop) {
    .footer {
        &__section {
            width: auto;
        }
    }
}
</style>
