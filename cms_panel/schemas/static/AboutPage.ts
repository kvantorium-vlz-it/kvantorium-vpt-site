import { definePageSection } from "../../assets/ts/PageSection"

const organization = definePageSection({
    group: {
        name: 'organization',
    },
    fields: [
        {
            name: 'organizationContent',
            type: 'RichText',
        }
    ]
})
const workflowOrganization = definePageSection({
    group: {
        name: 'workflowOrganization'
    },
    fields: [
        {
            name: 'workflowOrganizationContent',
            type: 'RichText',
        }
    ]
})
const enrollment = definePageSection({
    group: {
        name: 'enrollment'
    },
    fields: [
        {
            name: 'enrollmentContent',
            type: 'RichText',
        }
    ]
})

export default {
    name: 'AboutPage',
    type: 'document',
    groups: [
        organization.group,
        workflowOrganization.group,
        enrollment.group,
    ],
    fields: [
        ...organization.fields,
        ...workflowOrganization.fields,
        ...enrollment.fields,
    ]
}
