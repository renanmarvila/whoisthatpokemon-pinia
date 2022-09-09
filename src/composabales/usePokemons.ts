import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import getPokemonOptions from '../services/getPokemonOptions';
import { usePokemonStore } from '../store/pokemonStore';

export const usePokemons = () => {

    const pokemonStore = usePokemonStore();
    const { pokemonArr, pokemon, showPokemon, showAnswer, message } = storeToRefs(pokemonStore);

    const mixPokemonArray = async() => {
        pokemonStore.loadPokemons(await getPokemonOptions());

        const randomInt = Math.floor( Math.random() * 4 )
        pokemonStore.setHiddenPokemon(pokemonArr.value[ randomInt ]);
    };

    const checkAnswer = ( selectedId: number ) => {
        if ( !pokemon.value ) return;

        if( selectedId === pokemon.value.id ) {
            pokemonStore.showPokemonAndAnswer(`Acertou! Esse é o ${ pokemon.value.name }`);
        } else {
            pokemonStore.showPokemonAndAnswer(`Errou... era o ${ pokemon.value.name }`)
        }
    };

    const newGame = () => {
        pokemonStore.clearState();
        mixPokemonArray();
    }

    return {
        // Properties
        pokemonArr, pokemon, showPokemon, showAnswer, message,

        // Computed
        imgSrc: computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.value?.id }.svg` ),

        // Methods
        mixPokemonArray, checkAnswer, newGame
    }

}