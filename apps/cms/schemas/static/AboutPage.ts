import { definePage } from "../../assets/ts/Page"
import { definePageSection } from "../../assets/ts/PageSection"

const organization = definePageSection({
    group: {
        name: 'organization',
        title: 'Сведения об организации',
    },
    fields: [
        {
            name: 'organizationContent',
            type: 'RichText',
            title: 'Сведения об организации',
        }
    ],
    headingAdditionalProps: {
        title: 'Заголовок секции "Сведения об организации"'
    },
    subHeadingAdditionalProps: {
        title: 'Подзаголовок секции "Сведения об организации"'
    }
})
const workflowOrganization = definePageSection({
    group: {
        name: 'workflowOrganization',
        title: 'Организация рабочего процесса',
    },
    fields: [
        {
            name: 'workflowOrganizationContent',
            type: 'RichText',
            title: 'Описание секции "Организация рабочего процесса"',
        }
    ],
    headingAdditionalProps: {
        title: 'Заголовок секции "Организация рабочего процесса"'
    },
    subHeadingAdditionalProps: {
        title: 'Подзаголовок секции "Организация рабочего процесса"'
    }
})
const enrollment = definePageSection({
    group: {
        name: 'enrollment',
        title: 'Зачисление',
    },
    fields: [
        {
            name: 'enrollmentContent',
            type: 'RichText',
            title: 'Описание секции "Зачисление"'
        }
    ],
    headingAdditionalProps: {
        title: 'Заголовок секции "Зачисление"'
    },
    subHeadingAdditionalProps: {
        title: 'Подзаголовок секции "Зачисление"'
    }
})

export default definePage({
    name: 'AboutPage',
    groups: [
        organization,
        workflowOrganization,
        enrollment,
    ]
})
