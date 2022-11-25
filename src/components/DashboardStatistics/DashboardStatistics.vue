<template>
  <div class="numbers-statistics-container">
    <StatisticsCard
      cardTitle="Website Views"
      subtitle="Last Campaign
    Performance"
      lastUpdate="campaign sent 2 days ago"
      statisticBackground="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115,
    232))"
      :chartOptions="WebsiteOptions"
    />
    <StatisticsCard
      cardTitle="Daily Sales"
      subtitle="(+15%) increase in today sales."
      lastUpdate="updated 4 min ago"
      statisticBackground="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
      :chartOptions="DailyOptions"
    />
    <StatisticsCard
      cardTitle="Completed Tasks"
      subtitle="Last Campaign Performance"
      lastUpdate="just updated"
      statisticBackground="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
      :chartOptions="CompletedOptions"
    />
  </div>
</template>
<script>
import StatisticsCard from "./StatisticsCard.vue";
import { WebsiteOptions } from "./chartOptions/WebsiteOptions";
import { DailyOptions } from "./chartOptions/DailyOptions";
import { CompletedOptions } from "./chartOptions/CompletedOptions";
export default {
  name: "DashboardStatistics",
  components: {
    StatisticsCard,
  },
  data() {
    return {
      WebsiteOptions: WebsiteOptions(),
      DailyOptions: DailyOptions(),
      CompletedOptions: CompletedOptions(),
    };
  },
};
</script>
<style scope>
.numbers-statistics-container {
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 576px) {
  .numbers-statistics-container {
    justify-content: center;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .numbers-statistics-container {
    justify-content: center;
  }
}
@media (min-width: 767px) and (max-width: 992px) {
  .numbers-statistics-container {
    justify-content: center;
  }
}
@media (min-width: 993px) and (max-width: 1300px) {
  .numbers-statistics-container {
    justify-content: center;
  }
  .statisticCard {
    width: 310px;
  }
}
@media (min-width: 1301px) and (max-width: 1400px) {
  .statisticCard {
    width: 320px;
    margin: 30px 10px 20px 10px;
  }
}
@media (min-width: 1401px) and (max-width: 1600px) {
  .statisticCard {
    width: 366px;
    margin: 30px 10px 20px 10px;
  }
}
</style>
