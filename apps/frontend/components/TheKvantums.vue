<script setup lang="ts">
interface IKvantum {
    name: string
    description: string
    image: string
    to?: string
}

const kvantums: IKvantum[] = [
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbOC4XXrHYPUwVz-WpDswN4f1JGttUCZ5zQHbNnku&s',
        name: 'Slide 1',
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbOC4XXrHYPUwVz-WpDswN4f1JGttUCZ5zQHbNnku&s',
        name: 'Slide 2',
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbOC4XXrHYPUwVz-WpDswN4f1JGttUCZ5zQHbNnku&s',
        name: 'Slide 3',
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbOC4XXrHYPUwVz-WpDswN4f1JGttUCZ5zQHbNnku&s',
        name: 'Slide 4',
    }
]
</script>

<template>
    <PageSection>
        <PageSectionDefaultLayout>
            <template #heading>
                Квантумы
            </template>
            <template #subheading>
                Программы Кванториума предназначены для школьников с 5 по 11 класс
            </template>
            <KvantumCardsSwiper
                :kvantums="kvantums"
            />
        </PageSectionDefaultLayout>
    </PageSection>
</template>
