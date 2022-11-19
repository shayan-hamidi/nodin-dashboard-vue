export const DailyOptions = () => {
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
    credits: {
      enabled: false,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -10,
      y: 100,
      borderWidth: 0,

      labelFormatter: function () {
        if (this.name !== "Series 1") {
          return this.name;
        } else {
          return "Legend";
        }
      },
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
        name: "Mobile apps",
        Symbol: undefined,
        data: [10, 5, 300, 320, 480, 330, 200, 210, 560],
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
