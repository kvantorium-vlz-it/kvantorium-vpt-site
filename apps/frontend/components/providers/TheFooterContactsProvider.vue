<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSiteSettingsStore } from '@/store/siteSettings'

type ContactType = 'link' | 'email' | 'tel' | 'geo'

interface IContact {
    type: ContactType;
    name: string;
    link: string;
    label: string;
}

class Contact {
    public readonly name: string
    public readonly link: string
    public readonly label: string

    constructor ({
        label,
        link,
        name,
        type
    }: IContact) {
        this.name = name
        this.label = label

        switch (type) {
        case 'email': {
            this.link = `mailto:${link}`
            break
        }
        case 'link': {
            this.link = `${link}`
            break
        }
        case 'geo': {
            this.link = `geo:${link}`
            break
        }
        case 'tel': {
            this.link = `tel:${link}`
            break
        }
        default: {
            this.link = link
            break
        }
        }
    }
}

const siteSettingsStore = storeToRefs(useSiteSettingsStore())

const rawContacts = computed<IContact[]>(() => {
    return siteSettingsStore.footerContacts.value.map(contact => ({
        label: contact.label,
        link: contact.value,
        name: contact.name,
        type: contact.type,
    }))
})

const contacts = ref<Contact[]>(rawContacts.value
    .map(contact => new Contact(contact))
)
</script>

<template>
    <slot :contacts="contacts" />
</template>
