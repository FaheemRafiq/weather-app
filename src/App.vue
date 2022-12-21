<script scoped>
import { ref, reactive, toRefs, onMounted } from "vue";
// import { useCounterStore } from "./stores/counter";

export default {
  components: {},
  setup() {
    // const counter = useCounterStore();
    const weather = reactive({
      current: null,
      forecast: null,
    });
    
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=1a1d48731a8d458aabd111931221912&q=31.56,74.32&days=5`
        );
        const data = await response.json();
        weather.current = data.current;
        weather.forecast = data.forecast;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(fetchData);

    return {
      ...toRefs(weather)
    };
  },
};
</script>


<template>
  <h1>current</h1>
</template>