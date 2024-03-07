<script setup lang="ts">
const siteNavigation = ref([
    {
        label: 'Главная',
        to: '/',
    },
    {
        label: 'О нас',
        to: '/about',
    },
    {
        label: 'Новости',
        to: '/news',
    },
    {
        label: 'Направления',
        to: '/kvantums',
    },
])

const socials = ref([
    {
        icon: 'ic:baseline-telegram',
        to: 'https://t.me/kvantoriumvlz34',
        color: '#30A3E6',
    },
    {
        icon: 'ri:vk-fill',
        to: 'https://vk.com/public195220786',
        color: '#0077FF',
    },
    {
        icon: 'brandico:odnoklassniki-rect',
        to: 'https://ok.ru/group/57811145785374',
        color: '#FF7700',
    },
])

const kvantoriumContacts = ref([
    {
        label: 'kvantoriumvlz@volpt.com',
        icon: 'mingcute:mail-fill',
        to: 'mailto:kvantoriumvlz@volpt.com',
    },
    {
        label: '8(902)383-50-24',
        icon: 'ic:baseline-phone',
        to: 'tel:89023835024',
    },
    {
        label: 'Волжский ул. Машиностроителей, 15, 404121',
        icon: 'bi:geo-alt-fill',
        to: 'geo:48.786934,44.772160',
    },
])

const collegeContacts = ref([
    {
        label: 'volpt@volganet.ru',
        icon: 'mingcute:mail-fill',
        to: 'mailto:volpt@volganet.ru',
    },
    {
        label: 'volpt.ru',
        icon: 'mdi:web',
        to: 'https://volpt.ru/',
    },
])
</script>

<template>
    <footer :class="$style.footer">
        <div :class="$style.top">
            <div :class="$style.info">
                <div :class="$style['logo-section']" >
                    <NuxtLink :class="$style.logo">
                        <Icon name="Logo" size="100%" />
                    </NuxtLink>
                    <span :class="$style['logo-text']">
                        детский технопарк "кванториум "волжский политех"
                    </span>
                </div>

                <div :class="$style['info-section']">
                    Детский технопарк «Кванториум» - это новая форма дополнительного образования, которая реализует научно-технический интерес детей. Это место интеллектуальной смелости и комфортные условия формирования изобретательского мышления.
                </div>

                <Button to="/enroll" :class="$style.button" variant="white">
                    Записаться
                </Button>
            </div>

            <div :class="$style['column-2']">
                <TheFooterNavigation
                    label="Навигация"
                    style="margin-bottom: 0.75rem;"
                    :items="siteNavigation"
                >
                    <template #="{ item }">
                        <TheFooterNavigationLink :="item" />
                    </template>
                </TheFooterNavigation>

                <TheFooterNavigation
                    label="Социальные сети"
                    :items="socials"
                    is-horizontal
                >
                    <template #="{ item }">
                        <TheFooterNavigationSocialLink :="item" />
                    </template>
                </TheFooterNavigation>
            </div>

            <div>
                <TheFooterNavigation
                    label="Кванториум"
                    style="margin-bottom: 0.75rem;"
                    :items="kvantoriumContacts"
                >
                    <template #="{ item }">
                        <TheFooterNavigationLink :="item" />
                    </template>
                </TheFooterNavigation>

                <TheFooterNavigation
                    label="Техникум"
                    :items="collegeContacts"
                >
                    <template #="{ item }">
                        <TheFooterNavigationLink :="item" />
                    </template>
                </TheFooterNavigation>
            </div>
        </div>

        <div :class="$style.bottom">
            детский технопарк "кванториум "волжский политех"
            <br>
            {{ new Date().getFullYear() }}
        </div>
    </footer>
</template>

<style module>
.footer {
    margin-inline: var(--site-margin);
    background-image: linear-gradient(
        to bottom right,
        var(--c-site-primary-darker-1),
        var(--c-site-secondary-darker-1)
    );
    padding: 2.5rem 4rem 1rem;
    border-radius: 1rem;
    margin-bottom: var(--site-margin);
    color: var(--c-site-background);
    position: relative;
}
.footer::after {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background-image: url('/noise.png');
    opacity: 0.2;
}
.top {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    margin-bottom: 3.5rem;
}
.logo-section {
    display: flex;
    gap: 0.5rem;
    /* grid-template-columns: min-content 1fr; */
    margin-bottom: 2rem;
}
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    background-color: var(--c-site-background);
    padding: 0.5rem;
    border-radius: 100vw;
    /* width: 2rem; */
    width: 48px;
    height: 48px;
}
.logo-text {
    flex: 1 0 0;
    font-family: 'BankGothic';
    font-size: 1rem;
    color: var(--c-site-background);
    line-height: 1;
}
.bottom {
    border-top: 2px solid var(--c-site-background);
    padding-top: 1rem;
    font-family: 'BankGothic';
    font-size: 1rem;
    color: var(--c-site-background);
    line-height: 1;
    text-align: center;
}
.info-section {
    font-size: 0.75rem;
    font-family: 'Circe';
    color: var(--c-site-background);
    line-height: 1.5;
    margin-bottom: 0.5rem;
}
.button {
    width: 100%;
}
.column-2 {
    grid-column: 3 / 4;
}
</style>
