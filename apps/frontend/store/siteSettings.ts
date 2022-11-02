import { defineStore } from 'pinia'

interface IContact {
    label: string;
    value: string;
    name: string;
    type: 'email' | 'link' | 'tel';
}
interface ISocial {
    link: string;
    title: string;
    icon: string;
}

interface ISiteSettings {
    footerContacts: IContact[];
    footerSocials: ISocial[];
    footerCopyright: string;
    tabTitle: string;
}

export const useSiteSettingsStore = defineStore('siteSettings', () => {
    const siteSettingsQuery = groq`*[_type == 'SiteSettings'][0]{
        footerCopyright, tabTitle,
        footerContacts[]->{label, value, type, name},
        footerSocials[]->{
            link, title,
            'icon': icon->image.asset->url
        },
    }`

    const { data, refresh } = useSanityQuery<ISiteSettings>(siteSettingsQuery)

    const footerCopyright = computed<string>(() => data.value?.footerCopyright || '')
    const tabTitle = computed<string>(() => data.value?.tabTitle || '')
    const footerContacts = computed<IContact[]>(() => data.value?.footerContacts || [])
    const footerSocials = computed<ISocial[]>(() => data.value?.footerSocials || [])

    return {
        refresh,
        footerCopyright,
        tabTitle,
        footerContacts,
        footerSocials,
    }
})
