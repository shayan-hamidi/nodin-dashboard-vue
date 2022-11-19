export const WebsiteOptions = () => {
    const chartOptions = {
        points: [10, 0, 8, 2, 6, 4, 5, 5],
        chartType: "Spline",
        seriesColor: "#6fcd98",
        colorInputIsSupported: null,
        chart: {
          type: "column",
          backgroundColor: "transparent",
          height: 190,
          width: 330,
          style: {
            marginTop: "10",
            height: "240",
          },
        },
        title: {
          text: "",
        },
        xAxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
        },
        yAxis: {
          min: 0,
          title: {
            text: "",
          },
          max: 60,
          tickInterval: 20,
        },
        plotOptions: {
          column: {
            pointPadding: 0.15,
            borderWidth: 0,
            showInLegend: false,
          },
          series: {
            borderRadius: 5,
          },
        },
        series: [
          {
            Symbol: undefined,
            data: [49, 19.9, 10, 21, 49, 10, 40],
          },
        ],
        credits: {
          enabled: false,
        },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                chart: {
                  className: "small-chart",
                },
              },
            },
          ],
        },
      }
  return chartOptions
};
