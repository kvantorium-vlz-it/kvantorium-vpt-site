<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAboutPageStore } from '~~/store/aboutPage'

const aboutPageStore = storeToRefs(useAboutPageStore())
</script>

<template>
    <page-section as="main">
        <page-section-content>
            <template #heading>
                {{ aboutPageStore.organization.value.heading }}
            </template>
            <template #subheading>
                {{ aboutPageStore.organization.value.subheading }}
            </template>
            <rich-text :blocks="aboutPageStore.organization.value.content" />
        </page-section-content>
    </page-section>
    <page-section as="main">
        <page-section-content>
            <template #heading>
                {{ aboutPageStore.enrollment.value.heading }}
            </template>
            <template #subheading>
                {{ aboutPageStore.enrollment.value.subheading }}
            </template>
            <rich-text :blocks="aboutPageStore.enrollment.value.content" />
        </page-section-content>
    </page-section>
    <page-section as="main">
        <page-section-content>
            <template #heading>
                {{ aboutPageStore.workflowOrganization.value.heading }}
            </template>
            <template #subheading>
                {{ aboutPageStore.workflowOrganization.value.subheading }}
            </template>
            <rich-text :blocks="aboutPageStore.workflowOrganization.value.content" />
        </page-section-content>
    </page-section>
</template>
