import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAddressStore = defineStore("address", () => {
  // State
  const city = ref("Lahore");

  // =====(setter & getters)=====
  function setAddress(updatedCity) {
    // throw error if city is contain any Number in it
    if (/\d/.test(updatedCity)) {
      throw new TypeError("Enter a valid city name!");
    } else {
      city.value = updatedCity;
    }
  }?

  //  =========( Actions)=========
  async function geoLocationAPI() {
    const response = await fetch('https://api.bigdatacloud.net/data/ip-geolocation?localityLanguage=en&key=[YOUR API KEY]')
  }

  return {
    city,
    setAddress,
  };
});
