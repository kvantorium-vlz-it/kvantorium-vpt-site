<script setup lang="ts">
type ContactType = 'link' | 'email' | 'tel' | 'geo'

interface IContact {
    type: ContactType;
    name: string;
    link: string;
    label: string;
}

class Contact {
    public readonly name: string;
    public readonly link: string;
    public readonly label: string;

    constructor({
        label,
        link,
        name,
        type,
    }: IContact) {
        this.name = name
        this.label = label

        switch(type) {
            case 'email': {
                this.link = `mailto:${link}`
                break
            }
            case 'link': {
                this.link = `tel:${link}`
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

const rawContacts = ref<IContact[]>([
    {
        label: 'gjwka',
        link: 'gjkwagaw',
        name: 'gawgwa',
        type: 'geo'
    }
])

const contacts = ref<Contact[]>(rawContacts.value
    .map(contact => new Contact(contact))
)
</script>

<template>
    <slot :contacts="contacts"></slot>
</template>
