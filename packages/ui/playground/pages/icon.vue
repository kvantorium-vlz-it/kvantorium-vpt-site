<template>
    <div>
        <KCircleIcon icon-name="ph:arrow-left" />
        <KCircleIcon :class="$style['hover-icon']" variant="primary" icon-name="ph:arrow-left" />
        <KCircleIcon icon-name="ph:arrow-left" />
        <KCircleIcon icon-name="ph:arrow-left" color="yellow" />
        <KCircleIcon icon-name="ph:arrow-left" variant="primary" />
        <KCircleIcon icon-name="ph:arrow-left" variant="secondary" />
        <KCircleIcon icon-name="ph:arrow-left" variant="white" />
        <KCircleIcon #="{ iconClass }">
            <Icon name="ph:arrow-right" :class="iconClass"/>
        </KCircleIcon>
        <div :class="$style.wrapper">
            <KCircleIcon :class="$style['wrapper-icon']" variant="primary">
                <Icon name="ph:arrow-right" />
            </KCircleIcon>
        </div>
    </div>
</template>

<style module>
.wrapper {
    padding: 1rem;
    border: 1px solid black;
}
.wrapper:hover > .wrapper-icon {
    --background-color: var(--c-site-primary);
    rotate: -45deg;
    --icon-color: var(--c-site-background);
}
.wrapper-icon {
    transition: 0.1s ease-in-out all;
}
.hover-icon {
    transition: 0.1s ease-in-out;
}
.hover-icon:hover {
    --border-color: red;
    --icon-color: red;
    --background-color: blue;
}
</style>
