<script setup lang="ts">
const navigation = [
    { label: 'Ссылка 3' },
    { label: 'Ссылка 4', iconName: 'ph:anchor-simple-light' },
    {
        label: 'О нас',
        items: [
            { label: 'Ссылка 1' },
            { label: 'Ссылка 2', iconName: 'ph:bus-light' },
            { label: 'Ссылка 6' },
            { label: 'Ссылка 7', items: [ { label: 'Ссылка 8' } ] },
        ]
    },
    { label: 'Ссылка 5' },
]

const progress = ref(0)

const isClicked = ref(false)
</script>

<template>
    <div>
        <KHeader
            variant="white"
            :navigation="navigation"
        />

        <div style="background-color: green;">
            <KHeader
                :navigation="navigation"
            />
        </div>

        <div style="background-color: blue;">
            <KHeader
                :navigation="navigation"
                :variant="isClicked ? 'white' : 'blank'"
            />
        </div>

        <button @click="() => isClicked = !isClicked">
            change last header variant
        </button>

        <div style="background-color: red; padding: 1rem;">
            <KLinkButton to="https://google.com" target="_blank">
                Lorem, ipsum.
            </KLinkButton>
            <KLinkButton variant="secondary" target="_blank">
                Lorem, ipsum.
            </KLinkButton>
            <KLinkButton to="https://google.com" variant="white" target="_blank">
                Lorem, ipsum.
            </KLinkButton>
        </div>

        <div style="background-color: red; padding: 1rem; display: flex; align-items: center;">
            <KLink to="https://google.com">
                Lorem, ipsum.
            </KLink>
            <KLink variant="dark">
                <Icon name="ph:arrow-up-right" />
                Lorem, ipsum.
                <Icon name="ph:caret-down" />
            </KLink>
        </div>

        <div style="background-color: red; padding: 1rem;">
            <KFlyOutMenu label="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illum consequatur, beatae asperiores enim inventore rem pariatur mollitia. Corporis eius quis dicta impedit voluptatem reprehenderit error laborum accusantium blanditiis pariatur velit magni quia ipsum sed doloremque magnam sapiente debitis, labore eos officia ducimus vel, porro quas? Ipsam, nisi suscipit ut reprehenderit excepturi, voluptatibus rem iste quisquam nulla nihil minus assumenda maiores culpa, officia unde commodi. Veritatis optio eligendi natus modi! Recusandae voluptates tempora aliquam explicabo nobis sequi nostrum labore odit saepe accusantium quam nemo dolorum, similique, culpa, nihil veniam atque ea nulla minus perspiciatis dignissimos. Hic porro aliquid qui ipsum!
            </KFlyOutMenu>
            <KFlyOutMenu label="lorem" variant="dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illum consequatur, beatae asperiores enim inventore rem pariatur mollitia. Corporis eius quis dicta impedit voluptatem reprehenderit error laborum accusantium blanditiis pariatur velit magni quia ipsum sed doloremque magnam sapiente debitis, labore eos officia ducimus vel, porro quas? Ipsam, nisi suscipit ut reprehenderit excepturi, voluptatibus rem iste quisquam nulla nihil minus assumenda maiores culpa, officia unde commodi. Veritatis optio eligendi natus modi! Recusandae voluptates tempora aliquam explicabo nobis sequi nostrum labore odit saepe accusantium quam nemo dolorum, similique, culpa, nihil veniam atque ea nulla minus perspiciatis dignissimos. Hic porro aliquid qui ipsum!
            </KFlyOutMenu>
        </div>
            <KFlyOutMenu label="lorem" variant="dark">
                <ul>
                    <li v-for="i in 7" :key="i">
                        <KLink variant="dark">
                            Lorem, ipsum.
                        </KLink>
                    </li>

                    <li>
                        <KFlyOutMenu label="Lorem ipsum dolor sit" variant="dark">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit!
                        </KFlyOutMenu>
                    </li>
                </ul>
            </KFlyOutMenu>

        <div style="background-color: red; padding: 1rem;">
            <KCircleIcon style="--width: 6rem; --padding: 2rem;" iconName="fa-brands:telegram-plane" />
            <KCircleIcon iconName="fa-brands:telegram-plane" color="green" />
        </div>

        <div style="font-family: 'BankGothic';">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, accusantium?
        </div>

        <KContainer>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed accusamus aliquid voluptatem tenetur rem harum ipsa rerum suscipit consequuntur. Sed dolores autem sit nostrum possimus odio aperiam nam temporibus, quisquam aliquam nobis magnam veniam facilis in doloremque, alias architecto. Magnam reprehenderit quod, exercitationem nostrum itaque soluta quasi maiores labore nam nobis fugiat consequuntur sequi voluptatibus non provident dolor minus repellat. Consequuntur eveniet aspernatur, laborum corrupti rerum odit dolorum harum nobis. Suscipit ad ullam voluptatum esse, nisi expedita nemo consequuntur rerum magnam consequatur veniam rem, molestias officiis omnis provident. Deserunt, eum praesentium. Dignissimos, sint laudantium minima perferendis sed rem tempora. Perferendis architecto aliquid deserunt dolorum nulla provident ab culpa illum natus eius voluptate quisquam, iste quae repudiandae. Corporis commodi eveniet magnam illo. Deleniti voluptatum unde veritatis! Sapiente quam reiciendis nemo doloribus reprehenderit voluptatem consequuntur ipsam molestiae itaque fuga voluptatum accusamus saepe iure, exercitationem maiores sit magni laudantium molestias quasi, nesciunt aliquid dolorum numquam. Provident neque et culpa quos eos voluptatibus repellendus modi a vero blanditiis sit, placeat nulla accusamus aliquam, cupiditate voluptas, quam itaque similique minus! Eum enim illo id, optio facilis veritatis quia quibusdam vel deserunt velit dolores tempore voluptatibus sequi iure laudantium minima incidunt voluptas cumque neque ipsam alias inventore ut? Quia neque, alias eaque veniam perferendis iste labore ut ipsum, voluptatum, distinctio recusandae numquam libero aperiam laboriosam tempore? Fuga perspiciatis ratione harum animi eaque cumque accusamus tempora suscipit eius. Accusantium sapiente distinctio cupiditate sunt similique, impedit repellat minus doloremque neque voluptatem nam qui quibusdam aliquam tempora vero cum perferendis laboriosam deserunt facilis consequatur, quis magni officiis quidem. Quibusdam esse culpa, doloribus numquam sequi hic, cum cumque natus accusamus minima necessitatibus molestiae ratione nostrum illo ducimus nisi. Perspiciatis perferendis quia totam, harum, quas, dicta minus quaerat porro in placeat maiores ipsum saepe illo repudiandae! Ipsum, veniam. Iste, maiores quos.
        </KContainer>
        <KContainer is-full-width>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed accusamus aliquid voluptatem tenetur rem harum ipsa rerum suscipit consequuntur. Sed dolores autem sit nostrum possimus odio aperiam nam temporibus, quisquam aliquam nobis magnam veniam facilis in doloremque, alias architecto. Magnam reprehenderit quod, exercitationem nostrum itaque soluta quasi maiores labore nam nobis fugiat consequuntur sequi voluptatibus non provident dolor minus repellat. Consequuntur eveniet aspernatur, laborum corrupti rerum odit dolorum harum nobis. Suscipit ad ullam voluptatum esse, nisi expedita nemo consequuntur rerum magnam consequatur veniam rem, molestias officiis omnis provident. Deserunt, eum praesentium. Dignissimos, sint laudantium minima perferendis sed rem tempora. Perferendis architecto aliquid deserunt dolorum nulla provident ab culpa illum natus eius voluptate quisquam, iste quae repudiandae. Corporis commodi eveniet magnam illo. Deleniti voluptatum unde veritatis! Sapiente quam reiciendis nemo doloribus reprehenderit voluptatem consequuntur ipsam molestiae itaque fuga voluptatum accusamus saepe iure, exercitationem maiores sit magni laudantium molestias quasi, nesciunt aliquid dolorum numquam. Provident neque et culpa quos eos voluptatibus repellendus modi a vero blanditiis sit, placeat nulla accusamus aliquam, cupiditate voluptas, quam itaque similique minus! Eum enim illo id, optio facilis veritatis quia quibusdam vel deserunt velit dolores tempore voluptatibus sequi iure laudantium minima incidunt voluptas cumque neque ipsam alias inventore ut? Quia neque, alias eaque veniam perferendis iste labore ut ipsum, voluptatum, distinctio recusandae numquam libero aperiam laboriosam tempore? Fuga perspiciatis ratione harum animi eaque cumque accusamus tempora suscipit eius. Accusantium sapiente distinctio cupiditate sunt similique, impedit repellat minus doloremque neque voluptatem nam qui quibusdam aliquam tempora vero cum perferendis laboriosam deserunt facilis consequatur, quis magni officiis quidem. Quibusdam esse culpa, doloribus numquam sequi hic, cum cumque natus accusamus minima necessitatibus molestiae ratione nostrum illo ducimus nisi. Perspiciatis perferendis quia totam, harum, quas, dicta minus quaerat porro in placeat maiores ipsum saepe illo repudiandae! Ipsum, veniam. Iste, maiores quos.
        </KContainer>

        <KContainer>
            <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem;">
                <KAccordion
                    :items="[
                        {
                            label: 'test',
                            content: 'content content content content content content content content content content content content content',
                        },
                        {
                            label: 'slot',
                            content: 'slot content',
                            slot: 'test-slot'
                        }
                    ]"
                >
                    <template #test-slot="{ content }">
                        <div style="padding: 2rem; border: 1px solid black;">
                            <hr>
                                {{ content }}
                            <hr>
                        </div>
                    </template>
                </KAccordion>

                <hr>

                <KAccordionItem label="test accordion item test accordion item test accordion item">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda, repellendus rerum omnis illum velit cupiditate officia unde, quam quasi quod totam itaque minima excepturi eveniet ut vel. Impedit maxime temporibus eligendi veritatis provident voluptatum quod a iste quae laudantium.
                </KAccordionItem>
            </div>
        </KContainer>

        <KContainer style="background: red;">
            <div style="padding: 5rem">
                <KBadge>
                    <Icon name="ph:arrow-up-right" />
                    Lorem, ipsum.

                    <Icon name="ph:arrow-up-right" />
                </KBadge>
            </div>
        </KContainer>

        <KSection heading="section 1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptate maiores consectetur ipsum excepturi dolore, similique rem a officia quisquam, adipisci vero voluptatum quo. Eius sit, eveniet quod nam mollitia dolorum provident quae voluptates repellat itaque quia architecto delectus assumenda consequatur nemo laborum ullam magni, autem quam debitis labore ea! Recusandae maxime temporibus impedit omnis. Reiciendis quos necessitatibus eos ipsum iusto quia quis atque at perspiciatis dolore provident, consequatur quisquam, maiores ex? Sunt, nostrum recusandae laborum soluta accusantium porro sequi est quod, suscipit nam veniam! Cumque officia tempora quidem illo amet. Facilis maxime minus cum sapiente repellat corporis ipsa suscipit.
        </KSection>

        <KContainer>
            <KSection heading="section 2">
                <KNavigation variant="dark" heading="heading" :items="navigation" />
                <KNavigation variant="dark" heading="heading" direction="vertical" :items="navigation" />
                <KNavigation
                    variant="dark"
                    heading="heading"
                    direction="vertical"
                    :items="navigation"
                >
                    <template
                        #links-group="{ items, variant }"
                    >
                        <KNavigation
                            direction="horizontal"
                            :items="items"
                            :variant="variant"
                            heading="submenu"
                        />
                        <ul>
                            <li
                                v-for="item in items"
                            >
                                {{ item.label }}
                            </li>
                        </ul>
                    </template>
                    <template #link="{ link }">
                        <a href="">
                            {{ link.label }}|Lorem.
                        </a>
                    </template>
                </KNavigation>
            </KSection>
        </KContainer>

        <KContainer is-full-width>
            <KSection>
                <template #heading>
                    <Icon name="ph:arrow-arc-left" /> Lorem, ipsum.
                </template>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptate maiores consectetur ipsum excepturi dolore, similique rem a officia quisquam, adipisci vero voluptatum quo. Eius sit, eveniet quod nam mollitia dolorum provident quae voluptates repellat itaque quia architecto delectus assumenda consequatur nemo laborum ullam magni, autem quam debitis labore ea! Recusandae maxime temporibus impedit omnis. Reiciendis quos necessitatibus eos ipsum iusto quia quis atque at perspiciatis dolore provident, consequatur quisquam, maiores ex? Sunt, nostrum recusandae laborum soluta accusantium porro sequi est quod, suscipit nam veniam! Cumque officia tempora quidem illo amet. Facilis maxime minus cum sapiente repellat corporis ipsa suscipit.
            </KSection>
        </KContainer>

        <div style="background-color: green;">
            <hr>
            <KFooter>
                <template #column-1>
                    <div>
                        <KCircleIcon
                            icon-name="KLogo"
                            style="--width: 3rem; --padding: 0.75rem;"
                        />

                        <div>
                            детский технопарк "кванториум "волжский политех"
                        </div>
                    </div>

                    <div>
                        Детский технопарк «Кванториум» - это новая форма дополнительного образования, которая реализует научно-технический интерес детей. Это место интеллектуальной смелости и комфортные условия формирования изобретательского мышления.
                    </div>

                    <KLinkButton variant="white" style="width: 100%">
                        Записаться
                    </KLinkButton>
                </template>
                <template #column-3>
                    <KNavigation
                        heading="Навигация"
                        :items="[
                            { label: 'Главная', iconName: 'ph:arrow-up-right' },
                            { label: 'О нас', iconName: 'ph:arrow-up-right' },
                            { label: 'Новости', iconName: 'ph:arrow-up-right' },
                            { label: 'Направления', iconName: 'ph:arrow-up-right' },
                        ]"
                        direction="vertical"
                        variant="light"
                    />
                    <KNavigation
                        heading="Социальные сети"
                        :items="[
                            { label: 'telegram', iconName: 'ic:baseline-telegram' },
                            { label: 'vk', iconName: 'ri:vk-fill' },
                            { label: 'ok', iconName: 'brandico:odnoklassniki-rect' },
                        ]"
                        variant="light"
                    >
                        <template #link="{ link }">
                            <KCircleIcon
                                :icon-name="link.iconName"
                                :color="link.label === 'telegram' ? '#30A3E6' : link.label === 'vk' ? '#0077FF' : '#FF7700'"
                            />
                        </template>
                    </KNavigation>
                </template>
                <template #column-4>
                    <KNavigation
                        heading="Кванториум"
                        :items="[
                            {
                                label: 'kvantoriumvlz@volpt.com',
                                iconName: 'mingcute:mail-fill',
                                to: 'mailto:kvantoriumvlz@volpt.com',
                            },
                            {
                                label: '8(902)383-50-24',
                                iconName: 'ic:baseline-phone',
                                to: 'tel:89023835024',
                            },
                            {
                                label: 'Волжский ул. Машиностроителей, 15, 404121',
                                iconName: 'bi:geo-alt-fill',
                                to: 'geo:48.786934,44.772160',
                            }
                        ]"
                        direction="vertical"
                        variant="light"
                    />

                    <KNavigation
                        heading="Кванториум"
                        :items="[
                            {
                                label: 'volpt@volganet.ru',
                                iconName: 'mingcute:mail-fill',
                                to: 'mailto:volpt@volganet.ru',
                            },
                            {
                                label: 'volpt.ru',
                                iconName: 'mdi:web',
                                to: 'https://volpt.ru/',
                            },
                        ]"
                        direction="vertical"
                        variant="light"
                    />
                </template>

                <template #bottom>
                    <div>
                        детский технопарк “кванториум “волжский политех”
                        <br>
                        {{ new Date().getFullYear() }}
                    </div>
                </template>
            </KFooter>
            <hr>
        </div>

        <div is="span">
            Lorem, ipsum.
        </div>

        <div style="display: flex; gap: 0.5rem; --columns: 6; --gap: 0.5rem; position: relative;">
            <div style="flex-grow: 0; flex-shrink: 0; flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns))); aspect-ratio: 1;">
                Lorem, ipsum.
            </div>
            <KSwiper
                :visible-slides-count="6"
                :items="[
                    {
                        label: 'slide 1',
                        image: 'data:image/jpeg;base64,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',
                    },
                    {
                        label: 'slide 2',
                        image: 'data:image/jpeg;base64,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',
                    },
                    {
                        label: 'slide 3',
                        image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
                    },
                    {
                        label: 'slide 4',
                        image: 'data:image/jpeg;base64,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',
                    },
                    {
                        label: 'slide 5',
                        image: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
                    },
                    {
                        label: 'slide 6',
                        image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
                    },
                    {
                        label: 'slide 7',
                        image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D',
                    },
                    {
                        label: 'slide 8',
                        image: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400',
                    },
                ]"
            >
                <template #slide="{ item }">
                    <div
                        :style="`
                            background-image: url(${item.image});
                            aspect-ratio: 1;
                            background-position: center center;
                            background-size: cover;
                            color: var(--c-site-background);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 2rem;
                        `"
                    >
                        <h3>
                            {{ item.label }}
                        </h3>
                    </div>
                </template>

                <template #navigation="{ slideToNextSlide, slideToPreviousSlide }">
                    <div style="position: absolute; left: 50%; transform: translate(-50%);">
                        <button @click="slideToPreviousSlide">
                            prev
                        </button>
                        <button @click="slideToNextSlide">
                            next
                        </button>
                    </div>
                </template>
            </KSwiper>
        </div>

        <!-- <KSwiper
                :visible-slides-count="2"
                :items="[
                    {
                        label: 'slide 1',
                        image: 'data:image/jpeg;base64,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',
                    },
                    {
                        label: 'slide 2',
                        image: 'data:image/jpeg;base64,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',
                    },
                    {
                        label: 'slide 3',
                        image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
                    },
                    {
                        label: 'slide 4',
                        image: 'data:image/jpeg;base64,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',
                    },
                    {
                        label: 'slide 5',
                        image: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
                    },
                    {
                        label: 'slide 6',
                        image: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
                    },
                    {
                        label: 'slide 7',
                        image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D',
                    },
                    {
                        label: 'slide 8',
                        image: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400',
                    },
                ]"
            >
                <template #slide="{ item }">
                    <div
                        :style="`
                            background-image: url(${item.image});
                            background-position: center center;
                            background-size: cover;
                            color: var(--c-site-background);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 2rem;
                            padding: var(--gap);
                        `"
                    >
                        <h3>
                            {{ item.label }}
                        </h3>
                    </div>
                </template>

                <template #navigation>
                    <div style="position: absolute;">
                        Lorem, ipsum.
                    </div>
                </template>
            </KSwiper> -->
        <!-- <div :style="{
            display: 'flex',
            '--gap': '0.5rem',
            '--columns': 6,
            '--scrollable-columns': 4,
            gap: 'var(--gap)',
        }">
            <div
                :style="{
                    aspectRatio: 1,
                    background: 'green',
                    flexShrink: 0,
                    flexGrow: 0,
                    flexBasis: 'calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)))',
                }"
            >
            </div>
            <div
                :style="{
                    display: 'flex',
                    gap: 'var(--gap)',
                    overflow: 'auto',
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: 'calc((var(--scrollable-columns) * 100% / var(--columns)) - var(--gap) + (var(--scrollable-columns) * var(--gap) / var(--columns)))',
                    scrollSnapType: 'x mandatory',
                }"
                :class="$style.a"
            >
                <div
                    v-for="i in 8"
                    :style="{
                        aspectRatio: 1,
                        background: 'red',
                        flexShrink: 0,
                        flexGrow: 0,
                        scrollSnapAlign: 'start',
                        flexBasis: 'calc((100% / var(--scrollable-columns)) - var(--gap) + (var(--gap) / var(--scrollable-columns)))',
                    }"
                >
                    {{ i }}
                </div>
            </div>
            <div
                :style="{
                    aspectRatio: 1,
                    background: 'green',
                    flexShrink: 0,
                    flexGrow: 0,
                    flexBasis: 'calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)))',
                }"
            ></div>
        </div> -->

        <KProgress
            :value="progress"
            :max="6"
        />

        <button @click="() => progress = Math.min(progress + 1, 6)">
            add progress
        </button>
        <button @click="() => progress = Math.max(progress - 1, 0)">
            remove progress
        </button>

        <div style="height: 50vh;"></div>
    </div>
</template>

<style module>
.a::-webkit-scrollbar {
    display: none;
}
</style>
