import { requiredFieldValidation } from "../../assets/ts/utils"

const organizationGroupMeta = {
    name: 'organization',
}
const workflowOrganizationGroupMeta = {
    name: 'workflowOrganization'
}
const enrollmentGroupMeta = {
    name: 'enrollment'
}

const organizationGroup = {
    name: organizationGroupMeta.name,
    fields: [
        {
            name: 'organizationHeading',
            type: 'string',
            validation: requiredFieldValidation,
            group: organizationGroupMeta.name,
        },
        {
            name: 'organizationSubHeading',
            type: 'string',
            group: organizationGroupMeta.name,
        },
        {
            name: 'organizationContent',
            type: 'RichText',
            group: organizationGroupMeta.name,
        },
    ]
}
const workflowOrganizationGroup = {
    name: workflowOrganizationGroupMeta.name,
    fields: [
        {
            name: 'workflowOrganizationHeading',
            type: 'string',
            group: workflowOrganizationGroupMeta.name,
            validation: requiredFieldValidation,
        },
        {
            name: 'workflowOrganizationSubHeading',
            type: 'string',
            group: workflowOrganizationGroupMeta.name,
        },
        {
            name: 'workflowOrganizationContent',
            type: 'RichText',
            group: workflowOrganizationGroupMeta.name,
        }
    ]
}
const enrollmentGroup = {
    name: enrollmentGroupMeta.name,
    fields: [
        {
            name: 'enrollmentHeading',
            type: 'string',
            group: enrollmentGroupMeta.name,
            validation: requiredFieldValidation,
        },
        {
            name: 'enrollmentSubHeading',
            type: 'string',
            group: enrollmentGroupMeta.name,
        },
        {
            name: 'enrollmentContent',
            type: 'RichText',
            group: enrollmentGroupMeta.name,
        }
    ]
}



export default {
    name: 'AboutPage',
    type: 'document',
    groups: [
        organizationGroupMeta,
        workflowOrganizationGroupMeta,
        enrollmentGroupMeta,
    ],
    fields: [
        ...organizationGroup.fields,
        ...workflowOrganizationGroup.fields,
        ...enrollmentGroup.fields,
    ]
}
