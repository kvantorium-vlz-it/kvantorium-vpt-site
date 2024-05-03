<template>
    <KGrid>
        <!-- <KGridCell :width="6">
            <KBaseTypography
                font-size="h00"
                font-family="BankGothic"
                :font-weight="700"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        H00
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                font-size="h0"
                font-family="BankGothic"
                :font-weight="700"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        H0
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                font-size="h1"
                font-family="BankGothic"
                :font-weight="700"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        H1
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                font-size="h2"
                font-family="BankGothic"
                :font-weight="700"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        H2
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                font-size="h3"
                font-family="BankGothic"
                :font-weight="700"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        H3
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                font-size="h4"
                font-family="BankGothic"
                :font-weight="700"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        H4
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                font-size="h5"
                font-family="BankGothic"
                :font-weight="700"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        H5
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                font-size="h6"
                font-family="BankGothic"
                :font-weight="700"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        H6
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                font-size="body"
                font-family="Circe"
                :font-weight="400"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Body
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                font-size="body-small"
                font-family="Circe"
                :font-weight="400"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Body small
                        <br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, doloremque.
                    </div>
                </template>
            </KBaseTypography>
        </KGridCell>
        <KGridCell :width="6">
            <div style="font-size: 72px; font-family: 'BankGothic'; font-weight: 700;">
                H1
                <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquam!
            </div>

            <hr>

            <div style="font-size: 36px; font-family: 'BankGothic'; font-weight: 700;">
                H2
                <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquam!
            </div>

            <hr>

            <div style="font-size: 28px; font-family: 'BankGothic'; font-weight: 700;">
                H3
                <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquam!
            </div>

            <hr>

            <div style="font-size: 20px; font-family: 'BankGothic'; font-weight: 700;">
                H4
                <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquam!
            </div>

            <hr>

            <div style="font-size: 16px; font-family: 'BankGothic'; font-weight: 700;">
                H5
                <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquam!
            </div>

            <hr>

            <div style="font-size: 14px; font-family: 'BankGothic'; font-weight: 700;">
                H6
                <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquam!
            </div>

            <hr>

            <div style="font-size: 16px; font-family: 'Circe'; font-weight: 400;">
                Body
                <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquam!
            </div>

            <hr>

            <div style="font-size: 14px; font-family: 'Circe'; font-weight: 400;">
                Subtitle
                <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquam!
            </div>
        </KGridCell> -->

        <KGridCell :width="12">
            <KBaseTypography
                variant="display-1"
                is-italic
                #="{ classes }"
            >
                <div :class="classes">
                    Display 1
                    <br>
                    Любишь играть шрифтами - люби и дизайнера кормить ы
                </div>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="display-2"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Display 2
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="display-3"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Display 3
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="heading-1"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Heading 1
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="heading-2"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Heading 2
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="heading-3"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Heading 3
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="heading-4"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Heading 4
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="heading-5"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Heading 5
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="heading-6"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Heading 6
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="body-1"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Body 1
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                        <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quidem eos ex neque, labore praesentium explicabo atque vitae pariatur distinctio esse nam. Dolorum officiis aperiam ad incidunt consequuntur mollitia! Deserunt earum inventore temporibus vitae quia error adipisci sed eum labore beatae dolore iure aut, impedit eligendi optio iste voluptatem, veritatis nesciunt. Inventore reiciendis esse in! Cum at quos praesentium quo recusandae nam laboriosam pariatur, temporibus optio iusto aut libero architecto perferendis fuga error iste ad nemo facilis, quae animi odio ipsa dolore. Sit similique commodi saepe? Optio libero voluptate blanditiis quod voluptates corporis amet totam, quas culpa dignissimos voluptatem fuga!
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="body-2"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Body 2
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                        <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quidem eos ex neque, labore praesentium explicabo atque vitae pariatur distinctio esse nam. Dolorum officiis aperiam ad incidunt consequuntur mollitia! Deserunt earum inventore temporibus vitae quia error adipisci sed eum labore beatae dolore iure aut, impedit eligendi optio iste voluptatem, veritatis nesciunt. Inventore reiciendis esse in! Cum at quos praesentium quo recusandae nam laboriosam pariatur, temporibus optio iusto aut libero architecto perferendis fuga error iste ad nemo facilis, quae animi odio ipsa dolore. Sit similique commodi saepe? Optio libero voluptate blanditiis quod voluptates corporis amet totam, quas culpa dignissimos voluptatem fuga!
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="body-3"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Body 3
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                        <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quidem eos ex neque, labore praesentium explicabo atque vitae pariatur distinctio esse nam. Dolorum officiis aperiam ad incidunt consequuntur mollitia! Deserunt earum inventore temporibus vitae quia error adipisci sed eum labore beatae dolore iure aut, impedit eligendi optio iste voluptatem, veritatis nesciunt. Inventore reiciendis esse in! Cum at quos praesentium quo recusandae nam laboriosam pariatur, temporibus optio iusto aut libero architecto perferendis fuga error iste ad nemo facilis, quae animi odio ipsa dolore. Sit similique commodi saepe? Optio libero voluptate blanditiis quod voluptates corporis amet totam, quas culpa dignissimos voluptatem fuga!
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="label-1"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Label 1
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>

            <hr>

            <KBaseTypography
                variant="label-2"
            >
                <template #="{ classes }">
                    <div :class="classes">
                        Label 2
                        <br>
                        Любишь играть шрифтами - люби и дизайнера кормить
                    </div>
                </template>
            </KBaseTypography>
        </KGridCell>
    </KGrid>
</template>
