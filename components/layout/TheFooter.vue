<template>
<footer :class="$style.Footer">
    <div :class="$style.Footer__sections">
        <the-footer-section name="Контакты">
            <the-footer-contacts>
                <the-footer-contacts-item
                    label="email"
                    value="kvantroiumvlz@volpt.ru"
                    href="mailto:kvantroiumvlz@volpt.ru"
                />
                <the-footer-contacts-item
                    label="телефон"
                    value="+79023835024"
                    href="tel: +79023835024"
                />
            </the-footer-contacts>
        </the-footer-section>

        <the-footer-section name="Навигация">
            <the-footer-navigation>
                <the-footer-navigation-item
                    text="Главная"
                    to="/"
                />
                <the-footer-navigation-item
                    text="Квантумы"
                />
                <the-footer-navigation-item
                    text="О нас"
                />
            </the-footer-navigation>
        </the-footer-section>

        <the-footer-section name="Соцсети">
            <the-footer-socials>
                <the-footer-socials-item
                    href="https://www.vk.com"
                    :icon="VKIcon"
                />
            </the-footer-socials>
        </the-footer-section>
    </div>

    <the-footer-copyright />
</footer>
</template>

<script setup lang="ts">
import VKIcon from '@/components/Icons/VkIcon.vue';
</script>

<style module lang="postcss">
.Footer {
    @apply page-section bg-primary-800;
    @apply flex flex-col gap-3;

    &__sections {
        @apply flex flex-wrap justify-between gap-3;
    }
}
</style>