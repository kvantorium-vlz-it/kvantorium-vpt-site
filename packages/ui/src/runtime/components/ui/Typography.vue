<script setup lang="ts">
type FontFamily = 'BankGothic' | 'Circe'

type FontSize =
      'h00'
    | 'h0'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'body-small'

type FontWeight =
      100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900

interface Props {
    fontFamily?: FontFamily | null
    fontWeight?: FontWeight | null
    isItalic: boolean
    fontSize?: FontSize | null
}

withDefaults(defineProps<Props>(), {
    fontFamily: null,
    fontWeight: null,
    fontSize: null,
    isItalic: false,
})
</script>

<template>
    <slot :classes="[
            $style.typography,
            isItalic && [$style.italic],
            fontSize !== null && $style[`weight-${fontWeight}`],
            fontSize !== null && $style[`size-${fontSize}`],
            fontFamily !== null && fontFamily === 'BankGothic'
                ? $style['bank-gothic']
                : $style['circe'],
        ]"
    />
</template>

<style module>
.typography {
    --family: inherit;
    --weight: inherit;
    --style: inherit;
    --size: inherit;
    --line-height: inherit;

    font-family: var(--family), Arial, Helvetica, sans-serif;
    font-weight: var(--weight);
    font-style: var(--style);
    font-size: var(--size);
    line-height: var(--line-height);
}
.bank-gothic {
    --family: "BankGothic";
}
.circe {
    --family: "Circe";
}
.italic {
    --style: italic;
}
.weight-100 {
    --weight: 100;
}
.weight-200 {
    --weight: 200;
}
.weight-300 {
    --weight: 300;
}
.weight-400 {
    --weight: 400;
}
.weight-500 {
    --weight: 500;
}
.weight-600 {
    --weight: 600;
}
.weight-700 {
    --weight: 700;
}
.weight-800 {
    --weight: 800;
}
.weight-900 {
    --weight: 900;
}
.size-h00 {
    --size: 3rem;
    --line-height: 1.5;
}
.size-h0 {
    --size: 2.5rem;
    --line-height: 1.5;
}
.size-h1 {
    --size: 2rem;
    --line-height: 1.3;
}
.size-h2 {
    --size: 1.5rem;
    --line-height: 1.3;
}
.size-h3 {
    --size: 1.25rem;
    --line-height: 1.3;
}
.size-h4 {
    --size: 1rem;
    --line-height: 1.3;
}
.size-h5 {
    --size: 0.875rem;
    --line-height: 1.3;
}
.size-h6 {
    --size: 0.75rem;
    --line-height: 1.3;
}
.size-body {
    --size: 0.875rem;
    --line-height: 1.3;
}
.size-body-small {
    --size: 0.75rem;
    --line-height: 1.3;
}
</style>
