
<template>
    <div style="padding: 2rem;">
        <KCollapsibleGroup>
            <KCollapsible>
                <template #trigger>
                    Lorem, ipsum.
                </template>
                Lorem, ipsum.
            </KCollapsible>
            <KCollapsible>
                <template #trigger>
                    Lorem, ipsum.
                </template>
                Lorem, ipsum.
            </KCollapsible>
            <KCollapsible>
                <template #trigger>
                    Lorem, ipsum.
                </template>
                Lorem, ipsum.
            </KCollapsible>
            <KCollapsible>
                <template #trigger>
                    Lorem, ipsum.
                </template>
                Lorem, ipsum.
            </KCollapsible>
        </KCollapsibleGroup>
        <br>
        <KCollapsible
            @close="() => {
                console.log('close');
            }"
            @open="() => {
                console.log('open');
            }"
            @toggle="() => {
                console.log('toggle');
            }"
        >
            <template #trigger>
                Lorem, ipsum.
            </template>
            Lorem, ipsum.
        </KCollapsible>
    </div>
</template>
