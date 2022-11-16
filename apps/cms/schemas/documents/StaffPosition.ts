import { requiredRule } from '../../assets/ts/utils'

export default {
    name: 'StaffPosition',
    title: 'Должности работника',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название должности',
            validation: requiredRule,
        }
    ],
    preview: {
        select: {
            title: 'name',
        }
    }
}
