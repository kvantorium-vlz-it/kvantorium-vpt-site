import { definePageSection } from "../../assets/ts/PageSection";
import { definePage } from "../../assets/ts/Page";

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

export default definePage({
    name: 'KvantumsPage',
    groups: [
        kvantum,
    ]
})
