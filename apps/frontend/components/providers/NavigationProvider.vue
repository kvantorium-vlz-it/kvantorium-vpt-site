<script setup lang="ts">
interface IItem {
    label: string
    to?: string
}

interface IGroup {
    name: string
    items: IItem[]
}

const items: (IItem | IGroup)[] = [
    { label: 'hgiawohgwa', to: '/' },
    {
        name: 'jgkawgaw',
        items: [ { label: 'jvbkaw' }, { label: 'nbmnwaj' } ]
    },
    { label: 'nbjkabnwja' }
]
</script>

<template>
    <slot :items="items"></slot>
</template>
