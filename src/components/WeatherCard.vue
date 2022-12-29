<!-- Composition APi -->
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import data from '../assets/Conditions.json'
import { useAddressStore } from '../stores/address';
import { useWeatherStore } from '../stores/weather';

const condition = ref(data);
const address = useAddressStore();
const weather = useWeatherStore();
</script>


<!-- Option APi -->
<script>
export default {
  name: "WeatherCard",
};
</script>

<template>
  <div v-if="weather.current" class="p-5 w-7/12 mx-auto">
    <!-- Address -->
    <div v-if="weather.location" class="">
      <h2>{{ weather.location.resolvedAddress }}</h2>
      <div class="flex items-center">
        <Icon icon="mdi:location" width="25" />
        <h1 class="text-2xl font-semibold">{{weather.location.address}}</h1>
      </div>
    </div>
      <!-- Condition Card -->
      <div class="flex flex-col items-center bg-gray-100 rounded-2xl">
        <img
          class="p-2 order-2 bg-transparent"
          :src="condition[(weather.current.conditions).toLowerCase()]"
          width="500"
          :alt="weather.current.conditions"
        />
        <div class="p-5 text-lg order-1 text-center">
          <!-- Display In Celsius (f - 32) * (5/9) -->
          <div v-if="weather.unitGroup == true">
            <h1 class="text-8xl inline">{{ Math.round((((weather.current.temp)-32)*(5/9)) * 10) / 10}}</h1>
            <span class="text-2xl">&#8451;</span>
          </div>
          <!-- Displaying in Fahrenheit -->
          <div v-else>
            <h1 class="text-8xl inline">{{ (weather.current.temp) }}</h1>
            <span class="text-2xl">&#8457;</span>
          </div>
          <h1 class="text-4xl">{{ weather.current.conditions }}</h1>

          <h2 v-if="weather.unitGroup == true">Feels like : {{ Math.round((((weather.current.feelslike)-32)*(5/9)) * 10) / 10}}</h2>
          <h2 v-else>Feels like : {{ weather.current.feelslike }}</h2>
        </div>
      </div>
  </div>
</template>
