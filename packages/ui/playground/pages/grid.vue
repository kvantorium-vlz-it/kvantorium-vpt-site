<template>
    <KGrid is="ul" :class="$style.g1">
        <KGridCell style="background: cadetblue">
            Auto grid
        </KGridCell>
        <KGridCell is="li" v-for="i in 5" style="background: orange">
            Lorem, ipsum.
        </KGridCell>
        <KGridCell :start-column="7" style="background: red;">
            with start
        </KGridCell>
        <KGridCell style="height: 200px; background: palevioletred" :start-column="8" :width="1">
            before break line
        </KGridCell>
        <KGridBreakRow style="background: purple;" />
        <KGridCell style="background: red;">
            after break line
        </KGridCell>
        <KGridCell :start-column="8" :end-column="11" style="background: green;">
            with start and end
        </KGridCell>
        <KGridCell :start-column="2" :width="5" style="background: blue">
            with width
        </KGridCell>
        <KGridCell style="background: brown;" :start-column="12">
            last item before break
        </KGridCell>

        <KGridBreakRow />

        <KGridCell :height="3" style="background: green">
            Column with height
        </KGridCell>
        <KGridCell style="background: turquoise" is="li" v-for="i in 5">
            Lorem, ipsum.
        </KGridCell>
        <KGridBreakRow />
        <KGridBreakRow />
        <KGridCell style="background: pink">
            after break line
        </KGridCell>
        <KLinkButton>
            lorem
        </KLinkButton>
    </KGrid>

    <KGrid>
        <KGridCell></KGridCell>
    </KGrid>
</template>

<style module>
.g1 > * {
    border: 2px solid black;
}
</style>
