<script setup lang="ts">
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
                <div style="margin-bottom: 0.75rem;">
                    <h3 :class="$style.heading">
                        Навигация
                    </h3>
                    <ul :class="$style.navigation">
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon name="ph:arrow-up-right" />
                                Главная
                            </NuxtLink>
                        </li>
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon name="ph:arrow-up-right" />
                                О нас
                            </NuxtLink>
                        </li>
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon name="ph:arrow-up-right" />
                                Новости
                            </NuxtLink>
                        </li>
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon name="ph:arrow-up-right" />
                                Направления
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 :class="$style.heading">
                        Социальные сети
                    </h3>

                    <ul :class="[$style.navigation, $style['navigation-horizontal']]">
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon
                                    name="ic:baseline-telegram"
                                    :class="$style.social"
                                    style="color: #30A3E6"
                                    size="100%"
                                />
                            </NuxtLink>
                        </li>
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon
                                    name="ri:vk-fill"
                                    :class="$style.social"
                                    style="color: #0077FF"
                                    size="100%"
                                />
                            </NuxtLink>
                        </li>
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon
                                    name="brandico:odnoklassniki-rect"
                                    :class="$style.social"
                                    style="color: #FF7700"
                                    size="100%"
                                />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div style="margin-bottom: 0.75rem;">
                    <h3 :class="$style.heading">
                        кванториум
                    </h3>
                    <ul :class="$style.navigation">
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon name="mingcute:mail-fill" />
                                kvantoriumvlz@volpt.com
                            </NuxtLink>
                        </li>
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon name="ic:baseline-phone" />
                                8(902)383-50-24
                            </NuxtLink>
                        </li>
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon name="bi:geo-alt-fill" />
                                Волжский ул. Машиностроителей, 15, 404121
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 :class="$style.heading">
                        Техникум
                    </h3>
                    <ul :class="$style.navigation">
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon name="mdi:web" />
                                volpt@volganet.ru
                            </NuxtLink>
                        </li>
                        <li :class="$style['navigation-item']">
                            <NuxtLink>
                                <Icon name="ic:baseline-phone" />
                                volpt.ru
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
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
.heading {
    font-size: 1rem;
    font-family: 'BankGothic';
    line-height: 1;
    margin-bottom: 0.75rem;
}
.navigation {
    list-style: none;
    padding: 0;
}
.navigation-horizontal {
    display: flex;
    gap: 0.5rem;
}
.navigation-item {
    font-size: 0.75rem;
    font-family: 'Circe';
    line-height: 1;
}
.social {
    max-width: 2rem;
    border-radius: 100vw;
    background-color: var(--c-site-background);
    padding: 0.5rem;
}
.column-2 {
    grid-column: 3 / 4;
}
</style>
