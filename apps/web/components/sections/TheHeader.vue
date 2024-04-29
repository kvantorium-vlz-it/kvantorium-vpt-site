<script setup lang="ts">
import EnrollModal from '../EnrollModal.vue';
import { useModal } from 'vue-final-modal';

type Variant = 'white' | 'blank'

interface Props {
    variant?: Variant
}

withDefaults(defineProps<Props>(), {
    variant: 'blank'
})
const navigation = [
    { label: 'О нас', items: [
        { label: 'Об организации', to: '/about' },
        { label: 'Наша команда', to: '/team' },
        { label: 'Медиа', to: '/media' },
        { label: 'Документы', to: '/documents' },
    ] },
    { label: 'Новости', to: '/news' },
    { label: 'Направления', to: '/kvantums' },
    { label: 'Контакты', to: '#footer' },
]

const { open } = useModal({
    component: EnrollModal,
})
</script>

<template>
    <KHeader
        :navigation="navigation"
        :variant="variant"
    >
        <KGridCell>
            <NuxtLink
                :class="$style['logo-link']"
                to="/"
            >
                <KCircleIcon
                    icon-name="KLogo"
                    :class="$style.logo"
                />
            </NuxtLink>
        </KGridCell>
        <KGridCell :width="4" :class="$style.middle">
            <KNavigation
                direction="horizontal"
                :items="navigation"
                :variant="variant === 'blank' ? 'light' : 'dark'"
            />
        </KGridCell>
        <KGridCell>
            <div style="display: flex; flex-direction: row; justify-content: flex-end">
                <KLinkButton
                    :variant="variant === 'blank' ? 'white' : 'secondary'"
                    @click="open"
                >
                    Записаться
                </KLinkButton>
            </div>
        </KGridCell>
    </KHeader>
</template>

<style module>
.logo-link {
    width: fit-content;
    border-radius: 100vw;
    display: block;
}
.logo {
    --width: 2.5rem;
    transition: 0.5s ease;
    --background-color: var(--c-site-background);
}
.logo-link:hover > .logo {
    rotate: 360deg;
}
.middle {
    display: flex;
    justify-content: center
}
</style>
