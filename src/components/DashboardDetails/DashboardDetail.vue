<template>
  <div class="numbers-statistic-item">
    <div class="title-container">
      <div class="icon-box" :style="iconBackgroundStyle">
        <font-awesome-icon icon="fa-solid fa-user-secret" />
      </div>
      <div class="title">
        <span>{{ title }}</span>
        <h4>{{ number }}</h4>
      </div>
    </div>
    <DashboardHr />
    <div class="percentage-statistic">
      <span>{{ percent }}</span
      >&nbsp;
      <p v-if="percent">than lask week</p>
      <p v-else>Just updated</p>
    </div>
  </div>
</template>
<script>
import DashboardHr from "../Hr/Hr.vue";
export default {
  name: "DashboardDetail",
  props: {
    title: String,
    number: String,
    iconBackgroundColor: String,
    percent: String,
    persentDetail: String,
  },
  components: {
    DashboardHr,
  },
  computed: {
    iconBackgroundStyle() {
      return {
        background: this.iconBackgroundColor,
      };
    },
  },
};
</script>
<style scope>
.numbers-statistic-item {
  width: 360px;
  min-height: 135px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-wrap: break-word;
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
}
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
}
.title-container span {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  color: rgb(123, 128, 154);
  font-weight: 300;
}
.icon-box {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  margin-top: -24px;
  opacity: 1;
  background: iconBackgroundColor;
  color: rgb(255, 255, 255);
  border-radius: 0.75rem;
}
.title {
  text-align: end;
}
.title-container h4 {
  font-size: 1.5rem;
  line-height: 1.375;
  font-weight: 700;
  letter-spacing: 0.00735em;
  color: rgb(52, 71, 103);
}
.percentage-statistic {
  display: flex;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
  box-shadow: none;
}
.percentage-statistic span {
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  color: rgb(76, 175, 80);
  font-weight: 700;
}
.percentage-statistic p {
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  display: flex;
  color: rgb(123, 128, 154);
}

@media only screen and (max-width: 576px) {
  .numbers-statistic-item {
    width: 90%;
    margin-bottom: 20px;
    margin-top: 40px;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .numbers-statistic-item {
    width: 95%;
    margin-bottom: 20px;
  }
}
@media (min-width: 767px) and (max-width: 992px) {
  .numbers-statistic-item {
    margin-bottom: 20px;
  }
}
@media (min-width: 993px) and (max-width: 1300px) {
  .numbers-statistic-item {
    margin: 20px 10px 0px 10px;
  }
}
@media (min-width: 1301px) and (max-width: 1600px) {
  .numbers-statistic-item {
    margin: 20px 10px 0px 10px;
    width: 230px;
  }
}
</style>
