<template>
    <div>
        <TheHero />
        <TheInfo :class="$style.info" />
        <TheKvantumsSection />
        <TheFAQSection :class="$style.faq" />
        <TheMapSection :class="$style.map" />
    </div>
</template>

<style module>
.info {
    margin-bottom: 4rem;
}
.faq {
    margin-top: 4rem;
}
.map {
    margin-top: 4rem;
}
</style>
