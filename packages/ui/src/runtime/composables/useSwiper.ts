import { computed, isRef, ref, toValue, type MaybeRef } from "#imports"
import { clamp, modulusLoop } from "../assets/ts/utils"

interface UseSwiperOptions<T> {
    items: MaybeRef<T[]>
    visibleSlidesCount?: MaybeRef<number>
    isLoop?: MaybeRef<boolean>
}

function useSwiper<T>({
    items,
    isLoop = false,
    visibleSlidesCount = 1,
}: UseSwiperOptions<T>) {

    const _items = toValue(items)
    const _visibleSlidesCount = toValue(visibleSlidesCount)

    const currentSlidesOffset = ref(0)
    const maxSlidesOffset = computed(() => {
        return _items.length - _visibleSlidesCount
    })

    function slideTo(slideIndex: number) {
        const newSlidesOffset = isLoop
            ? modulusLoop(0, _items.length - 1, slideIndex)
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
