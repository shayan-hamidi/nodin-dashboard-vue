<template>
  <div class="dashboard-table-overviews-container">
    <div class="overview-header">
      <div class="overview-title-container">
        <h6>Projects</h6>
        <div>
          <span><strong>30 done</strong> this month</span>
        </div>
      </div>
      <div class="overview-action-container"></div>
    </div>
    <div class="overview-details">
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th><div>COMPANIES</div></th>
              <th><div>MEMBERS</div></th>
              <th><div>BUDGET</div></th>
              <th><div>COMPLETION</div></th>
            </tr>
          </thead>
          <tbody>
            <SingleTableRow
              logo="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg"
              logoName="Material UI XD Version"
              budget="$14,000"
              userLogo="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
              progressParentBackground="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
              progressParentWidth="60"
            />
            <SingleTableRow
              logo="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg"
              logoName="Add Progress Track"
              budget="$3,000"
              userLogo="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
              progressParentWidth="10"
              progressParentBackground="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
            />
            <SingleTableRow
              logo="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg"
              logoName="Fix Platform Errors"
              budget="Not set"
              userLogo="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
              progressParentWidth="100"
              progressParentBackground="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
            />
            <SingleTableRow
              logo="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg"
              logoName="Launch our Mobile App"
              budget="$20,500"
              userLogo="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
              progressParentWidth="100"
              progressParentBackground="linear-gradient(195deg, rgb(102, 187,
            106), rgb(67, 160, 71))"
            />
            <SingleTableRow
              logo="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg"
              logoName="Add the New Pricing Page"
              budget="$500"
              userLogo="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
              progressParentWidth="20"
              progressParentBackground="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
            />
            <SingleTableRow
              logo="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg"
              logoName="Redesign New Online Shop"
              budget="$2,000"
              userLogo="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
              progressParentWidth="30"
              progressParentBackground="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import SingleTableRow from "./SingleTableRow.vue";
export default {
  name: "DashboardTableOverViews",
  components: {
    SingleTableRow,
  },
};
</script>
<style>
.dashboard-table-overviews-container {
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  overflow-wrap: break-word;
  background-color: rgb(255, 255, 255);
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
  margin: 0px 10px 40px 10px;
}
.overview-header {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 24px;
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
  box-shadow: none;
}
.overview-details {
  color: rgb(52, 71, 103);
  padding: 20px;
}
.overview-title-container {
  color: rgb(52, 71, 103);
}
.overview-action-container {
  padding-left: 16px;
  padding-right: 16px;
  color: rgb(123, 128, 154);
}
.overview-title-container h6 {
  margin: 0px 0px 0.35em;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.0075em;
  color: rgb(52, 71, 103);
}
.overview-title-container span {
  font-size: 0.875rem;
  letter-spacing: 0.02857em;
  color: rgb(123, 128, 154);
  font-weight: 400;
}
.table-container {
  width: 100%;
  overflow-x: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 0.75rem;
}
table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
}
table thead {
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
  box-shadow: none;
}
table tbody {
  display: table-row-group;
}
table tbody tr {
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
}
table thead tr th {
  width: 45%;
  padding: 12px 24px;
  background: transparent;
  color: rgb(52, 71, 103);
  box-shadow: none;
  border-bottom: 0.0625rem solid rgb(240, 242, 245);
}
table thead tr th div {
  position: relative;
  text-align: left;
  opacity: 0.7;
  color: rgb(123, 128, 154);
  box-shadow: none;
  font-size: 0.65rem;
  font-weight: 700;
}
table tbody tr td div {
  margin: 10px 0px;
}
</style>
