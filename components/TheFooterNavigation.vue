<template>
    <nav>
        <the-footer-navigation-provider #="{ navigation }">
            <the-footer-section-list>
                <li v-for="(item, index) in navigation" :key="index">
                    <the-footer-navigation-link :to="item.to">
                        {{ item.label }}
                    </the-footer-navigation-link>
                </li>
            </the-footer-section-list>
        </the-footer-navigation-provider>
    </nav>
</template>
