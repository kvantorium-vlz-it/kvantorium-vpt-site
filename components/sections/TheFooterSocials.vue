<template>
    <nav :class="$style.socials">
        <the-footer-socials-provider #="{ socials }">
            <ul :class="$style.socials__list">
                <li v-for="(social, index) in socials" :key="index">
                    <the-footer-social
                        :icon="social.icon"
                        :link="social.link"
                    />
                </li>
            </ul>
        </the-footer-socials-provider>
    </nav>
</template>

<style module lang="scss">
.socials {
    &__list {
        padding: 0;
        list-style: none;

        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
    }
}
</style>
