<template>
    <div>
        <TheHero />

        <NewsListProvider #="{ news }" :count="6">
            <NewsSection :news="news || []" />
        </NewsListProvider>

        <KvantumListProvider #="{ kvantums }">
            <TheKvantumsSection :kvantums="kvantums" />
        </KvantumListProvider>

        <TheMapSection />
    </div>
</template>
