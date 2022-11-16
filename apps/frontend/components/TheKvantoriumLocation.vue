<template>
    <PageSection>
        <PageSectionDefaultLayout>
            <template #heading>
                Как нас найти
            </template>
            <div :class="$style.location">
                <address :class="$style.location__address">
                    <p :class="$style.location__title">
                        Адрес:
                    </p>
                    <a
                        href="geo:48.786934,44.772160"
                        :class="$style.location__link"
                    >
                        ул. Машиностроителей, 15 404121, г. Волжский, Волгоградская обл., Россия
                    </a>
                </address>
                <KvantoriumLocationMap />
            </div>
        </PageSectionDefaultLayout>
    </PageSection>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.location {
    display: grid;
    grid-template-columns: auto 60%;
    grid-template-rows: rem(280px);

    gap: rem(16px);

    &__address {
        color: rgb(var(--c-secondary-700));
        border-left: rem(8px) solid rgb(var(--c-secondary-700));
        padding-left: rem(8px);

        height: fit-content;

        font-style: normal;
    }

    &__title {
        margin: 0;
        margin-bottom: rem(8px);

        color: inherit;

        @include typo(body-1-normal);
    }
    &__link {
        color: inherit;
        margin: 0;
        @include typo(body-2-normal);
    }
}
</style>
