<template>
    <div
        ref="timelineContainerRef"
        class="w-full font-serif"
    >
        <div
            ref="timelineRef"
            class="relative mx-auto pb-20"
        >
            <div
                v-for="(item, index) in props.items"
                :key="item.id + index"
                class="flex justify-start [&:not(:first-child)]:pt-10"
            >
                <div class="sticky z-40 self-start top-64 pt-4">
                    <div class="size-8 left-4 bg-white absolute rounded-full flex justify-center items-center border border-gray">
                        <div class="size-4 from-primary to-secondary bg-gradient-to-br rounded-full"></div>
                    </div>
                </div>

                <slot :name="item.id"></slot>
            </div>

            <div
                :style="{
                    height: height + 'px',
                }"
                class="absolute left-8 top-0 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-gray to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
                <Motion
                    as="div"
                    :style="{
                        height: heightTransform,
                        opacity: opacityTransform,
                    }"
                    class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-secondary from-0% via-primary via-10% to-transparent"
                >
                </Motion>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup generic="T extends { id: number }">
import { Motion, useScroll, useTransform } from "motion-v";
import type { HTMLAttributes } from "vue";

interface Props {
    containerClass?: HTMLAttributes["class"]
    class?: HTMLAttributes["class"]
    items: T[];
}

const props = withDefaults(defineProps<Props>(), {
    items: () => [],
});

const timelineContainerRef = ref<HTMLElement | null>(null);
const timelineRef = ref<HTMLElement | null>(null);
const height = ref(0);

onMounted(async () => {
    await nextTick();

    if (timelineRef.value) {
        const rect = timelineRef.value.getBoundingClientRect()
        height.value = rect.height
    }
});

const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 30%", "end 50%"],
});

const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])
let heightTransform = useTransform(scrollYProgress, [0, 1], [0, 0])

watch(height, (newHeight) => {
    heightTransform = useTransform(scrollYProgress, [0, 1], [0, newHeight])
})
</script>
