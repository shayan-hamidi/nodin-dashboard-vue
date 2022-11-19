<template>
  <div class="drawer">
    <div>
      <div class="drawer-header-container">
        <img src="../assets/download.png" width="40" alt="dashboard logo" />
        <h5>Material Dashboard 2</h5>
      </div>
      <hr />
      <ul style="backgroundcolor: red">
        <li v-for="item in items" :key="item.message">
          <font-awesome-icon icon="fa-solid fa-user-secret" />
          {{ item.message }}
        </li>
      </ul>
    </div>
    <div>
      <button class="update-button">UPGRADE TO PRO</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeDrawer",
  data() {
    return {
      items: [
        { message: "Dashboard" },
        { message: "Tables" },
        { message: "Billing" },
        { message: "RTL" },
        { message: "Notifications" },
        { message: "Profile" },
        { message: "Sign In" },
        { message: "Sign Up" },
      ],
    };
  },
};
</script>
<style scope>
.drawer {
  width: auto;
  height: 87vh;
  background-color: #262628;
  margin: 0px 20px 0px 20px;
  border-radius: 0.75rem;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}
.update-button {
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  letter-spacing: 0.02857em;
  min-width: 84px;
  width: 100%;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0.5rem;
  line-height: 1.4;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  transition: all 150ms ease-in 0s;
  min-height: 2.5rem;
  padding: 0.425rem 2.2rem;
  background-image: linear-gradient(
    195deg,
    rgb(73, 163, 241),
    rgb(26, 115, 232)
  );
  color: rgb(255, 255, 255);
  box-shadow: rgb(26 115 232 / 15%) 0rem 0.1875rem 0.1875rem 0rem,
    rgb(26 115 232 / 20%) 0rem 0.1875rem 0.0625rem -0.125rem,
    rgb(26 115 232 / 15%) 0rem 0.0625rem 0.3125rem 0rem;
  background-size: 150% !important;
  background-position-x: 25% !important;
}
.drawer-header-container {
  display: flex;
  align-items: center;
}
h5 {
  letter-spacing: 0.00938em;
  color: white;
  margin: 0px 5px;
}
hr {
  height: 2px;
  color: white;
  margin-top: 25px;
  flex-shrink: 0;
  border-top: 0px solid rgba(0, 0, 0, 0.08);
  border-right: 0px solid rgba(0, 0, 0, 0.08);
  border-left: 0px solid rgba(0, 0, 0, 0.08);
  border-bottom: none;
  opacity: 0.55;
  background-color: transparent;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  ) !important;
}
</style>
