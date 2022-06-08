<template>
  <div class="home">
      <div class="come">
      <h1>Le <span class="color">meilleur</span> endroit
        pour <span class="color">manger</span> se trouve
        dans votre canapé</h1>
      <input class="searchRestaurant" placeholder="Restaurant, type, ..." type="text">

    </div>
    <div class="bestProducts">
        <div class="background"/>
      <ProductTile/>
      <ProductTile/>
      <ProductTile/>
      <ProductTile/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ProductTile from '@/components/ProductTile.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductTile
  },
});
</script>
<style lang="scss">
    .home {
        padding: 20px;
        display: flex;
        justify-content: space-around;

        .come {
            max-width: 50%;

            h1 {
                font-size: 80px;
                text-align: left;
            }

            .searchRestaurant {
                padding: 5px;
                min-width: 300px;
                border-radius: 10px;
                border-color: #2c3e50;
                float: left;
            }

        }

        .bestProducts {
            display: flex;
            flex-wrap: wrap;
            position: relative;

            .background {
                position: absolute;
                background-color: rgba(77, 140, 160, .5);
                right: 5%;
                height: 95%;
                width: 70%;
                border-radius: 20px;
            }
        }
    }


  .color {
    color: #4D90A0;
  }


</style>
