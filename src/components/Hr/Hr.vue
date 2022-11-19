<template>
  <hr class="hr" />
</template>
<script>
export default {
  name: "DashboardHr",
};
</script>
<style>
.hr {
  flex-shrink: 0;
  border-top: 0px solid rgba(0, 0, 0, 0.12);
  border-right: 0px solid rgba(0, 0, 0, 0.12);
  border-left: 0px solid rgba(0, 0, 0, 0.12);
  background-color: transparent;
  height: 0.0625rem;
  margin: 1rem 0px;
  opacity: 0.25;
  background-image: linear-gradient(
    to right,
    rgba(52, 71, 103, 0),
    rgba(52, 71, 103, 0.4),
    rgba(52, 71, 103, 0)
  ) !important;
}
</style>
