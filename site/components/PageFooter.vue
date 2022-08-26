<template>
<footer :class="$style.Footer">
    <div :class="$style.Footer__sections">
        <page-footer-section name="Контакты">
            <page-footer-contacts>
                <page-footer-contacts-item
                    label="email"
                    value="kvantroiumvlz@volpt.ru"
                    href="mailto:kvantroiumvlz@volpt.ru"
                />
                <page-footer-contacts-item
                    label="телефон"
                    value="+79023835024"
                    href="tel: +79023835024"
                />
            </page-footer-contacts>
        </page-footer-section>

        <page-footer-section name="Навигация">
            <page-footer-navigation>
                <page-footer-navigation-item
                    text="Главная"
                    to="/"
                />
                <page-footer-navigation-item
                    text="Квантумы"
                />
                <page-footer-navigation-item
                    text="О нас"
                />
            </page-footer-navigation>
        </page-footer-section>

        <page-footer-section name="Соцсети">
            <page-footer-socials>
                <page-footer-socials-item
                    href="https://www.vk.com"
                    :icon="VKIcon"
                />
            </page-footer-socials>
        </page-footer-section>
    </div>

    <page-footer-copyright />
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