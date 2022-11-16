<script setup lang="ts">
const isShowDrawer = ref(false)

const toggleShowDrawer = () => {
    isShowDrawer.value = !isShowDrawer.value
}

const closeDrawer = () => {
    isShowDrawer.value = false
}

const navigationItems = [
    { items: [{ label: 'gjikawgwa' }, { label: 'jgnkwag' }], name: 'gnmka,vwa' },
    { label: 'mkbvavbwa', to: '/' },
]
</script>

<template>
    <div :class="$style.b">
        <PageSection as="main">
            <PageSectionDefaultLayout>
                <template #heading>
                    Lorem ipsum dolor sit.
                </template>
                <template #subheading>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus, repellendus voluptatem velit voluptatum hic cum sapiente ab blanditiis doloribus.
                </template>
                <div :class="$style.a">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, impedit.
                    <KvantoriumLogo style="color: green;" />
                    <BaseButton>
                        Lorem, ipsum.
                    </BaseButton>
                    <BaseButton variant="light">
                        Lorem, ipsum.
                    </BaseButton>
                    <HideableText :allowed-length="50" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus culpa voluptas voluptate possimus. Dolores fuga sint quis ipsa vero sed, iure deleniti natus aliquid sit dicta totam velit explicabo cumque!" />

                    <NavigationItem to="/">
                        Lorem, ipsum.
                    </NavigationItem>
                    <NavigationGroup name="jmgiwakgwa"
                        :items="[
                            { label: 'gkwagwa' },
                            { label: 'gamwekbaw' }
                        ]"
                    />
                    <NavigationGroup
                        name="jmgiwakgwa"
                        :items="[
                            { label: 'gkwagwa' },
                            { label: 'gamwekbaw', to: '/' }
                        ]"
                        :absolute="true"
                    />
                    <KvantoriumAdvantage
                        :advantage="{
                            description: 'Детям доступно самое современное и высокотехнологичное профессиональное оборудование, которое позволяет решать широкий спектр задач: от проектирования 3D-моделей до создания настоящих прототипов своих изобретений. Дизайн каждого помещения',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbOC4XXrHYPUwVz-WpDswN4f1JGttUCZ5zQHbNnku&s',
                            title: 'Почувствовать себя в роли настоящего ученого',
                        }"
                    />
                    <KvantumCard
                        :kvantum="{
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbOC4XXrHYPUwVz-WpDswN4f1JGttUCZ5zQHbNnku&s',
                            name: 'Lorem ipsum dolor',
                        }"
                    />
                    <NavigationBar
                        :items="navigationItems"
                    />

                    <div style="display: flex; justify-content: flex-end;">
                        <BaseButton @click="toggleShowDrawer">
                            toggle drawer
                        </BaseButton>
                    </div>

                    <NavigationDrawer
                        ref="drawer"
                        :items="navigationItems"
                        :is-open="isShowDrawer"
                        @click-outside="closeDrawer"
                        @slide-left="closeDrawer"
                    />
                </div>
                <KvantumCardsSwiper
                    :kvantums="[
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
                    ]"
                />
            </PageSectionDefaultLayout>
        </PageSection>
    </div>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.b {
    overflow-x: clip;
}

.a {
    @include from-breakpoint(desktop) {
        color: red;
    }

    background-color: rgb(129, 179, 129);

    @include typo(body-1-bold);
}
</style>
