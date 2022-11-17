<template>
    <PageSection
        as="footer"
        :class="$style.footer"
    >
        <div :class="$style.footer__wrapper">
            <TheFooterSection name="Навигация">
                <nav :class="$style.footer__navigation">
                    <NuxtLink
                        to="/"
                        :class="$style['footer__navigation-item']"
                    >
                        Главная
                    </NuxtLink>
                    <NuxtLink
                        to="/#kvatums"
                        :class="$style['footer__navigation-item']"
                    >
                        Квантумы
                    </NuxtLink>
                    <NuxtLink
                        to="/about#organization"
                        :class="$style['footer__navigation-item']"
                    >
                        О нас
                    </NuxtLink>
                </nav>
            </TheFooterSection>

            <TheFooterSection name="Контакты">
                <address :class="$style.footer__contacts">
                    <TheFooterContact
                        :contact="{
                            title: 'Эл. почта',
                            label: 'kvantroiumvlz@volpt.ru',
                            link: 'mailto:kvantroiumvlz@volpt.ru',
                        }"
                    />
                    <TheFooterContact
                        :contact="{
                            title: 'Телефон',
                            label: '+7 (902)-383-50-24',
                            link: 'tel:+79023835024',
                        }"
                    />
                    <TheFooterContact
                        :contact="{
                            title: 'сайт',
                            label: 'www.kvantoriumvpt.ru',
                            link: 'https://www.kvantoriumvlz.ru/',
                        }"
                        target="_blank"
                    />
                </address>
            </TheFooterSection>

            <TheFooterSection
                name="Соц. сети"
            >
                <div :class="$style.footer__socials">
                    <a href="https://vk.com/public195220786" target="_blank" title="Группа ВК" >
                        <NuxtIcon name="vk" fill />
                    </a>
                </div>
            </TheFooterSection>
        </div>
        <section :class="$style.footer__copyright">
            {{ new Date().getFullYear() }} Кванториум ВОЛЖСКИЙ ПОЛИТЕХ
        </section>
    </PageSection>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.footer {
    background-color: rgb(var(--bg-footer));
    color: rgb(var(--c-white));

    &__wrapper {
        padding-bottom: rem(12px);

        display: flex;
        justify-content: space-between;
        column-gap: rem(16px);
        row-gap: rem(8px);

        & > * {
            min-width: calc(100% / 4);
        }
    }

    &__navigation {
        display: flex;
        flex-direction: column;
        gap: rem(8px);
    }
    &__navigation-item {
        @include typo(body-2-normal);

        color: inherit;
        text-decoration: none;

        &[href]:hover {
            text-decoration: underline;
        }
    }

    &__contacts {
        display: flex;
        flex-direction: column;
        gap: rem(8px);
    }

    &__socials {
        display: flex;
        justify-content: flex-start;
        gap: rem(4px);

        @include typo(body-2-normal);
    }

    &__copyright {
        border-top: rem(2px) solid rgb(var(--c-white));

        padding-top: rem(8px);

        @include typo(body-2-normal);

        text-align: center;
        color: rgb(var(--c-white));
    }

    @include until-breakpoint(desktop) {
        &__wrapper {
            flex-wrap: wrap;
        }
    }
}
</style>
