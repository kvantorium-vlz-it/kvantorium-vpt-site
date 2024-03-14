<script setup lang="ts">
// TODO: make more abstract component
import { KCircleIcon, KLinkButton, KContainer, NuxtLink } from '#components';
import type { RouterLinkProps } from '#vue-router';

type Variant = 'white' | 'blank'

interface NavigationItem {
    label: string
    iconName?: string
    to?: RouterLinkProps['to']
}

interface GroupNavigationItem {
    label: string
    iconName?: string
    items: NavigationItem[]
}

interface Props {
    variant?: Variant
    navigation?: (GroupNavigationItem | NavigationItem)[]
}

withDefaults(defineProps<Props>(), {
    variant: 'blank',
    navigation: () => [],
})

function isGroupNavigationItem(
    item: GroupNavigationItem | NavigationItem
): item is GroupNavigationItem {
    return 'items' in item
}
</script>

<template>
    <header :class="[$style.header, $style[variant]]">
        <KContainer is-full-width :class="$style['header-container']">
            <NuxtLink :class="$style['logo-link']" to="/">
                <KCircleIcon
                    iconName="KLogo"
                    :class="$style.logo"
                />
            </NuxtLink>

            <div :class="$style.right">
                <nav>
                    <KNavigation
                        :items="navigation"
                        :variant="variant === 'blank' ? 'light' : 'dark'"
                    />
                </nav>

                <KLinkButton
                    :variant="variant === 'blank' ? 'white' : 'secondary'"
                    to="/enroll"
                >
                    Записаться
                </KLinkButton>
            </div>
        </KContainer>
    </header>
</template>

<style module>
.header {
    --background-color: transparent;
    padding: 0.5rem;
    position: relative;
    isolation: isolate;
}
.header::after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    bottom: 100%;
    left: 0;
    right: 0;
    transition: 0.2s ease;
    background-color: var(--background-color);
    border-image: linear-gradient(
        to right,
        transparent,
        #cfd9e3b3,
        transparent
    );
    border-image-slice: 30;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);
}
.white::after {
    bottom: 0;
}
.header-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}

.logo-link {
    width: fit-content;
    border-radius: 100vw;
}
.logo {
    --width: 2.5rem;
    transition: 0.5s ease;
}

.right {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
}

.logo-link:hover > .logo {
    rotate: 360deg;
}

.blank {
    --background-color: transparent;
}
.white {
    --background-color: var(--c-site-background);
}
</style>
