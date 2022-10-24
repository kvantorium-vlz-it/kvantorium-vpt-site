<template>
    <nav :class="$style.navigation">
        <the-footer-navigation-provider #="{ navigation }">
            <ul :class="$style.navigation__list">
                <li v-for="(item, index) in navigation" :key="index">
                    <the-footer-navigation-link :to="item.to">
                        {{ item.label }}
                    </the-footer-navigation-link>
                </li>
            </ul>
        </the-footer-navigation-provider>
    </nav>
</template>

<style module lang="scss">
.navigation {
    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        padding: 0;

        list-style: none;
    }
}
</style>
