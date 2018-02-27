<template>
  <header :class="{'scrolled': isScrolled}">
    <div class="container">
      <h1>
        Purohotel
        <span>tm</span>
      </h1>
      <navigation></navigation>
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'header-content',

  data() {
    return {
      isScrolled:
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100,
    };
  },

  components: { Navigation },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.isScrolled =
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100;
    },
  },
};
</script>

<style lang="scss">

header {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;

  z-index: 2;

  transition: all 0.3s ease-in-out;

  &.scrolled {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.4);
    
    h1,
    a,
    button.material-icons {
      color: #333;
    }
    
    nav ul li a:after {
      background-color: #333;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 72px;

    padding: 0 24px;

    @media screen and (min-width: 900px) {
      justify-content: space-between;
    }
  }

  h1 {
    position: relative;
    margin: 0;
    padding: 0 12px 0 0;
    color: #a9ab22;
    font-size: 2.5em;

    span {
      position: absolute;
      top: 5px;
      right: 0;

      font-size: 0.2em;
    }
  }
}
</style>
