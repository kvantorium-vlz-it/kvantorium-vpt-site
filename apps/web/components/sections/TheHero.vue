<script setup lang="ts">
const curriculas = [
    { name: 'VR/AR-квантум' },
    { name: 'IT-квантум' },
    { name: 'медиа-квантум' },
    { name: 'робо-квантум' },
    { name: 'хайтек-квантум' },
    { name: 'промдизайн-квантум' },
    { name: 'аэро-квантум' },
    { name: 'кванто-шахматы' },
    { name: 'авто-шахматы' },
]

const { y } = useWindowScroll()
const { height } = useWindowSize()

const siteMaxMargin = ref(null)
const key = ref('--site-margin')
const cssSiteMargin = useCssVar(key, siteMaxMargin)

const scrollPercent = ref(0)
const margin = ref(`0rem`)

onMounted(() => {
    const _scrollPercent = computed(() => y.value / height.value)
    const _margin = computed(() => {
        const marginRems = +cssSiteMargin.value.replace('rem', '')

        const newMargin = Math.min(marginRems * scrollPercent.value, marginRems)

        return `${newMargin}rem`
    })

    watch(_scrollPercent, () => {
        scrollPercent.value = _scrollPercent.value
    })

    watch(_margin, () => {
        margin.value = _margin.value
    })
})

</script>

<template>
    <div
        :class="$style.hero"
        :style="`margin-inline: ${margin}; border-radius: ${margin};`"
    >
        <div :class="$style.container">
            <div :class="$style.title">
                <span :class="$style['title-top']">
                    ДЕТСКИЙ ТЕХНОПАРк
                </span>
                <br>
                <span :class="$style['title-bottom']">
                    “КВАНТОРИУМ “ВОЛЖСКИЙ ПОЛИТЕХ”
                </span>
                <!-- <address :class="$style.address">
                    <a href="geo:48.786934,44.772160" :class="$style['address-link']">
                        <Icon name="ph:map-pin" />
                        Волжский, ул. Машиностроителей, 15
                    </a>
                </address> -->
            </div>
            <div :class="$style.grid">
                <div></div>
                <TheHeroButton :class="$style.button" style="justify-self: center;" to="/" />
                <div :class="$style.curriculas">
                    <h2 :class="$style['curriculas-heading']">
                        Направления
                    </h2>

                    <ul :class="$style['curriculas-list']">
                        <li
                            v-for="curricula, index in curriculas"
                            :key="index"
                        >
                            <TheHeroCurricula :name="curricula.name" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style module>
.hero {
    position: relative;
    /* margin: var(--site-margin); */
    background-color: var(--c-util-black);
    /* border-radius: 1rem; */

    background-image: url('/hero-background-alpha.png');
    background-position: center center;
    background-size: cover;

    min-height: calc(100svh);
}
.hero::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/noise.png');
    background-size: cover;
    background-position: center;
    /* opacity: 0.4; */
    mix-blend-mode: overlay;
    pointer-events: none;
}
.title {
    color: var(--c-site-background);
    text-align: center;
    font-family: 'BankGothic';
    line-height: 0.8;
    margin-bottom: 4rem;
    letter-spacing: -0.1ch;

    animation: heroTitle 0.3s ease-out;
}
@keyframes heroTitle {
    0% {
        opacity: 0;
        transform: translateY(-2rem);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes heroAddress {
    0% { opacity: 0; translate: 0 -1em; }
    100% { opacity: 1; translate: 0; }
}
.title-top {
    text-transform: uppercase;
    font-size: 6rem;
}
.container {
    padding: 10rem 4rem 1rem;
}
.grid {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 18rem) 1fr;
    grid-template-rows: 18rem;
    align-items: center;
    gap: 1rem;
}
.address {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-size: 1.5rem;
    letter-spacing: 0ch;
    word-spacing: 0.5ch;
    font-family: 'Circe';
    animation: heroAddress 0.5s ease-out;
    /* text-decoration: underline; */
}
.address-link {
    margin-top: 2rem;
    color: var(--c-site-background);
    text-decoration: none;
}
.title-bottom {
    font-size: 3.5rem;
    text-transform: uppercase;
}
.curriculas-list {
    display: flex;
    list-style: none;
    justify-content: end;
    flex-wrap: wrap;
    row-gap: 0.125rem;
    column-gap: 0.25rem;
}
.curriculas-heading {
    font-size: 3rem;
    color: var(--c-site-background);
    font-family: 'BankGothic';
    margin-bottom: 1.5rem;
    text-align: end;
}
.curriculas {
    animation: curriculas 0.2s ease-out;
}
@keyframes curriculas {
    0% {
        opacity: 0;
        transform: translateX(2rem);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
.button {
    animation: button 0.2s ease-out;
}
@keyframes button {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
