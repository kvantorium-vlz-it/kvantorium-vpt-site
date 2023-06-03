<template>
    <section id="#hero" class="bg-[url(/images/hero-fullshot.webp)] bg-no-repeat bg-cover bg-bottom">
        <Container
            class="py-28 grid grid-cols-2 gap-y-12 gap-x-12"
        >
            <div class="text-[36px] font-semibold text-white">
                Кванториум - современное учреждение дополнительного оборазования, оснащённое высокотехнологичным оборудованием
            </div>

            <div class="justify-self-end self-center">
                <BaseButton variant="yellow">
                    Демонстрационные занятия июнь 2023
                    <Icon
                        name="tabler:chevron-down"
                        class="w-10 h-10"
                    />
                </BaseButton>
            </div>

            <div class="flex gap-8">
                <BaseButton>
                    Записаться на занятия
                </BaseButton>
                <BaseButton>
                    Узнать больше
                </BaseButton>
            </div>
        </Container>
    </section>
</template>
