<template>
  <footer>
    <div class="footer__sections">  
      <section class="footer-item">
        <h3 class="footer-item__header">
          <span>how to arrive</span>
          <span>
            <i class="material-icons">location_on</i>
          </span>
        </h3>
        <div class="footer-item__content">
          <p>Lorem ipsum dolor sit amet consectetur adpisicing elit.</p>
          <link-button v-tooltip="'this is tooltip 3'">
            <i class="material-icons">add</i>
          </link-button>
        </div>
      </section>

      <section class="footer-item">
        <h3 class="footer-item__header">
          <span>faq</span>
          <i class="material-icons">chat</i>
        </h3>
        <div class="footer-item__content">
          <p>Lorem ipsum dolor</p>
          <link-button v-tooltip="'this is tooltip 4'">
            <i class="material-icons">add</i>
           </link-button>
        </div>
      </section>

      <section class="footer-item">
        <h3 class="footer-item__header">
          <span>social media</span>
          <i class="material-icons">share</i>
        </h3>
        <div class="footer-item__content">
          <p>Lorem  ipsum dolor sit amet consectetur.</p>
          <link-button v-tooltip="'this is tooltip 1'">
            <i class="material-icons">add</i>
          </link-button>
        </div>
      </section>

      <section class="footer-item">
        <h3 class="footer-item__header">
          <span>partners</span>
          <i class="material-icons">star</i>
        </h3>
        <div class="footer-item__content">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <link-button v-tooltip="'this is tooltip 2'">
            <i class="material-icons">add</i>
          </link-button>
        </div>
      </section>
    </div>       
  </footer>  
</template>

<script>
import LinkButton from '@/components/LinkButton';

export default {
  name: 'footer-content',

  components: { LinkButton },
};
</script>

<style lang="scss">
footer {
  padding: 60px 30px;
}

.footer {
  &__sections {
    display: flex;
    flex-direction: column;
  }

  &-item {
    width: 100%;
    box-sizing: border-box;

    display: flex;
 
    flex: {
      direction: column;
      grow: 0;
      shrink: 0;
    }
      
    &__header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      text-transform: uppercase;

      font-size: 1em;

      border-bottom: 1px solid #ccc;
      padding: 16px 0;
     
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      i {
        font-size: 0.875em;
      }
    }

    &__content {
      display: flex;
      flex-direction: row;      
      align-items: center;
      justify-content: space-between;
      
      flex: 1;


      p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        margin-right: 8px;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        padding: 0px;
        width: 18px;
        height: 18px;
        border-radius: 50%;

        position: relative;
        
        flex: {
          direction: row;
          shrink: 0;
        }

        &:after {
          content: none;
        }

        i {
          font-size: 0.875em;
        }
      }
    }

    p {
     font-size: 0.875em;
    }
  }

  @media screen and (min-width: 570px) {
    &__sections {
      flex-direction: row;
    }

    &-item {
      &:first-child {
        width: calc(25% - 16px);
        margin-right: 16px;
      }

      &:last-child {  
        width: calc(25% - 16px);
        margin-left: 16px;
      }

      &:not(:last-child):not(:first-child) {
        width: calc(25% - 32px);
        margin:0 16px;
      }
    }
  }
}
</style>