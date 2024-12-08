<script setup lang="ts">
import FooterCopyright from './FooterCopyright.vue'
import FooterInfo from './FooterInfo.vue'
import FooterSiteNavigation from './FooterSiteNavigation.vue'
import FooterKvantoriumLinks from './FooterKvantoriumLinks.vue'
import FooterPolytechLinks from './FooterPolytechLinks.vue'
</script>

<template>
    <Section>
        <SectionContainer full-width>
            <div class="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-xl p-8 lg:py-16 lg:px-16 lg:pb-8 relative isolate after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-hero-noice after:-z-10 after:opacity-25 after:pointer-events-none">
                <div class="grid grid-cols-1 grid-flow-row lg:grid-rows-2 lg:grid-cols-4 gap-y-8 lg:gap-2">
                    <FooterInfo class="lg:col-start-1 lg:row-start-1 lg:row-span-2" />
                    <FooterSiteNavigation class="lg:col-start-3" />
                    <FooterKvantoriumLinks class="lg:col-start-4" />
                    <FooterPolytechLinks class="lg:col-start-4" />
                </div>

                <hr class="my-8">

                <FooterCopyright />
            </div>
        </SectionContainer>
    </Section>
</template>
