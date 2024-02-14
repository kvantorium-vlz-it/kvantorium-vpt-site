<script setup lang="ts">
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
    transitionAttrs,
    TransitionComponent,
} = useCursorGlobal()

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
    <div
        v-if="isVisibleGlobalCursor"
        :class="$style.cursor"
        :style="`transform: ${translate};`"
    >
        <DefineTemplate>
            <component
                v-if="Cursor"
                :is="Cursor"
                :="cursorAttrs"
            />
        </DefineTemplate>

        <component
            v-if="TransitionComponent"
            :is="TransitionComponent"
        :="transitionAttrs"
        >
            <ReuseTemplate />
        </component>

        <ReuseTemplate v-else />

        <slot v-if="!Cursor">
            <TheCursorFallback />
        </slot>
    </div>
</template>

<style module>
.cursor {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
}
</style>
