<template>
    <div>
        <TheHero />
        <NewsSection />

        <KvantumsProvider #="{ kvantums }">
            <TheKvantumsSection :kvantums="kvantums" />
        </KvantumsProvider>

        <TheMapSection />
    </div>
</template>
