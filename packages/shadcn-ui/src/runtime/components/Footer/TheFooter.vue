<script setup lang="ts">
import { ArrowUpRightIcon, MailIcon, PhoneIcon, MapPinIcon, GlobeIcon } from 'lucide-vue-next'
</script>

<template>
    <Section>
        <SectionContainer full-width>
            <div class="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-xl p-8">
                <div class="grid grid-cols-1 grid-flow-row lg:grid-cols-4 gap-2">
                    <div>
                        <div class="flex items-center gap-2 mb-4">
                            <div class="bg-white w-20 p-4 rounded-full">
                                <KvantoriumLogo />
                            </div>
                            <span class="font-display leading-none">
                                детский технопарк "кванториум "волжский политех"
                            </span>
                        </div>

                        <div>
                            <div class="text-pretty">
                                Детский технопарк «Кванториум» - это новая форма дополнительного образования, которая реализует научно-технический интерес детей. Это место интеллектуальной смелости и комфортные условия формирования изобретательского мышления.
                            </div>

                            <ShButton variant="ghost" class="w-full mt-2 border-2 border-white">
                                Записаться
                            </ShButton>
                        </div>
                    </div>

                    <div class="lg:col-start-3">
                        <div>
                            <div class="font-display text-2xl">
                                Навигация
                            </div>

                            <div>
                                <div class="flex gap-2 items-center">
                                    <ArrowUpRightIcon :size="16" /> Главная
                                </div>
                                <div class="flex gap-2 items-center">
                                    <ArrowUpRightIcon :size="16" /> О нас
                                </div>
                                <div class="flex gap-2 items-center">
                                    <ArrowUpRightIcon :size="16" /> Новости
                                </div>
                                <div class="flex gap-2 items-center">
                                    <ArrowUpRightIcon :size="16" /> Направления
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-start-4">
                        <div>
                            <div class="font-display text-2xl">
                                Кванториум
                            </div>

                            <div>
                                <div class="flex gap-2 items-center">
                                    <MailIcon :size="16" />
                                    <span>kvantoriumvlz@volpt.com</span>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <MapPinIcon :size="16" />
                                    <span>Волжский ул. Машиностроителей, 15, 404121</span>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <PhoneIcon :size="16" />
                                    <span>8(902)383-50-24</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="font-display text-2xl">
                                Техникум
                            </div>

                            <div>
                                <div class="flex gap-2 items-center">
                                    <MailIcon :size="16" />
                                    <span>volpt@volganet.ru</span>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <GlobeIcon :size="16" />
                                    <span>volpt.ru</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="my-4">

                <div class="text-center">
                    детский технопарк "кванториум "волжский политех"
                    <br>
                    {{ new Date().getFullYear() }}
                </div>
            </div>
        </SectionContainer>
    </Section>
</template>
