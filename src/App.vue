<template>
  <div class="app-container">
    <HomeDrawer />
    <div class="content-container">
      <nav>
        <div class="header-container">
          <div class="breadcrumbs-container">
            <font-awesome-icon icon="fa-solid fa-user-secret" />
            <h5>/ Dashboard</h5>
          </div>
          <div class="header-container">
            <h4>Dashboard</h4>
          </div>
        </div>
        <div class="toolbar-container">
          <font-awesome-icon icon="fa-solid fa-user-secret" />
          <font-awesome-icon icon="fa-solid fa-user-secret" />
          <font-awesome-icon icon="fa-solid fa-user-secret" />
        </div>
      </nav>
      <DashboardDetails />
      <DashboardStatistics />
    </div>
  </div>
</template>

<script>
import HomeDrawer from "./components/Homedrawer.vue";
import DashboardDetails from "./components/DashboardDetails/DashboardDetails.vue";
import DashboardStatistics from "./components/DashboardStatistics/DashboardStatistics.vue";
export default {
  name: "App",
  components: {
    HomeDrawer,
    DashboardDetails,
    DashboardStatistics,
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
  margin-right: 40px;
}
.breadcrumbs-container {
  display: flex;
}
.toolbar-container {
  display: flex;
}
nav {
  display: flex;
  justify-content: space-between;
  background: red;
}
</style>
