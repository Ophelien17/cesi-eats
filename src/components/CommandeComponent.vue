<template>
    <div class="cmd">
        <img alt="imgCommande" class="imgCmd" src="../assets/buger.webp"/>
        <div class="details">
            <h2>Nom resto</h2>
            <p>23€ · date · <a href="">Facture</a></p>
        </div>
        <button class="linkToRestaurant">Voir le restaurant</button>
    </div>

</template>

<script>
    export default {
        name: "CommandeComponent"
    }
</script>

<style lang="scss" scoped>
    .cmd {
        border-top: 1px solid #4D90A0;
        padding: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .imgCmd {
            border-radius: 5px;
            max-height: 200px;
        }

        .details {
            a {
                text-decoration: none;
                color: #000;
            }

            a:hover {
                text-decoration: underline;
            }
        }

        .linkToRestaurant {
            font-size: large;
            border: none;
            border-radius: 10px;
            width: 200px;
            height: 100px;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            box-shadow: 20px 20px 60px #d9d9d9,
            -20px -20px 60px #ffffff;

        }

        .linkToRestaurant:active {
            background: #ffffff;
            box-shadow: inset 20px 20px 60px #d9d9d9,
            inset -20px -20px 60px #ffffff;

        }

    }
</style>
