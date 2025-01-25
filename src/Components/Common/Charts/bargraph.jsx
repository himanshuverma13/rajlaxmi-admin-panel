import React from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = (BarChartData) => {
  console.log('BarChartData: ', BarChartData);
  const options = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, ],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, ],
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
        columnWidth: '20%',
        borderRadius: 1,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', ],
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
  };

  return (
    <div>
      <h2>Financial Overview</h2>
      <div id="chart">
        <ApexCharts options={options} series={options.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default BarChart;
