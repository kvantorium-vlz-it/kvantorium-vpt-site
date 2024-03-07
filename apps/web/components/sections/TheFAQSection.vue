<template>
    <section>
        <div :class="$style.container">
            <div :class="$style.wrapper">
                <h2 :class="$style.heading">
                    Часто задаваемые вопросы
                </h2>
                <div :class="$style.faq">
                    <ol :class="$style.list">
                        <li
                            v-for="i in 7"
                            :key="i"
                        >
                            <FAQItem
                                question="Lorem ipsum?"
                                answer="Lorem ipsum dolor sit amet consectetur. Proin gravida lectus egestas mattis massa in. Amet consequat praesent purus adipiscing. A eleifend facilisi vel purus consequat placerat semper imperdiet purus. Adipiscing orci."
                            />
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
</template>

<style module>
.faq {
    max-width: 40rem;
    margin-inline: auto;
}
.heading {
    font-size: 2.5rem;
    line-height: 1.3;
    font-family: 'BankGothic';
    text-align: center;
}
.list {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
}
.container {
    padding-inline: var(--site-margin);
    position: relative;
}
.wrapper {
    position: relative;
    padding-top: 3.5rem;
}
.wrapper::before {
    content: "";
    position: absolute;
    inset: 0;
    border-top-right-radius: 5rem;
    margin-left: calc(var(--site-margin) * -1);
    padding-top: 2px;
    padding-right: 2px;
    background:linear-gradient(
        var(--c-site-background-darker-2),
        transparent
    );
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
}
</style>
