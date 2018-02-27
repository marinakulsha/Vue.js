<template>
  <section class="section">
    <div>
      <h2 class="section__title">{{title}}</h2>
      <p class="section__subtitle">{{subtitle}}</p>
    </div>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'section-content',

    props: ['title', 'subtitle'],

  };
</script>

<style lang="scss">
.section {
  padding: 60px 30px;

  &__title,
  &__subtitle {
    text-transform: uppercase;
  }

  &__title {
    margin: 0 0 2px 0;

    font-size: 2.5em;
    word-wrap: break-word;
  }

  &__subtitle {
    margin: 0 0 24px 0;
  }

  @media screen and (min-width: 460px) {
    &__subtitle {
      margin: 0 0 24px 0;
    }
  }
}
</style>