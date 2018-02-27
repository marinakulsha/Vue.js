<template>
  <div>
    <div class ="carousel">
      <button type="button" @click="slideLeft">
        <i class="material-icons">chevron_left</i>
      </button>
        <ul :style="{width: `${carouselWidth}px`, transform: `translateX(${translate}px)`}">
            <carousel-item :key="index" v-for="(slide, index) in slides" 
            :title="slide.title" 
            :subtitle="slide.subtitle" 
            :cost="slide.cost" 
            :style="{width: `${carouselItemWidth}px`}"></carousel-item>
        </ul>
      <button type="button" @click="slideRight">
        <i class="material-icons">chevron_right</i>
      </button>
    </div>
  </div>
</template>

<script>

import CarouselItem from '@/components/CarouselItem';

export default {
  name: 'carousel',

  props: ['slides'],

  components: {
    CarouselItem,
  },

  data() {
    const count = this.getCount();
    const horizontalPadding = 22 * 2;
    const itemsMargins = count * 16;
    const carouselItemWidth =
      (window.innerWidth - horizontalPadding - itemsMargins) / count;
    const slidesMargins = 16 * this.slides.length;
    const carouselWidth = carouselItemWidth * this.slides.length;
    const offset = (this.slides.length - count) * carouselItemWidth;

    return {
      count,
      carouselWidth: carouselWidth + slidesMargins,
      carouselItemWidth,
      translate: 0,
      offset,
    };
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize() {
      this.count = this.getCount();
      const horizontalPadding = 22 * 2;
      const itemsMargins = this.count * 16;
      this.carouselItemWidth =
        (window.innerWidth - horizontalPadding - itemsMargins) / this.count;
      const slidesMargins = 16 * this.slides.length;
      const carouselWidth = this.carouselItemWidth * this.slides.length;

      this.carouselWidth = carouselWidth + slidesMargins;

      this.offset = (this.slides.length - this.count) * this.carouselItemWidth;
      this.translate = 0;
    },

    slideLeft() {
      if (this.translate < this.offset - this.carouselItemWidth) {
        this.translate += this.carouselItemWidth + 16;
      }
    },

    slideRight() {
      if (-this.translate < this.offset) {
        this.translate -= this.carouselItemWidth + 16;
      }
    },

    getCount() {
      const width = window.innerWidth;
      if (width < 400) {
        return 1;
      } else if (width < 700) {
        return 2;
      } else if (width < 900) {
        return 3;
      }
      return 4;
    },
  },
};
</script>

<style lang="scss">
.carousel {
  position: relative;
  overflow: hidden;

  ul {
    height: 400px;
    margin: 0 -8px;
    overflow: hidden;

    transition: transform 0.3s ease-in-out;

    li {
      &:nth-child(1) .slide__content {
        background-image: url(../assets/img/slides/1.jpg);
      }
      &:nth-child(2) .slide__content {
        background-image: url(../assets/img/slides/2.jpg);
      }
      &:nth-child(3) .slide__content {
        background-image: url(../assets/img/slides/3.jpg);
      }
      &:nth-child(4) .slide__content {
        background-image: url(../assets/img/slides/4.jpg);
      }
    }
  }

  button {
    position: absolute;
    background-color: #fff;

    width: 16px;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    top: calc(50% - 35px);

    z-index: 1;

    transition: all 0.3s ease-in-out;

    i {
      display: flex;
      position: relative;
      justify-content: center;
      font-size: 20px;
      width: 16px;
    }

    &:first-child {
      left: 0;

      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;

      i {
        left: -3px;
      }
    }

    &:last-child {
      right: 0;

      border-top-left-radius: 32px;
      border-bottom-left-radius: 32px;

      i {
        right: -3px;
      }
    }

    &:focus {
      outline: none;
    }

    &:hover,
    &:focus {
      box-shadow: 1px 0 6px rgba(72, 72, 72, 0.51);
    }
  }
}
</style>
