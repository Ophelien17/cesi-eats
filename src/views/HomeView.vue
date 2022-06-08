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

        .come {

            h1 {
                font-size: 70px;
            }

            .searchRestaurant {
                margin: 20px 0;
                padding: 10px;
                width: 500px;
                min-width: 300px;
                border-radius: 10px;
                border-color: #2c3e50;
                display: flex;
                border-width: 1px;
                font-size: 25px;
            }

        }
    }

    .color {
        color: #4D90A0;
    }


    @media (max-width: 1200px) {
        .home {
            .come {

                .searchRestaurant {
                    min-width: 300px;
                }

            }

            .bestProducts {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;

                .background {
                    display: none;
                }
            }
        }


    }

    @media (min-width: 1200px) {
        .home {
            display: flex;
            justify-content: space-around;

            .come {
                max-width: 50%;

                h1 {
                    text-align: left;
                }

                .searchRestaurant {
                    min-width: 300px;
                    display: flex;
                }

            }

            .bestProducts {
                .background {
                    position: absolute;
                    background-color: rgba(77, 140, 160, .5);
                    right: 5%;
                    height: 100%;
                    width: 70%;
                    border-radius: 20px;
                }
            }
        }

    }


</style>
