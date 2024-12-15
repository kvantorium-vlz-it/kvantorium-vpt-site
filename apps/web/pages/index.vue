<template>
    <div>
        <TheHero />

        <NewsListProvider #="{ news }">
            <NewsSection :news="news || []" />
        </NewsListProvider>

        <KvantumListProvider #="{ kvantums }">
            <TheKvantumsSection :kvantums="kvantums" />
        </KvantumListProvider>

        <TheMapSection />
    </div>
</template>
