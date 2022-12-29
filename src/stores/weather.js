import {
    defineStore
} from "pinia";
import {
    useAddressStore
} from "./address";
export const useWeatherStore = defineStore("weather", {
    state: () => {
        return {
            current: null,
            forecast: null,
            location: null,
            address: useAddressStore(),
            unitGroup: false,
        }
    },
    actions: {
        async fetchData() {
            try {
                fetch(
                        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.address.city}?unitGroup=us&key=BSGFPUCQ44RPLZ9MFY5SM6V3E&contentType=json`
                    )
                    .then((response) => response.json())
                    .then((response) => {
                        this.current = response.currentConditions;
                        this.forecast = response.days;
                        this.location = response;
                        // console.log(response);
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }
});