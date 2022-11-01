import { defineStore } from 'pinia'

interface IKvantum {
    name: string;
    description: string;
    image: string;
    _id: string;
}

interface IAdvantage {
    description: string;
    title: string;
    image: string;
}

interface IIndexPage {
    pageTab: string;

    heroHeading: string;
    heroSubHeading: string;

    kvantumsHeading: string;
    kvantumsSubHeading: string;
    visibleKvantums?: IKvantum[];

    advantagesHeading:string;
    advantagesSubHeading?:string;
    advantagesList: IAdvantage[];

    mapHeading: string;
    mapSubHeading?: string;
}

interface IPageSection {
    heading: string;
    subHeading?: string;
}

export const useIndexPageStore = defineStore('indexPage', () => {
    const query = groq`*[_type == "IndexPage"][0]{
        advantagesHeading, advantagesSubHeading, heroHeading, heroSubHeading,
        kvantumsHeading, kvantumsSubHeading, mapHeading, mapSubHeading, pageTab,
        advantagesList[]->{
            description, title,
            'image': image.asset->url
        },
        visibleKvantums[]->{
          name, 'description': shortDescription, 'image': icon.asset->url
        }
    }`

    const { data, refresh } = useSanityQuery<IIndexPage>(query)

    const heading = computed<IPageSection>(() => ({
        heading: data.value?.heroHeading || '',
        subHeading: data.value?.heroSubHeading || '',
    }))
    const kvantums = computed(() => ({
        heading: data.value?.kvantumsHeading || '',
        subHeading: data.value?.kvantumsSubHeading || '',
        list: data.value?.visibleKvantums || [],
    }))
    const advantages = computed(() => ({
        heading: data.value?.advantagesHeading || '',
        subHeading: data.value?.advantagesSubHeading || '',
        list: data.value?.advantagesList || [],
    }))
    const map = computed<IPageSection>(() => ({
        heading: data.value?.mapHeading || '',
        subHeading: data.value?.mapSubHeading || '',
    }))

    return {
        refresh,
        heading,
        kvantums,
        advantages,
        map,
    }
})
