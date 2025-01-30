<template>
    <ShCard class="">
        <ShCardHeader>
            <ShCardTitle class="font-display text-center text-3xl">
                <slot name="title"></slot>
            </ShCardTitle>
        </ShCardHeader>
        <ShCardContent>
            <slot></slot>
        </ShCardContent>
    </ShCard>
</template>
