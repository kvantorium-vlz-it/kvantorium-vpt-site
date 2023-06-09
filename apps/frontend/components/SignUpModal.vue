<script setup lang="ts">
const modal = useModal()

const isOpened = computed(() => modal.isOpened.value)
</script>

<template>
    <dialog
        :open="isOpened"
        @click.self="modal.close"
        class="fixed z-50 top-0 left-0 w-screen h-screen backdrop-blur-sm bg-black bg-opacity-50"
    >
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-7xl p-[40px] rounded-[20px]"
        >
            <h2 class="text-[38px] font-black text-[#3C4580] mb-[35px]">
                Как записаться
            </h2>

            <p class="mb-[35px] text-[30px] font-medium text-[#313340]">
                Чтобы записаться к нам на занятия или иные мероприятия, Вы можете:
            </p>

            <div class="grid grid-cols-2">
                <ul>
                    <li>
                        <SignUpModalInfo
                            icon="material-symbols:call"
                            title="Позвонить администратору"
                            href="tel:+79023835024"
                            label="8(902)383-50-24 Светлана"
                        />
                    </li>
                    <li>
                        <SignUpModalInfo
                            icon="material-symbols:mail"
                            title="Написать нам на почту"
                            href="mailto:kvantoriumvlz@volpt.ru"
                            label="kvantoriumvlz@volpt.ru"
                        />
                    </li>
                    <li>
                        <SignUpModalInfo
                            icon="bi:geo-alt-fill"
                            title="Прийти к нам на ресепшн"
                            href="geo:48.786934,44.772160"
                            label="ул. Машиностроителей, 15"
                        />
                    </li>
                </ul>

                <KvantoriumLocationMap
                    id="modal-map"
                    class="aspect-[2]"
                />
            </div>

            <button
                @click="modal.close"
            >
                <Icon
                    name="material-symbols:close"
                    class=" text-[29px] text-[#313340] absolute top-[30px] right-[60px]"
                />
            </button>
        </div>
    </dialog>
</template>
