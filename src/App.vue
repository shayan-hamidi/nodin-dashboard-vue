<template>
  <div class="app-container">
    <DashboardDrawer />
    <div class="content-container">
      <DashboardNav />
      <DashboardDetails />
      <DashboardStatistics />
      <DashboardTableOverViews />
      <DashboardWeatherCheck />
    </div>
  </div>
</template>

<script>
import DashboardDrawer from "./components/DashboardDrawer/DashboardDrawer.vue";
import DashboardDetails from "./components/DashboardDetails/DashboardDetails.vue";
import DashboardStatistics from "./components/DashboardStatistics/DashboardStatistics.vue";
import DashboardTableOverViews from "./components/DashboardTableOverViews/DashboardTableOverViews.vue";
import DashboardNav from "./components/DashboardNav/DashboardNav.vue";
import DashboardWeatherCheck from "./components/DashboardWeatherCheck/DashboardWeatherCheck.vue";
export default {
  name: "App",
  components: {
    DashboardDrawer,
    DashboardDetails,
    DashboardStatistics,
    DashboardTableOverViews,
    DashboardNav,
    DashboardWeatherCheck,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: 0.00938em;
}
body {
  background-color: #f0f2f5;
}
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}
.content-container {
  align-self: flex-start;
  margin-top: 25px;
  width: inherit;
  margin-left: 27%;
  margin-right: 40px;
}

@media only screen and (max-width: 576px) {
  .content-container {
    margin-right: 0px;
    margin-left: 0px;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .content-container {
    margin-left: 0px;
    margin-right: 0px;
  }
}
@media (min-width: 767px) and (max-width: 992px) {
  .content-container {
    margin-right: 0px;
  }
}
@media (min-width: 993px) and (max-width: 1300px) {
  .content-container {
    margin-right: 0px;
  }
}
@media (min-width: 1301px) and (max-width: 1400px) {
  .content-container {
    margin-left: 20%;
  }
}
@media (min-width: 1401px) and (max-width: 1600px) {
  .content-container {
    margin-left: 16%;
    margin-right: 0px;
  }
}
</style>
