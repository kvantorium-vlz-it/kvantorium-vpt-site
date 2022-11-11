<script setup lang="ts">
withDefaults(defineProps<{
  isOpen: boolean
}>(), {
  isOpen: false,
})

const emit = defineEmits<{
  (_e: 'close'): void
  (_e: 'open'): void
}>()

const navigation = ref<HTMLElement>(null)

onClickOutside(navigation, (_event) => {
  emit('close')
})

const swipeStartX = ref<number>(null)
useSwipe(navigation, {
  onSwipeEnd: (event, direction) => {
    const swipeEndX = event.changedTouches.item(0).clientX
    const deltaX = Math.abs(swipeStartX.value - swipeEndX)

    const sideBarWidth = parseFloat(getComputedStyle(navigation.value).width)

    const allowedDeltaToCloseSidebar = sideBarWidth / 4

    if (direction === 'RIGHT' || deltaX < allowedDeltaToCloseSidebar)
      return

    emit('close')
    swipeStartX.value = null
  },
  onSwipeStart: (event) => {
    swipeStartX.value = event.touches.item(0).clientX
  },
})
</script>

<template>
  <nav
    ref="navigation"
    :class="{
      [$style.navigation]: true,
      [$style.open]: isOpen,
    }"
  >
    <the-header-navigation-provider
      #="{ navigation, isGroup, isItem }"
    >
      <template
        v-for="(item, index) in navigation"
        :key="index"
      >
        <the-header-navigation-group
          v-if="isGroup(item)"
          :name="item.name"
          :items="item.items"
        />
        <the-header-navigation-item
          v-else-if="isItem(item)"
          :to="item.to"
        >
          {{ item.label }}
        </the-header-navigation-item>
      </template>
    </the-header-navigation-provider>

    <the-header-navigation-decoration :class="$style.navigation__decoration" />
  </nav>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.navigation {
    @include between-breakpoint(mobile, desktop) {
        --br: var(--br-m);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        transform: translateX(calc(var(--w-mobile-sidebar-width) * -1));

        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: #{rem(4px)};

        width: var(--w-mobile-sidebar-width);
        max-height: 100vh;
        padding: var(--p-y) var(--p-x);

        background: var(--bg-sidebar);
        border-top-right-radius: var(--br);
        border-bottom-right-radius: var(--br);

        transition: ease-out 0.5s;
        transition-property: transform;

        &.open {
            transform: translateX(0);

            box-shadow: var(--bs-sidebar);
        }
    }
    @include from-breakpoint(desktop) {
        display: flex;
        gap: #{rem(8px)};

        &__decoration {
            display: none;
        }
    }
}
</style>
