<template>
    <div class="flex flex-col justify-center my-8 h-60">

        <img v-if="!showPokemon" 
            :src="imgSrc" 
            class="filter brightness-0 h-60"
            alt="Imagem do Pokemon escondido, todo preto">
        
        <img v-else
            :src="imgSrc"
            class="h-60"
            alt="Pokemon revelado">

    </div>
</template>

<script setup lang="ts">
    
import { usePokemons } from '../composabales/usePokemons';

const { showPokemon, imgSrc } = usePokemons()

</script>

<style scoped>

img {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

</style>