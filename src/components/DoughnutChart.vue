<template>
  <v-container>
    <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  /></v-container>
</template>

<script>
import { Doughnut } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
    plugins: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
      default: () => [],
    },
    payments: {
      type: Array,
      default: () => ({}),
    },
  },
  data() {
    return {
      chartData: {
        labels: this.categories,
        datasets: [
          {
            label: "Costs by categories",
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#AB47BC",
              "#42A5F5",
              "#FFCC80",
              "#78909C",
              "#FFEE58",
              "#FF9800",
              "#FFA726",
              "#A1887F",
              "#BDBDBD",
            ],
            data: this.categories.map((c) => {
              return this.payments.reduce((total, cur) => {
                if (cur.category === c) {
                  total += +cur.value;
                }
                return total;
              }, 0);
            }),
          },
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "right",
          },
          title: {
            display: true,
            text: "Costs by categories",
            align: "start",
            font: {
              size: 24,
              weight: 400,
              lineHeight: 2,
              family: "'Roboto','sans-serif'",
            },
          },
        },
      },
    };
  },
};
</script>
