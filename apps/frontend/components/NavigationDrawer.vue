<script setup lang="ts">
interface IItem {
    label: string
    to?: string
}

interface IGroup {
    name: string
    items: IItem[]
}

type Direction = 'LEFT' | 'RIGHT'

withDefaults(defineProps<{
    items: (IItem | IGroup)[]
    isOpen?: boolean
}>(), {
    isOpen: false,
})

const emit = defineEmits<{
    (e: 'slideLeft', direction: 'LEFT'): void
    (e: 'slideRight', direction: 'RIGHT'): void
    (e: 'clickOutside', element: EventTarget | null): void
}>()

const isItem = (target: any): target is IItem => 'label' in target
const isGroup = (target: any): target is IGroup => 'items' in target

const drawer = ref()

onClickOutside(drawer, (_event) => {
    emit('clickOutside', _event.target)
})

const ALLOWED_DELTA_PERCENT_TO_CLOSE_DRAWER = 0.25
const swipeStartX = ref<number | null>(null)

useSwipe(drawer, {
    onSwipeEnd: (event, direction) => {
        const touch = event.changedTouches.item(0)

        if (!touch || swipeStartX.value === null) {
            return
        }

        const swipeEndX = touch.clientX
        const deltaX = Math.abs(swipeStartX.value - swipeEndX)

        const sideBarWidth = parseFloat(getComputedStyle(drawer.value!).width)
        const allowedDeltaToCloseSidebar = sideBarWidth * ALLOWED_DELTA_PERCENT_TO_CLOSE_DRAWER

        if (deltaX < allowedDeltaToCloseSidebar) {
            return
        }

        const _direction = direction as Direction

        if (_direction === 'LEFT') {
            emit('slideLeft', _direction)
        } else {
            emit('slideRight', _direction)
        }

        swipeStartX.value = null
    },
    onSwipeStart: (event) => {
        const touch = event.touches.item(0)

        if (!touch) {
            return
        }

        swipeStartX.value = touch.clientX
    },
})
</script>

<template>
    <Transition
        name="slide-fade"
        :enter-to-class="$style['enter-to']"
        :leave-from-class="$style['leave-from']"
        :leave-to-class="$style['leave-to']"
        :enter-from-class="$style['enter-from']"
    >
        <nav
            ref="drawer"
            :class="$style.navigation"
            v-bind="$attrs"
            v-if="isOpen"
        >
            <template
                v-for="(item, index) in items"
                :key="index"
            >
                <NavigationItem
                    v-if="isItem(item)"
                    :to="item.to"
                >
                    {{ item.label }}
                </NavigationItem>
                <NavigationGroup
                    v-else
                    :items="item.items"
                    :name="item.name"
                />
            </template>
            <div :class="$style.navigation__decoration"></div>
        </nav>
    </Transition>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.navigation {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;

    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: #{rem(4px)};

    width: var(--w-navigation-drawer);
    max-height: 100vh;
    padding: var(--p-y) var(--p-x);

    background: var(--bg-sidebar);
    border-top-right-radius: var(--br-16);
    border-bottom-right-radius: var(--br-16);

    transition: transform ease-out 0.5s;

    z-index: var(--z-overlay);

    &__decoration {
        pointer-events: none;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        overflow: hidden;
        flex-shrink: 0;

        border-radius: inherit;

        &::after {
            content: '';

            position: absolute;
            right: 0;
            bottom: 0;
            transform: translate(25%, 25%);

            box-sizing: content-box;
            aspect-ratio: 1;
            width: calc(var(--w-navigation-drawer) * 3 / 4);

            border: #{rem(48px)} solid rgb(var(--c-secondary-200) / 5%);
            border-radius: 100vw;
        }
    }
}

.enter-from,
.leave-to {
    transform: translateX(-100%);
}

.enter-to
.leave-from {
    transform: translateX(0);
}
</style>
