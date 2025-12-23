<script setup lang="ts">
const header = useTemplateRef('header')

const { y } = useWindowScroll()
const { height } = useElementSize(header)

const isHeaderMustHaveBackground = computed(() => {
    if (useRouter().currentRoute.value.path !== '/') {
        return true
    }

    if (y.value > height.value / 2) {
        return true
    }

    return false
})

provide('isHeaderMustHaveBackground', isHeaderMustHaveBackground)
</script>

<template>
    <div class="scroll-smooth">
        <ShSidebarProvider>
                <HeaderMobileNavigation />
            <TheHeader ref="header" />
        </ShSidebarProvider>

        <NuxtPage id="top" />

        <TheFooter id="contacts" />
    </div>
</template>
