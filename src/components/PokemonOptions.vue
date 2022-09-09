<template>
    <div class="flex justify-center">
      <ul>
        <li class="bg-white w-62.5 cursor-pointer mb-2.5 rounded-5px" v-for="pokemon in pokemons" 
            :key="pokemon.id"
            @click="checkAnswer( pokemon.id )">
            {{ pokemon.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { usePokemons } from '../composabales/usePokemons';

  const { pokemonArr: pokemons, checkAnswer } = usePokemons();

  </script>
  
  <style scoped>
  ul {
      list-style-type: none;
  }
  li {
      border: 1px solid rgba(0, 0, 0, 0.2);
  }
  
  li:hover {
      background-color: rgba(0, 0, 0, 0.05);
  }

  </style>