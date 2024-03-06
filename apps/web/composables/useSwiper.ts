import { clamp, modulusLoop } from "~/assets/typescript/utils"

interface UseSwiperOptions<T> {
    items: T[]
    options?: {
        visibleSlidesCount?: number
        isLoop?: boolean
    }
}

function useSwiper<T>({
    items,
    options = {},
}: UseSwiperOptions<T>) {
    const {
        visibleSlidesCount = 1,
        isLoop = false,
    } = options
    const currentSlidesOffset = ref(0)
    const maxSlidesOffset = computed(() => items.length - visibleSlidesCount)

    function slideTo(slideIndex: number) {
        const newSlidesOffset = isLoop
            ? modulusLoop(0, items.length - 1, slideIndex)
            : clamp(slideIndex, 0, maxSlidesOffset.value)

        currentSlidesOffset.value = newSlidesOffset
    }

    function slideDelta(offset: number) {
        slideTo(currentSlidesOffset.value + offset)
    }

    function slideToNext() {
        slideDelta(1)
    }

    function slideToPrevious() {
        slideDelta(-1)
    }

    return {
        currentSlidesOffset,
        maxSlidesOffset,
        slideTo,
        slideDelta,
        slideToNext,
        slideToPrevious,
    }
}

export default useSwiper
export { useSwiper }
