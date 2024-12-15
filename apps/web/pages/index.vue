<template>
    <div>
        <TheHero />

        <NewsListProvider #="{ news }">
            <NewsSection :news="news || []" />
        </NewsListProvider>

        <KvantumsProvider #="{ kvantums }">
            <TheKvantumsSection :kvantums="kvantums" />
        </KvantumsProvider>

        <TheMapSection />
    </div>
</template>
