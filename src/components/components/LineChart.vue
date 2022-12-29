<script setup>
import Chart from "chart.js/auto";
import { computed, ref, onMounted } from "vue";
import { useWeatherStore } from "../../stores/weather";

const weather = useWeatherStore();
const days = ref(null),
  temperature = ref(null);
function drawGraph() {
  setTimeout(() => {
    // Getting data
    days.value = getDays(weather.forecast);
    temperature.value = getTemperature(weather.forecast);
    console.log();
    // Drawing Line Chart

    const labels = days.value;
    const data = {
      labels: labels,
      datasets: [
        {
          label: "15 Day Data Forecast",
          backgroundColor: "#376D75",
          borderColor: "#376D75",
          data: temperature.value,
          lineTension: 0.3,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {},
    };

    const myChart = new Chart(document.getElementById("myChart"), config);
  }, 1000);
}


function getDays(obj) {
  let array = [];
  for (const key in obj) {
    array.push(obj[key].datetime);
  }
  return array;
}
function getTemperature(obj) {
  let array = [];
  for (const key in obj) {
    array.push(obj[key].temp);
  }
  return array;
}
onMounted(drawGraph);
</script>

<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>
