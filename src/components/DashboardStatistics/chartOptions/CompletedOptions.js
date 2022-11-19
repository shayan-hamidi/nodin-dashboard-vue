export const CompletedOptions = () => {
  const chartOptions = {
    chart: {
      backgroundColor: "transparent",
      height: 200,
      width: 330,
      style: {
        marginTop: "13",
        marginRight: "5",
        height: "240",
      },
    },
    title: {
      text: "",
    },

    subtitle: {
      text: "",
    },

    yAxis: {
      style: {
        color: "white",
      },
      min: 0,
      title: {
        text: "",
      },
      max: 600,
      tickInterval: 200,
    },

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      showInLegend: false,
      symbolHeight: 0,
      symbolWidth: 0,
      symbolRadius: 0,
      x: -10,
      y: 100,
      borderWidth: 0,

      labelFormatter: function () {
        if (this.name === "Series 1") {
          return this.name;
        } else {
          return "Legend";
        }
      },
    },
    credits: {
      enabled: false,
    },

    plotOptions: {
      column: {
        pointPadding: 0.15,
        borderWidth: 0,
        showInLegend: false,
      },
      series: {
        color: "white",
      },
    },

    series: [
      {
        name: "Desktop apps",
        data: [10, 5, 300, 200, 500, 210, 400, 200, 490],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  return chartOptions;
};
