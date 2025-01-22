// // BarChart.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register necessary components of Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Utility function to generate random numbers (similar to Utils.numbers in your code)
// const generateNumbers = (count, min, max) => {
//   const numbers = [];
//   for (let i = 0; i < count; i++) {
//     numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
//   }
//   return numbers;
// };

// // Utility function to generate months (similar to Utils.months in your code)
// const generateMonths = (count) => {
//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   return months.slice(0, count);
// };

// const BarChart = () => {
//   const DATA_COUNT = 7;
//   const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
  
//   const labels = generateMonths(DATA_COUNT);

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: generateNumbers(NUMBER_CFG.count, NUMBER_CFG.min, NUMBER_CFG.max),
//         borderColor: 'rgb(255, 99, 132)', // red color
//         backgroundColor: 'rgba(255, 99, 132, 0.5)', // transparent red
//         width: '1px', //
//         borderWidth: "2px", // border width for bars
//       },
//       {
//         label: 'Dataset 2',
//         data: generateNumbers(NUMBER_CFG.count, NUMBER_CFG.min, NUMBER_CFG.max),
//         borderColor: 'rgb(54, 162, 235)', // blue color
//         backgroundColor: 'rgba(54, 162, 235, 0.5)', // transparent blue
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Bar Chart',
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

// export default BarChart;
import React from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = () => {
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
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, ],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
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
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
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
