<script>
import { useAddressStore } from "../stores/address";
import { useWeatherStore } from "../stores/weather";
import DarkModeToggle from "./components/DarkModeToggle.vue";
import Search from "./components/Search.vue";

export default {
  components: { Search, DarkModeToggle },
  name: "Header",
  data() {
    return {
      address: useAddressStore(),
      current: null,
      weather: useWeatherStore(),
    };
  },
  methods:{
    changeTemperature(el){
      this.weather.unitGroup = el.target.checked;
    }
  }
};
</script>

<template>
  <header class="p-2 border-b-2 shadow-md">
    <div class="flex items-center w-7/12 mx-auto">
      <div class="flex w-full">
        <h1 id="heading" class="
          text-5xl
          font-serif
          text-black
          font-semibold
          flex
        ">
          Weather
        </h1>
        <img
          src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/null/external-leaves-sauna-icongeek26-linear-colour-icongeek26.png"
          class="w-12 h-12" />
        <!-- Search Component -->
        <Search class="w-1/2 ml-10" />
      </div>
      <div class="ml-auto">
        <!-- Toogle -->
        <label class="inline-flex relative items-center cursor-pointer">
          <input v-on:change="changeTemperature" type="checkbox" value="" id="toggle" class="sr-only peer" />
          <div class="
              w-6
              h-11
              outline-none
              ring-2 ring-black
              rounded-full
              peer
              peer-checked:after:translate-y-full
              peer-checked:after:border-white
              after:content-['']
              after:absolute
              after:top-[2px]
              after:left-[2px]
              after:bg-black
              after:border-gray-300
              after:border
              after:rounded-full
              after:h-5
              after:w-5
              after:transition-all
            "></div>
          <sup class="text-md relative -top-2 -left-5 -z-10">&#8457;</sup>
          <sub class="text-md relative -left-8 top-3 -z-10">&#8451;</sub>
        </label>
      </div>
    </div>
  </header>
</template>

<style>
.material-symbols-rounded {
  font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 200,
    'opsz' 24
}
</style>