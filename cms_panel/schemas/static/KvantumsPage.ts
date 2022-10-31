import { requiredFieldValidation } from "../../assets/ts/utils";
import { definePageSection } from "../../assets/ts/PageSection";

const kvantum = definePageSection({
    group: {
        name: 'kvantum'
    },
    fields: [
        {
            name: 'description',
            type: 'RichText',
        }
    ]
})

export default {
    name: 'KvantumsPage',
    type: 'document',
    groups: [
        kvantum.group,
    ],
    fields: [
        ...kvantum.fields,
    ]
}
