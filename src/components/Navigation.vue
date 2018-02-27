<template>
  <nav>
    <button class="open-button material-icons" aria-label="open menu" @click="toggleNavigation(true)">menu</button>

    <transition name="fade">
      <div class="mobile-menu" v-if="open">
        <Trap :disabled="!open">
          <button class="close-button material-icons" aria-label="close menu" @click="toggleNavigation(false)">close</button>
          <navigation-menu></navigation-menu>
        </Trap>
      </div>
    </transition>

    <navigation-menu></navigation-menu>
  </nav>
</template>

<script>
import Trap from 'vue-focus-lock';
import NavigationMenu from '@/components/NavigationMenu';

export default {
  name: 'navigation',

  data() {
    return {
      open: false,
    };
  },

  components: {
    Trap,
    NavigationMenu,
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    toggleNavigation(state) {
      this.open = state;

      document.body.style.overflow = state ? 'hidden' : 'auto';
    },

    handleResize() {
      this.open = this.open && window.innerWidth < 900;
    },
  },
};
</script>

<style lang="scss">
nav {
  position: absolute;
  right: 20px;
  top: 22px;

  .open-button.material-icons {
    font-size: 2em;
    cursor: pointer;
    color: #a9ab22;

    transition: all 0.3s ease-in-out;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 50px;

    background-color: #fff;

    .close-button {
      position: absolute;
      top: 26px;
      right: 24px;

      &:hover {
        cursor: pointer;
      }   
    }   

    ul {
      li {
        &:not(:last-child) {
          margin-bottom: 16px;
        }

        a {
          position: relative;
          text-decoration: none;
          color: #333;
          font-size: 1.8em;

          &:focus,
          &:hover  {
            &:after {
                width: 100%;
            }    
          }

          &:focus {
            outline: none;
          }

          &:after {
            content: '';

            position: absolute;
            top: 100%;
            left: 0;
            
            height: 3px;
            width: 0;
          
            background-color:#333;

            transition: all 0.3s ease-in-out;
          }
        } 
      }
    }
  }

  & > ul {
    display: none;
    flex-direction: row;
    padding-top: 6px;

    li {
      &:not(:last-child) {
        margin-right: 25px;
      }

      a {
        position: relative;

        text-transform: uppercase;
        text-decoration: none;
        font-size: 0.875em;
        color: #a9ab22;
        font-weight:700; 

        &:hover {
           &:after {
           width: 100%;
          }
        }

        &:after {
          content: '';

          position: absolute; 
          top: 100%; 
          left: 0;

          height: 2px;
          width: 0;   

          transition: all 0.3s ease-in-out;

          background-color: #a9ab22;
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    position: static;

    .open-button {
      display: none;
    }

    & > ul {
      display: flex;
    }
  }
}
</style>