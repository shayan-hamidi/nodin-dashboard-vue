<template>
  <div class="numbers-statistics-container">
    <DashboardDetail
      title="Bookings"
      number="281"
      iconBackgroundColor="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
      percent="+55%"
    />
    <DashboardDetail
      title="Today's Users"
      number="2,300"
      iconBackgroundColor="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
      percent="+3%"
    />
    <DashboardDetail
      title="Revenue"
      number="34k"
      iconBackgroundColor="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
      percent="+1%"
    />
    <DashboardDetail
      title="Followers"
      number="+91"
      iconBackgroundColor="linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))"
    />
  </div>
</template>
<script>
import DashboardDetail from "./DashboardDetail.vue";
export default {
  name: "DashboardDetails",
  components: {
    DashboardDetail,
  },
};
</script>
<style scope>
.numbers-statistics-container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
@media only screen and (max-width: 576px) {
  .numbers-statistics-container {
    justify-content: center;
    flex-wrap: wrap;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .numbers-statistics-container {
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media (min-width: 767px) and (max-width: 992px) {
  .numbers-statistics-container {
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media (min-width: 993px) and (max-width: 1300px) {
  .numbers-statistics-container {
    flex-wrap: wrap;
  }
}
</style>
