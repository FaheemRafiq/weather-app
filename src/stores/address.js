import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAddressStore = defineStore('address', () => {
  const city = ref('Lahore')

  return { city }
})
