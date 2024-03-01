<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router';

type Variant = 'filled' | 'blank'

interface Props {
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    variant: 'blank'
})

interface NavigationItem {
    label: string
    to?: RouterLinkProps['to']
}

interface NavigationGroup {
    label: string
    items: NavigationItem[]
}

const navigation: (NavigationGroup | NavigationItem)[] = [
    { label: 'О нас', items: [
        { label: 'Об организации', to: '/organization' },
        { label: 'Наша команда', to: '/comand' },
        { label: 'Медиа', to: '/media' },
        { label: 'Документы', to: '/documents' },
    ] },
    { label: 'Новости', to: '/news' },
    { label: 'Направления', to: '/kvantums' },
    { label: 'Контакты', to: '/contacts' },
]
</script>

<template>
    <header
        :class="[$style.header, $style[variant]]"
    >
        <div>
            <NuxtLink
                to="/"
                style="
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.5rem;
                    background-color: var(--c-site-background);
                    border-radius: 100vw;
                    aspect-ratio: 1;
                "
            >
                <Icon name="Logo" size="1.5rem" />
            </NuxtLink>
        </div>
        <div :class="$style.right">
            <TheHeaderNavigation :items="navigation" />

            <Button
                to="/enroll"
                :variant="variant === 'blank' ? 'white' : 'secondary'"
            >
                Записаться
            </Button>
        </div>
    </header>
</template>

<style module>
.header {
    /* background: rgba(255, 255, 255, 0.15); */
    padding-inline: var(--site-margin);
    padding-block: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
}
.header::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 100%;
    background-color: var(--c-site-background);
    z-index: -1;
    transition: bottom 0.2s ease-out;
}
.filled.header::after {
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
    bottom: 0;
    border-image: linear-gradient(
        to right,
        transparent,
        #cfd9e3b3,
        transparent
    );
    border-image-slice: 30;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    transition: 0.3 ease;
}
.logo {
    max-width: 2rem;
    aspect-ratio: 1;
    font-size: 1rem;
}
.right {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
