<script setup lang="ts">
interface IAdvantage {
    title: string;
    description: string;
    image: string;
}

const advantages = ref<IAdvantage[]>([
    {
        description: 'Детям доступно самое современное и высокотехнологичное профессиональное оборудование, которое позволяет решать широкий спектр задач: от проектирования 3D-моделей до создания настоящих прототипов своих изобретений. Дизайн каждого помещения...',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        title: 'Почувствовать себя в роли настоящего ученого'
    },
    {
        description: 'Детям доступно самое современное и высокотехнологичное профессиональное оборудование, которое позволяет решать широкий спектр задач: от проектирования 3D-моделей до создания настоящих прототипов своих изобретений. Дизайн каждого помещения...',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        title: 'Почувствовать себя в роли настоящего ученого'
    },
])
</script>

<template>
    <slot :advantages="advantages" />
</template>
