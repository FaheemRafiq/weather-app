<script>
import HeaderVue from "../components/Header.vue";
import { useAddressStore } from "../stores/address";
import { useWeatherStore } from "../stores/weather";
import WeatherCard from "../components/WeatherCard.vue";
export default {
  components: { HeaderVue, WeatherCard },
  setup() {
    const address = useAddressStore();
    const weather = useWeatherStore();
    return {
      address,
      weather,
    };
  },
 mounted() {
    this.weather.fetchData();
  },
};
</script>

<template>
  <div class="h-screen">
    <!-- Header -->
    <HeaderVue />

    <!-- Main Content -->
    <div>
      <weather-card />
    </div>

    <!-- Geolocation Button -->
    <div class="absolute bottom-5 right-8">
      <span
        @click="address.getGeoLocation()"
        class="
          material-symbols-rounded
          cursor-pointer
          bg-sky-300
          hover:bg-sky-400
          p-1
          rounded-full
        "
      >
        my_location
      </span>
    </div>
  </div>
</template>