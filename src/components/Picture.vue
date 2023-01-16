<script lang='ts' setup>

//image va changer en fonction du nombre d'erreur
//image reste statique si on trouve une lettre juste

//document.body.querySelector('img').src = `./img/error${this.errors}.jpg`;
</script>

<template>
    <div class="text-center fw-bold m-3">
        <img src=@/assets/img/start.jpg />
    </div>
</template>

<style>
img {
    float: inline-start;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    border: 5px solid seagreen;
    border-radius: 20px 20px 20px 20px;
    margin-bottom: 10px;
}
</style>