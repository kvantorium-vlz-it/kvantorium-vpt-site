<script setup lang="ts">
interface IAdvantage {
  title: string
  description: string
  image: string
}

defineProps<{
  advantage: IAdvantage
}>()
</script>

<template>
  <article :class="$style.advantage">
    <img
      :src="advantage.image"
      alt=""
      role="presentation"
      :class="$style.advantage__image"
    >
    <h3
      :class="$style.advantage__title"
    >
      {{ advantage.title }}
    </h3>
    <p
      :class="$style.advantage__description"
    >
      <HideableText
        :allowed-length="150"
        button-text="..."
        :text="advantage.description"
      />
    </p>
  </article>
</template>

<style module lang="scss">
@use '@styles/main.scss' as *;

.advantage {
    --image-size: #{rem(64px)};

    clear: both;

    &__image {
        $size: var(--image-size);

        float: left;

        width: $size;
        height: $size;
        margin-right: #{rem(8px)};

        border: #{rem(2px)} solid rgb(var(--c-primary-600));
        border-radius: var(--br-full);
    }

    &__title {
        margin: 0;

        color: rgb(var(--c-primary-600));
        @include typo(body-1-bold);
    }

    &__description {
        clear: both;

        margin: 0;

        color: rgb(var(--c-primary-600));
        @include typo(body-2-normal);
    }
    @include between-breakpoint(mobile, desktop) {
        &__image {
            margin-right: #{rem(8px)};
        }

        &__title {
            margin-bottom: #{rem(8px)};
        }
    }
    @include from-breakpoint(desktop) {
        --image-size: #{rem(96px)};

        &__title {
            margin-bottom: #{rem(4px)};
        }

        &__description {
            clear: none;
        }
    }
}
</style>
