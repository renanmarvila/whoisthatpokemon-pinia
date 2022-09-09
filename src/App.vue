  <template>
    <div>
      <PokemonLogo></PokemonLogo>

      <div class="flex-grow">
      <router-view></router-view>
      </div>

      <Footer></Footer>
    </div>
  </template>

<script setup lang="ts">

  import PokemonLogo from './components/PokemonLogo.vue'
  import Footer from './components/Footer.vue'

</script>
