# Adding icon

Place svg icon inside directory and wrap it in `<template>...</template>` tag.

## Allow changing color

For allow icon change color you should clear `fill` and `stroke` attributes on elements that should change color.

#### Changing component color example

Icon component:
```vue
<template>
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" />
</svg>
</template>
```

Using component:
```vue
<template>
    <!-- Color can specify by style or class -->
    <Icon style="fill: #FC175C;" />
</template>
```

---

**Developer thinks about all specific solutions and their implementation.**