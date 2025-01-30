import React from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = ({BarChartData}) => {
  const sixMonthsData = BarChartData?.sixMonths?.data || [];

  // Create labels from sixMonths data
  const labels = sixMonthsData?.map((item) => {
    const [year, month] = item?.month?.split("-");
    const date = new Date(year, month - 1);
    return date?.toLocaleString("default", { month: "short" });
  });

  // Extract data for Monthly and Weekly datasets
  const monthValue = sixMonthsData?.map((item) =>
    parseInt(item?.monthly_total_sales, 10)
);

  const options = {
    series: [
      {
        name: 'Gau Swarn',
        data: monthValue,
      },
      {
        name: 'RajLaxmi',
        data: [1500, ],
      },
      // {
      //   name: 'Free Cash Flow',
      //   data: [35, 41, 36, 26, 45, 48, 52, ],
      // },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '45%',
        borderRadius: 7,
        // borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 7,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', ], // replace with labels variable
    },
    yaxis: {
      // title: {
      //   text: '$ (thousands)',
      // },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      // y: {
      //   formatter: function (val) {
      //     return '$ ' + val + ' thousands';
      //   },
      // },
    },
    colors: ['#0085db', '#fb977d'],
    responsive: [
      {
        breakpoint: 768, // Mobile devices
        options: {
          plotOptions: {
            bar: {
              columnWidth: '65%',
              borderRadius: 4,
            },
          },
          stroke: {
            show: true,
            width: 3,
            colors: ['transparent'],
          },
        },
      },
    ],
  };

  return (
    <div>
      {/* <h2>Financial Overview</h2> */}
      <div id="chart">
        <ApexCharts options={options} series={options.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default BarChart;
