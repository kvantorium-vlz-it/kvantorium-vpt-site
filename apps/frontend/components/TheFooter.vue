<template>
    <Section heading="Где нас найти" id="footer">
        <div class="grid grid-cols-3 gap-[10px] mb-[50px]">
            <FooterSocialLink
                icon="ic:baseline-telegram"
                href="https://t.me/kvantoriumvlz34"
                label="Наш канал в Telegram"
            />
            <FooterSocialLink
                icon="mdi:vk"
                href="https://vk.com/public195220786"
                label="Наше сообщество во ВКонтакте"
            />
            <FooterSocialLink
                icon="fa6-brands:square-odnoklassniki"
                href="https://ok.ru/group/57811145785374"
                label="Наша группа в Одноклассниках"
            />
        </div>

        <div class="grid grid-cols-4 mb-[20px]">
            <div class="flex flex-col gap-[30px]">
                <FooterInfo
                    title="Почта техникума"
                    label="volpt@volganet.ru"
                    href="mailto:volpt@volganet.ru"
                />
                <FooterInfo
                    title="Сайт техникума"
                    label="volpt.ru"
                    href="https://volpt.ru/"
                />
            </div>
            <div class="flex flex-col gap-[30px]">
                <FooterInfo
                    title="Мы на карте"
                    label="Волжский ул. Машиностроителей, 15 404121"
                    href="geo:48.786934,44.772160"
                />
                <FooterInfo
                    title="Телефон"
                    label="8(902)383-50-24"
                    href="tel:89023835024"
                />
                <FooterInfo
                    title="Почта Кванториума"
                    label="kvantoriumvlz@volpt.com"
                    href="mailto:kvantoriumvlz@volpt.com"
                />
            </div>
            <KvantoriumLocationMap class="col-span-2" id="footer-map" />
        </div>

        <div class="text-center text-[22px] font-bold mb-[20px] aspect-[2] ">
            Кванториум “Волжский политех” {{ new Date().getFullYear() }}
        </div>
    </Section>
</template>
