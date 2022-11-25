<template>
  <tr>
    <td>
      <div class="user-logo-container">
        <img :src="logo" :alt="logoName" width="30" />
        <span>{{ logoName }}</span>
      </div>
    </td>
    <td>
      <div class="user-image-container">
        <img :src="userLogo" :alt="userLogo" width="30" />
      </div>
    </td>
    <td>
      <div class="budget-container">
        <span>{{ budget }}</span>
      </div>
    </td>
    <td>
      <div class="progress-container">
        <div class="progress">
          <span class="progress-parent" :style="progressParentStyle"></span>
          <span class="progress-child" :style="progressChildWidth"></span>
        </div>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  name: "SingleTableRow",
  props: {
    logo: String,
    logoName: String,
    userLogo: String,
    budget: String,
    progressParentBackground: String,
    progressParentWidth: String,
  },
  computed: {
    progressChildWidth() {
      return {
        width: 100 - this.progressParentWidth + "%",
      };
    },
    progressParentStyle() {
      return {
        background: this.progressParentBackground,
        width: Number(this.progressParentWidth) + "%",
      };
    },
  },
};
</script>
<style>
.user-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  transition: all 200ms ease-in-out 0s;
  color: rgb(255, 255, 255);
  font-weight: 400;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  border: 0.125rem solid rgb(255, 255, 255);
  cursor: pointer;
}
.user-logo-container {
  display: flex;
  align-items: center;
}
.user-logo-container img {
  margin-right: 10px;
}
.budget-container {
  margin: 0px;
  font-size: 0.75rem;
  line-height: 1.25;
  letter-spacing: 0.03333em;
  color: rgb(123, 128, 154);
  font-weight: 600;
  text-align: center;
}
.progress {
  text-align: left;
  background: transparent;
  box-shadow: none;
  width: 100%;
  display: flex;
}
.progress-parent {
  height: 0.375rem;
  border-radius: 0.375rem 0rem 0rem 0.375rem;
  overflow: visible;
  position: relative;
}
.progress-child {
  background-color: rgb(189, 194, 216);
}
</style>
