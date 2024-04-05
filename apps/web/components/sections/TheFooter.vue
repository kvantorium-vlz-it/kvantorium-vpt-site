<script setup lang="ts">
import { useModal } from 'vue-final-modal';
import EnrollModal from '../EnrollModal.vue';

const siteNavigation = ref([
    {
        label: 'Главная',
        to: '/',
        iconName: 'ph:arrow-up-right'
    },
    {
        label: 'О нас',
        to: '/about',
        iconName: 'ph:arrow-up-right'
    },
    {
        label: 'Новости',
        to: '/news',
        iconName: 'ph:arrow-up-right'
    },
    {
        label: 'Направления',
        to: '/kvantums',
        iconName: 'ph:arrow-up-right'
    },
])

const socials = ref([
    {
        label: 'telegram',
        iconName: 'ic:baseline-telegram',
        to: 'https://t.me/kvantoriumvlz34',
    },
    {
        label: 'vk',
        iconName: 'ri:vk-fill',
        to: 'https://vk.com/public195220786',
    },
    {
        label: 'ok',
        iconName: 'brandico:odnoklassniki-rect',
        to: 'https://ok.ru/group/57811145785374',
    },
])

const kvantoriumContacts = ref([
    {
        label: 'kvantoriumvlz@volpt.com',
        iconName: 'mingcute:mail-fill',
        to: 'mailto:kvantoriumvlz@volpt.com',
    },
    {
        label: '8(902)383-50-24',
        iconName: 'ic:baseline-phone',
        to: 'tel:89023835024',
    },
    {
        label: 'Волжский ул. Машиностроителей, 15, 404121',
        iconName: 'bi:geo-alt-fill',
        to: 'geo:48.786934,44.772160',
    },
])

const collegeContacts = ref([
    {
        label: 'volpt@volganet.ru',
        iconName: 'mingcute:mail-fill',
        to: 'mailto:volpt@volganet.ru',
    },
    {
        label: 'volpt.ru',
        iconName: 'mdi:web',
        to: 'https://volpt.ru/',
    },
])


const { open } = useModal({
    component: EnrollModal,
})
</script>

<template>
    <KFooter id="footer">
        <KGridCell>
            <div :class="$style.info">
                <div :class="$style['info-top']">
                    <KCircleIcon
                        icon-name="KLogo"
                        :class="$style.logo"
                    />
                    <div>
                        детский технопарк "кванториум "волжский политех"
                    </div>
                </div>

                <p :class="$style['info-paragraph']">
                    Детский технопарк «Кванториум» - это новая форма дополнительного образования, которая реализует научно-технический интерес детей. Это место интеллектуальной смелости и комфортные условия формирования изобретательского мышления.
                </p>

                <KLinkButton variant="white" :class="$style['info-button']" @click="open">
                    Записаться
                </KLinkButton>
            </div>
        </KGridCell>
        <KGridCell :start-column="3">
            <KNavigation
                direction="vertical"
                heading="Навигация"
                :items="siteNavigation"
            />
            <KNavigation
                heading="Социальные сети"
                :items="socials"
                variant="light"
                :class="$style.socials"
            >
                <template #link="{ link }">
                    <NuxtLink :to="link.to">
                        <KCircleIcon
                            :icon-name="link.iconName"
                            :color="link.label === 'telegram' ? '#30A3E6' : link.label === 'vk' ? '#0077FF' : '#FF7700'"
                        />
                    </NuxtLink>
                </template>
            </KNavigation>
        </KGridCell>
        <KGridCell>
            <KNavigation
                direction="vertical"
                heading="Кванториум"
                :items="kvantoriumContacts"
            />
            <KNavigation
                direction="vertical"
                heading="Техникум"
                :items="collegeContacts"
                :class="$style.college"
            />
        </KGridCell>

        <template #bottom>
            <div :class="$style.copyright">
                детский технопарк “кванториум “волжский политех”
                <br>
                {{ new Date().getFullYear() }}
            </div>
        </template>
    </KFooter>
</template>

<style module>
.info-top {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    align-items: center;
    font-family: 'BankGothic';
    font-size: 1rem;
}
.info-paragraph {
    font-family: 'Circe';
    font-size: 1rem;
    margin-top: 1.75rem;
}
.info-button {
    margin-top: 0.5rem;
    width: 100%;
}
.logo {
    --width: 3rem;
}
.socials {
    --gap: 0.5rem;
    margin-top: 1.5rem;
}
.college {
    margin-top: 1.5rem;
}
.copyright {
    font-family: 'BankGothic';
    font-size: 1rem;
    line-height: 1;
}
</style>
