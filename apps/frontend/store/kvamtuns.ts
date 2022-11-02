import { defineStore } from 'pinia'

const query = groq`*[_type == "Kvantum"]{
    name, shortDescription,
    'description': description[]{..., 'asset': asset->url},
    'id': _id,
    'icon': icon.asset->url,
    'image': image.asset->url,
}`

export interface IKvantum {
    description: [];
    icon: string;
    id: string;
    image: string;
    name: string;
    shortDescription: string;
}

export const useKvantumsStore = defineStore('kvantums', () => {
    const { data, refresh } = useSanityQuery<IKvantum[]>(query)

    const list = computed(() => data.value || [])

    const map = computed(() => {
        return new Map<IKvantum['id'], IKvantum>(list.value.map((kvantum) => {
            return [kvantum.id, kvantum]
        }))
    })

    return {
        refresh,
        list,
        map,
    }
})
