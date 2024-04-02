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
        <template #column-1>
            <NuxtLink
                :class="$style['logo-link']"
                to="/"
            >
                <KCircleIcon
                    icon-name="KLogo"
                    :class="$style.logo"
                />
            </NuxtLink>
        </template>
        <template #column-3>
            <KNavigation
                direction="horizontal"
                :items="navigation"
                :variant="variant === 'blank' ? 'light' : 'dark'"
            />
        </template>
        <template #column-4>
            <div style="display: flex; flex-direction: row; justify-content: flex-end">
                <KLinkButton
                    :variant="variant === 'blank' ? 'white' : 'secondary'"
                    @click="open"
                >
                    Записаться
                </KLinkButton>
            </div>
        </template>
    </KHeader>
</template>

<style module>
.logo-link {
    width: fit-content;
    border-radius: 100vw;
}
.logo {
    --width: 2.5rem;
    transition: 0.5s ease;
}
.logo-link:hover > .logo {
    rotate: 360deg;
}
</style>
