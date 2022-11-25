<template>
  <nav id="nav">
    <div>
      <div class="breadcrumbs-container">
        <font-awesome-icon icon="fa-solid fa-user-secret" />
        <h5>/ Dashboard</h5>
      </div>
      <div class="header-container">
        <h4>Dashboard</h4>
      </div>
    </div>
    <div class="toolbar-container">
      <input type="text" placeholder="Search here" class="search-input" />
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </div>
  </nav>
</template>
<script>
export default {
  name: "DashboardNav",
  data() {
    return {
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        document.getElementById("nav").style.backgroundColor = "#fafdfb";
      } else {
        document.getElementById("nav").style.backgroundColor = "transparent";
      }
    },
  },
};
</script>
<style>
nav {
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
  position: fixed;
  width: 75%;
  padding: 10px 20px;
  z-index: 9999;
  border-radius: 0.75rem;
}
.scrolled-nav {
  background-color: #fafdfb;
}
.breadcrumbs-container {
  display: flex;
}
.toolbar-container {
  display: flex;
  align-items: center;
}
.breadcrumbs-container h5 {
  font-size: 0.875rem;
  letter-spacing: 0.02857em;
  color: rgb(52, 71, 103);
  font-weight: 400;
}
.header-container h4 {
  font-size: 1rem;
  line-height: 1.625;
  letter-spacing: 0.0075em;
  color: rgb(52, 71, 103);
  font-weight: 700;
  margin-top: 7px;
}
.search-input {
  border: 0.3px solid #d2d6da;
  background: none transparent;
  height: 1.4375em;
  margin: 0px;
  width: 100%;
  color: rgb(73, 80, 87);
  padding: 0.75rem;
  border-radius: 5px;
  margin-right: 10px;
}
.toolbar-container :nth-child(3) {
  margin: 0px 10px;
}
@media only screen and (max-width: 576px) {
  nav {
    width: 90%;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  nav {
    width: 90%;
  }
}
@media (min-width: 767px) and (max-width: 992px) {
  nav {
    width: 60%;
  }
}
@media (min-width: 993px) and (max-width: 1300px) {
  nav {
    width: 70%;
  }
}
@media (min-width: 1301px) and (max-width: 1400px) {
  .numbers-statistic-item {
    margin: 20px 10px 0px 10px;
    width: 210px;
  }
}
@media (min-width: 1401px) and (max-width: 1600px) {
  .numbers-statistic-item {
    margin: 20px 10px 0px 10px;
    width: 260px;
  }
}
</style>
