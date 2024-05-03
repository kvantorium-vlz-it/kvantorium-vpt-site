<template>
    <div
        style="
            margin-inline: 1rem;
            background-color: red;
        "
    >

        <div
            style="
                font-family: BankGothic;
                font-size: 72px;
            "
        >
            Новости
        </div>

        <div
            class="list"
        >
            <div
                style="
                    background-color: green;
                    aspect-ratio: 1;
                    border-radius: 1rem;
                    padding: 1rem;
                "
                v-for="i in 7"
            >
                <div
                    style="
                        font-family: BankGothic;
                        font-size: 36px;
                    "
                >
                    Профессия будущего
                </div>

                <div
                    style="
                        font-family: Circe;
                        font-size: 14px;
                    "
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam corporis repellendus id suscipit aperiam dolor rem, saepe fugit quia tenetur!
                </div>

                <div
                    style="
                        display: flex;
                        flex-wrap: wrap;
                        gap: 4px;
                    "
                >
                    <div
                        v-for="i in 3"
                        style="
                            border: 1px solid black;
                            border-radius: 100vw;
                            padding: 2px 8px;
                            font-size: 12px;
                        "
                    >
                        каникулыспользой
                    </div>
                </div>
            </div>
        </div>

        <div class="list1" style="margin-top: 2rem;">
            <div
                style="
                    background-color: green;
                    aspect-ratio: 1;
                    border-radius: 1rem;
                    padding: 1rem;
                "
                v-for="i in 7"
            >
                <div
                    style="
                        font-family: BankGothic;
                        font-size: 36px;
                    "
                >
                    Промдизайн-квантум
                </div>

                <ol
                    style="
                        font-family: Circe;
                        font-size: 14px;
                    "
                >
                    <li>
                        Разработка под микроконтроллеры
                    </li>
                    <li>
                        Разработка веб-сайтов
                    </li>
                    <li>
                        Разработка мобильных приложений
                    </li>
                </ol>

                <div
                    style="
                        display: flex;
                        flex-wrap: wrap;
                        gap: 4px;
                    "
                >
                    <div
                        style="
                            border: 1px solid black;
                            border-radius: 100vw;
                            padding: 2px 8px;
                            font-size: 12px;
                        "
                    >
                        Возрастная категория: 12+
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
}
.list1,
.list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
}

@media (min-width: 768px) {
    .list {
        grid-template-columns: repeat(2, 1fr);
    }
    .list1 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .list {
        grid-template-columns: repeat(3, 1fr);
    }
    .list1 {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1280px) {
    .list {
        grid-template-columns: repeat(4, 1fr);
    }
    .list1 {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
