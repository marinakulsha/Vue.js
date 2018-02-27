<template>
  <a class="button" href="#">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'link-button',
};

</script>

<style lang="scss">
a {
  &:hover {
    cursor: pointer;
  }
}
</style>