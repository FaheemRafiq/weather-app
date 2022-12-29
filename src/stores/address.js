import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useWeatherStore } from "./weather";
export const useAddressStore = defineStore("address", () => {
  // State
  const city = ref("Lahore");
  const weather = useWeatherStore();


  // =====(setter & getters)=====
  function setAddress(updatedCity) {
    // throw error if city is contain any Number in it
    if (/\d/.test(updatedCity)) {
      throw new TypeError("Enter a valid city name!");
    } else {
      city.value = updatedCity;
    }
  }

  //  =========( Actions)=========
  async function getGeoLocation() {
    try {
    const response = await fetch('https://api.bigdatacloud.net/data/ip-geolocation?localityLanguage=en&key=bdc_f4aee38f472944308d448e3967eb5097	')
    const json = await response.json();
    city.value = await json.location.city;
    weather.fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    city,
    setAddress,
    getGeoLocation
  };
});
