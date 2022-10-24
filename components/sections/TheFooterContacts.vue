<template>
    <address :class="$style.contacts">
        <the-footer-contacts-provider #="{ contacts }">
            <ul :class="$style.contacts__list">
                <li
                    v-for="(contact, index) in contacts"
                    :key="index"
                >
                    <the-footer-contact :name="contact.name" :link="contact.link">
                        {{ contact.label }}
                    </the-footer-contact>
                </li>
            </ul>
        </the-footer-contacts-provider>
    </address>
</template>

<style module lang="scss">
.contacts {
    &__list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        padding: 0;

        list-style: none;
    }
}
</style>
