<template>
    <address>
        <the-footer-contacts-provider #="{ contacts }">
            <the-footer-section-list>
                <li
                    v-for="(contact, index) in contacts"
                    :key="index"
                >
                    <the-footer-contact :name="contact.name" :link="contact.link">
                        {{ contact.label }}
                    </the-footer-contact>
                </li>
            </the-footer-section-list>
        </the-footer-contacts-provider>
    </address>
</template>
