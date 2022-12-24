<script>
import { useAddressStore } from "../stores/address";
import DarkModeToggle from "./components/DarkModeToggle.vue";
import Search from "./components/Search.vue";

export default {
  components: { Search, DarkModeToggle },
  name: "Header",
  data() {
    return {
      address: useAddressStore(),
      current: null,
    };
  },
  created() {},
};
</script>

<template>
  <header class="flex items-center p-2 border-b-2 shadow-md relative">
    <div class="flex w-full">
      <h1
        id="heading"
        class="
          text-5xl
          font-serif
          bg-gradient-to-r
          from-green-500
          via-yellow-500
          to-pink-500
          text-transparent
          bg-clip-text
          font-semibold
          flex
        "
      >
        Weather
      </h1>
      <img
        src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/null/external-leaves-sauna-icongeek26-linear-colour-icongeek26.png"
        class="w-12 h-12"
      />
      <!-- Search Component -->
      <Search class="w-1/2 ml-10" />
    </div>
    <div class="ml-auto">
      <!-- Toogle -->
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="toggle" class="sr-only peer" />
          <div
            class="
              w-6
              h-11
              outline-none
              ring-2 ring-green-300
              rounded-full
              peer
              peer-checked:after:translate-y-full
              peer-checked:after:border-white
              after:content-['']
              after:absolute
              after:top-[2px]
              after:left-[2px]
              after:bg-green-500
              after:border-gray-300
              after:border
              after:rounded-full
              after:h-5
              after:w-5
              after:transition-all
            "
          ></div>
          <sup class="text-md relative -top-2 -left-5 -z-10">&#8457;</sup>
          <sub class="text-md relative -left-8 top-3 -z-10">&#8451;</sub>
        </label>
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