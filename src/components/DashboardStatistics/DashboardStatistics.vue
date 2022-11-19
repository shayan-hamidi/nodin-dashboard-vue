<template>
  <div class="numbers-statistics-container">
    <StatisticsCard
      cardTitle="Website Views"
      subtitle="Last Campaign Performance"
      lastUpdate="campaign sent 2 days ago"
      statisticBackground="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
    />
    <StatisticsCard
      cardTitle="Daily Sales"
      subtitle="(+15%) increase in today sales."
      lastUpdate="updated 4 min ago"
      statisticBackground="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
    />
    <StatisticsCard
      cardTitle="Completed Tasks"
      subtitle="Last Campaign Performance"
      lastUpdate="just updated"
      statisticBackground="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
    />
  </div>
</template>
<script>
import StatisticsCard from "./StatisticsCard.vue";
export default {
  name: "DashboardStatistics",
  components: {
    StatisticsCard,
  },
};
</script>
<style scope>
.numbers-statistics-container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
</style>
