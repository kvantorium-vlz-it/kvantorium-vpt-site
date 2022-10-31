import { definePageSection } from "../../assets/ts/PageSection";
import { definePage } from "../../assets/ts/Page";

const kvantum = definePageSection({
    group: {
        name: 'kvantum',
        title: 'квантумы',
    },
    fields: [
        {
            name: 'description',
            type: 'RichText',
            title: 'Описание, что такое квантум',
        }
    ],
    headingAdditionalProps: {
        title: 'Заголовок',
    },
    subHeadingAdditionalProps: {
        title: 'Подзаголовок',
    }
})

export default definePage({
    name: 'KvantumsPage',
    groups: [
        kvantum,
    ]
})
