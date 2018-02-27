<template>
  <article class="article">
    <h3 class="article__title">{{title}}</h3>
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'article-content',

  props: ['title'],
};
</script>

<style lang="scss">
.article {
  padding: 16px 0;

  &__title {
    text-transform: uppercase;

    position: relative;

    color: #444444;

    &:before {
      content: '';

      display: block;
      height: 1px;
      width: 100%;

      background-color: #ccc;

      margin-bottom: 24px;
    }
  }

  p {
    color: #636363;
    font-weight: 100;
  }

  @media screen and (min-width: 460px) {
    padding: 0 16px 16px 50px;

    &__title {
      &:before {
        position: absolute;

        left: -50px;
        top: calc(50% - 0.5px);

        width: 20px;

        margin-bottom: 0;
      }
    }
  }
}
</style>