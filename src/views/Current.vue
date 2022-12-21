<script>
import { ref, reactive, toRefs, onMounted } from "vue";
import HeaderVue from "../components/Header.vue";
import { useAddressStore } from "../stores/address";

export default {
  components: { HeaderVue },
  setup() {
    const address = useAddressStore();
    const weather = reactive({
      current: null,
      forecast: null,
    });

    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "37d562c407msh49e256e2249426cp167c46jsnefa0d775d115",
            "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",
          },
        };

        fetch(
          `https://aerisweather1.p.rapidapi.com/observations/${address.city},pk`,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            weather.current = response;
          });
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(fetchData);

    return {
      ...toRefs(weather),
      fetchData,
    };
  },
};
</script>

<template>
  <div>
    <HeaderVue @cityChanged="fetchData" />
    <div>
      {{ current }}
    </div>
  </div>
</template>