import { defineStore } from "pinia";
import { onMounted, reactive, ref, toRef } from "vue";
import { useAddressStore } from "./address";
export const useWeatherStore = defineStore("weather", () => {
  // States
  const current = reactive({});
  const forecast = reactive({});
  const address = useAddressStore();
  const location = reactive({});

  // Actionss
  function fetchData() {
    try {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address.city}?unitGroup=metric&key=BSGFPUCQ44RPLZ9MFY5SM6V3E&contentType=json`
      )
        .then((response) => response.json())
        .then((response) => {
          current.value = response.currentConditions;
          forecast.value = response.days;
        //   console.log(response);
          location.value = response;
        });
    } catch (error) {
      console.log(error);
    }
  }


  onMounted(fetchData);
  //   return define values
  return {
    current,
    forecast,
    location,
    fetchData,
  };
});
