<template>
  <div class="statisticCard">
    <div class="highchart-container" :style="statisticBackgroundStyle">
      <Highcharts :options="chartOptions" />
    </div>
    <h6>{{ cardTitle }}</h6>
    <div class="statistic-subtitle">{{ subtitle }}</div>
    <DashboardHr />
    <div class="card-footer">
      <span class="card-icon">
        <font-awesome-icon icon="fa-solid fa-user-secret" />
      </span>
      <span class="card-time">{{ lastUpdate }}</span>
    </div>
  </div>
</template>
<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import stockInit from "highcharts/modules/stock";
import DashboardHr from "../Hr/Hr.vue";
stockInit(Highcharts);
export default {
  name: "StatisticsCard",
  components: {
    Highcharts: Chart,
    DashboardHr,
  },
  props: {
    cardTitle: String,
    subtitle: String,
    lastUpdate: String,
    statisticBackground: String,
    chartOptions: Object,
  },
  computed: {
    statisticBackgroundStyle() {
      return {
        background: this.statisticBackground,
      };
    },
  },
  // data() {
  //   return {

  //   };
  // },
};
</script>
<style>
.statisticCard {
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  /* min-width: 500px; */
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
  margin-top: 40px;
}
.statisticCard h6 {
  margin: 0px;
  font-size: 1rem;
  line-height: 1.625;
  font-weight: 700;
  letter-spacing: 0.0075em;
  color: rgb(52, 71, 103);
  padding-left: 20px;
  margin-top: 15px;
}
.statistic-subtitle {
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  color: rgb(123, 128, 154);
  font-weight: 300;
  padding-left: 20px;
}
.highchart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-top: -40px !important;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 4px;
  /* width: 400px; */
  margin: 0 auto;
}
.card-footer {
  padding-left: 20px;
  padding-bottom: 20px;
}
.card-footer .card-icon {
  margin-right: 10px;
}
.card-time {
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  color: rgb(123, 128, 154);
  font-weight: 300;
}
@media only screen and (max-width: 576px) {
  .statisticCard {
    width: 90%;
    margin-bottom: 20px;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .statisticCard {
    width: 95%;
    margin-bottom: 20px;
  }
}
@media (min-width: 767px) and (max-width: 992px) {
  .statisticCard {
    width: 70%;
    margin: 30px 10px 20px 10px;
  }
}
@media (min-width: 993px) and (max-width: 1300px) {
  .statisticCard {
    margin: 30px 10px 20px 10px;
  }
}
@media (min-width: 1301px) and (max-width: 1600px) {
  .statisticCard {
    width: 320px;
    margin: 30px 10px 20px 10px;
  }
}
</style>
