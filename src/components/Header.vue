<script>
import { useAddressStore } from "../stores/address";

export default {
  name: "Header",
  data() {
    return {
      address: useAddressStore(),
      current: null,
    };
  },
  created() {
  }
};
</script>

<template>
  <header>
    <input
      v-model="address.city"
      @change="$emit('cityChanged')"
      type="text"
      name="search"
      id="search"
      placeholder="Enter your city..."
    />
  </header>
</template>
