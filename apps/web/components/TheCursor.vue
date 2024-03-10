<script setup lang="ts">
import TheCursorFallback from './TheCursorFallback.vue';

interface Position {
    x: number
    y: number
}

interface Props {
    speed?: number
}

const props = withDefaults(defineProps<Props>(), {
    speed: 0.17
})

const { x, y } = useMouse({
    touch: false,
    type: 'client',
})

const previousMouse = reactive<Position>({
    x: x.value,
    y: y.value,
})
const circlePosition = reactive<Position>({
    x: x.value,
    y: y.value,
})

function tick() {
    circlePosition.x += (x.value - circlePosition.x) * props.speed;
    circlePosition.y += (y.value - circlePosition.y) * props.speed;

    previousMouse.x = x.value
    previousMouse.y = y.value
}

useRafFn(tick)

const translate = computed(() => `translate(${circlePosition.x}px, ${circlePosition.y}px)`)

const {
    cursorAttrs,
    Cursor,
    isVisibleGlobalCursor,
    CursorTransition,
    cursorTransitionAttrs,
    FallbackTransition,
    fallbackTransitionAttrs,
} = useGlobalCursor()

const [DefineCursorTemplate, ReuseCursorTemplate] = createReusableTemplate()
const [DefineFallbackTemplate, ReuseFallbackTemplate] = createReusableTemplate()

const isRenderDefault = computed(() => Cursor.value === null)
</script>

<template>
    <div
        v-if="isVisibleGlobalCursor"
        :class="$style.cursor"
        :style="`transform: ${translate};`"
    >
        <DefineCursorTemplate>
            <Component
                v-if="!isRenderDefault"
                :is="Cursor"
                :="cursorAttrs"
            />
        </DefineCursorTemplate>

        <DefineFallbackTemplate>
            <div v-if="isRenderDefault" style="position: absolute;">
                <slot>
                    <TheCursorFallback />
                </slot>
            </div>
        </DefineFallbackTemplate>

        <Component
            v-if="CursorTransition"
            :is="CursorTransition"
            :="cursorTransitionAttrs"
        >
            <ReuseCursorTemplate />
        </Component>
        <ReuseCursorTemplate v-else />

        <Component
            v-if="FallbackTransition"
            :is="FallbackTransition"
            :="fallbackTransitionAttrs"
        >
            <ReuseFallbackTemplate />
        </Component>

        <ReuseFallbackTemplate v-else />
    </div>
</template>

<style module>
.cursor {
    z-index: 1;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
}
</style>
