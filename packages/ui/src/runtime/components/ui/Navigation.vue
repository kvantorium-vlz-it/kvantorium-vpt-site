<script setup lang="ts">
import type { RouterLinkProps } from '#vue-router'

interface NavigationItem {
    label: string
    iconName?: string
    to?: RouterLinkProps['to']
}

interface GroupNavigationItem {
    label: string
    iconName?: string
    items: (NavigationItem | GroupNavigationItem)[]
}

type Variant = 'light' | 'dark'
type Direction = 'horizontal' | 'vertical'

interface Props {
    items: (NavigationItem | GroupNavigationItem)[]
    heading?: string
    variant?: Variant
    direction?: Direction
}

withDefaults(defineProps<Props>(), {
    variant: 'light',
    direction: 'horizontal',
})

function isGroupNavigationItem(
    item: GroupNavigationItem | NavigationItem
): item is GroupNavigationItem {
    return 'items' in item
}
</script>

<template>
    <div
        :class="[
            $style.navigation,
            $style[direction],
            $style[variant],
        ]"
    >
        <KTypography
            fontFamily="BankGothic"
            fontSize="h2"
            #default="{ classes }"
        >
            <h3
                v-if="heading"
                :class="[classes, $style.heading]"
            >
                {{ heading }}
            </h3>
        </KTypography>

        <ul
            v-if="items.length > 0"
            :class="$style.list"
        >
            <li
                v-for="item, index in items"
                :key="index"
            >
                <slot
                    v-if="isGroupNavigationItem(item)"
                    name="links-group"
                    :items="item.items"
                    :isGroupNavigationItem="isGroupNavigationItem"
                    :variant="variant"
                >
                    <KFlyOutMenu
                        :label="item.label"
                        :variant="variant"
                        @click-outside="(close) => {
                            close()
                        }"
                    >
                        <KNavigation
                            :items="item.items"
                            variant="dark"
                            direction="vertical"
                        />
                    </KFlyOutMenu>
                </slot>

                <slot
                    v-else
                    name="link"
                    :link="item"
                    :variant="variant"
                >
                    <KLink
                        :to="item.to"
                        :variant="variant"
                    >
                        <Icon
                            v-if="item.iconName"
                            :name="item.iconName"
                        />
                        {{ item.label }}
                    </KLink>
                </slot>
            </li>
        </ul>
    </div>
</template>

<style module>
.navigation {
    --direction: none;
    --gap: 0;
    --align-items: auto;
    --heading-color: var(--c-site-text);
}
.list {
    list-style: none;
    display: flex;
    width: fit-content;
    flex-wrap: wrap;
}
.heading {
    color: var(--heading-color);
    margin-bottom: 0.75rem;
}
.navigation > .list {
    flex-direction: var(--direction);
    gap: var(--gap);
    align-items: var(--align-items);
}

.horizontal {
    --gap: 1.5rem;
    --direction: row;
    --align-items: center;
}
.vertical {
    --gap: 0.25rem;
    --direction: column;
}
.light {
    --heading-color: var(--c-site-background);
}
.dark {
    --heading-color: var(--c-site-text);
}
</style>
