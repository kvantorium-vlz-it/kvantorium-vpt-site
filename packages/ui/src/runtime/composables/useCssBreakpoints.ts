// TODO: declare module for breakpoints.module.css
import styles from '../assets/css/breakpoints.module.css'
import { useBreakpoints } from '@vueuse/core'

interface Breakpoints {
    mobileBreakpoint: string
    tabletBreakpoint: string
    desktopBreakpoint: string
}

function parseCssBreakpointValue(value: string) {
    return parseInt(value.replace('em', '')) * 16
}

export function useCssBreakpoints() {
    const _styles: Breakpoints = styles

    const mobileBreakpoint = parseCssBreakpointValue(_styles.mobileBreakpoint)
    const tabletBreakpoint = parseCssBreakpointValue(_styles.tabletBreakpoint)
    const desktopBreakpoint = parseCssBreakpointValue(_styles.desktopBreakpoint)

    return useBreakpoints({
        mobile: 0,
        tablet: mobileBreakpoint,
        desktop: tabletBreakpoint,
    })
}
