<template>
    <TheKvantumsSectionCard :class="$style.card">
        <template #header>
            <Icon size="2.5rem" name="solar:course-up-broken" />
        </template>

        <span :class="$style.text">
            Волжский кванториум предлагает множество различных направлений подготовки, которые помогут раскрыть способности ребенка
        </span>
    </TheKvantumsSectionCard>
</template>

<style module>
.card {
    background-image: linear-gradient(
        to bottom,
        var(--c-site-primary-lighter-1),
        var(--c-site-primary-darker-1)
    );
    color: var(--c-site-background);
}
.text {
    font-size: 0.875rem;
    line-height: 1.4;
    font-family: 'Circe';
    font-weight: 300;
}
</style>
