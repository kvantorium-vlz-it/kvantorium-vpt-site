<template>
    <main>
        <the-hero />
        <page-section>
            <page-section-content>
                <template #heading>
                    Квантумы
                </template>
                <template #subheading>
                    Программы Кванториума предназначены для школьников с 5 по 11 класс
                </template>
                <kvantums-cards-provider #="{ cards }">
                    <kvantums-cards-carousel :kvantums="cards" />
                </kvantums-cards-provider>
            </page-section-content>
        </page-section>
    </main>
</template>
