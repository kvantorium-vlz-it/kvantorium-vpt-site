import { computed, readonly, ref, toValue, type MaybeRef } from "#imports"
import { modulusLoop, clamp } from 'shared/utils'

interface UseSwiperOptions {
    slidesCount: MaybeRef<number>
    slidesPerView?: MaybeRef<number>
    isLooped?: MaybeRef<boolean>
}

function useSwiper({
    isLooped = false,
    slidesPerView = 1,
    slidesCount,
}: UseSwiperOptions) {
    const _isLooped = computed(() => toValue(isLooped))
    const _slidesCount = computed(() => toValue(slidesCount))
    const _slidesPerView = computed(() => toValue(slidesPerView))

    const currentView = ref(0)
    const viewsCount = computed(() => _slidesCount.value - _slidesPerView.value)

    const viewSlides = computed(() => Array
        .from({ length: _slidesPerView.value })
        .map((_, index) => currentView.value + index)
    )

    const isFirstView = computed(() => currentView.value === 0)
    const isLastView = computed(() => currentView.value === viewsCount.value)

    function slideToView(view: number) {
        const options = {
            max: {
                bound: viewsCount.value,
            }
        }

        const newSlidesOffset = _isLooped.value
            ? modulusLoop(view, options)
            : clamp(view, options)

        const oldView = currentView.value
        currentView.value = newSlidesOffset

        return oldView
    }

    function slideDelta(delta: number) {
        return slideToView(currentView.value + delta)
    }

    function slideToNextView() {
        return slideDelta(1)
    }

    function slideToPreviousView() {
        return slideDelta(-1)
    }

    function slideToFirstView() {
        return slideToView(0)
    }

    function slideToLastView() {
        return slideToView(viewsCount.value)
    }

    return {
        isFirstView,
        isLastView,
        currentView: readonly(currentView),
        viewsCount,
        viewSlides: readonly(viewSlides),

        slideToView,
        slideToFirstView,
        slideToLastView,
        slideDelta,
        slideToNextView,
        slideToPreviousView,
    }
}

export default useSwiper
export { useSwiper }
