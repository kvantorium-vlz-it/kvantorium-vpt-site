import { defineStore } from 'pinia'

const query = groq`*[_type == "AboutPage"][0]{
    'enrollmentContent': enrollmentContent[]{
        ...,
        'asset': asset->url
    }, enrollmentHeading, enrollmentSubHeading,
    'organizationContent': organizationContent[]{
        ...,
        'asset': asset->url
    }, organizationHeading, organizationSubHeading,
    'workflowOrganizationContent': workflowOrganizationContent[]{
        ...,
        'asset': asset->url
    }, workflowOrganizationHeading, workflowOrganizationSubHeading,
}`

interface IAboutPage {
    enrollmentContent: [];
    organizationContent: [];
    workflowOrganizationContent: [];
    enrollmentHeading: string;
    enrollmentSubHeading: string;
    organizationHeading: string;
    organizationSubHeading: string;
    workflowOrganizationHeading: string;
    workflowOrganizationSubHeading: string;
}

export const useAboutPageStore = defineStore('aboutPage', () => {
    const { data, refresh } = useSanityQuery<IAboutPage>(query)

    const enrollment = computed(() => ({
        heading: data.value.enrollmentHeading,
        subheading: data.value.enrollmentSubHeading,
        content: data.value.enrollmentContent,
    }))
    const organization = computed(() => ({
        heading: data.value.organizationHeading,
        subheading: data.value.organizationSubHeading,
        content: data.value.organizationContent,
    }))
    const workflowOrganization = computed(() => ({
        heading: data.value.workflowOrganizationHeading,
        subheading: data.value.workflowOrganizationSubHeading,
        content: data.value.workflowOrganizationContent,
    }))

    return {
        refresh,
        enrollment,
        organization,
        workflowOrganization,
    }
})
