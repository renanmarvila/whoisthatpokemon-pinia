<template>
    <h1 class="flex flex-col justify-center text-center my-2" v-if="!pokemon">LOADING</h1>

    <div v-else class="flex flex-col justify-center text-center items-center my-2">
        <h1>Quem é esse Pokemon!?</h1>
        
        <PokemonPicture />

        <PokemonOptions />

        <template v-if="showAnswer">
            <h2 class="">{{ message }}</h2>
            <button class="w-62.5 bg-blue-200 mt-4 p-2 border-2 border-black border-solid rounded-1xl" @click="newGame">
                Jogar novamente
            </button>
        </template>

    </div>
    
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';

import { usePokemons } from '../composabales/usePokemons';

const  { 
    pokemon, showAnswer, message,
    mixPokemonArray, newGame 
} = usePokemons();
            
mixPokemonArray();
</script>

<style scoped>
    button:hover {
        background-color: rgb(133, 147, 177);
    }
</style>