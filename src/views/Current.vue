<script>
import { ref, reactive, toRefs, onMounted } from "vue";
import HeaderVue from "../components/Header.vue";
import { useAddressStore } from "../stores/address";
import { useWeatherStore } from "../stores/weather";
export default {
  components: { HeaderVue },
  setup() {
    const address = useAddressStore();
    const weather = useWeatherStore();

    return {
       address,
       weather
    };
  },
};
</script>

<template>
  <div class="h-screen dark:bg-gray-700 dark:text-white">
    <HeaderVue />

    {{ weather.location }}


    <!-- Geolocation Button -->
    <div class="absolute bottom-5 right-8">
       <span class="material-symbols-rounded cursor-pointer bg-sky-300 hover:bg-sky-400 p-1 rounded-full "> my_location </span> 
    </div>
  </div>
</template>