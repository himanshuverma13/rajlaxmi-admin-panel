// import React, { useState } from "react";
// import ApexCharts from "react-apexcharts";

// const DonutChart = ({ DonutChartData }) => {
//   const weeklyData = DonutChartData?.week?.data || [];

//   // Extract data for Monthly and Weekly datasets
//   const weekValue = weeklyData?.map((item) =>
//     parseInt(item?.daily_total_sales, 10)
//   );

//   const [series, setSeries] = useState([...weekValue, ...[440, 550, 130, 33]]);

//   const options = {
//     chart: {
//       width: 380,
//       type: "donut",
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 150,
//           },
//           legend: {
//             show: false,
//           },
//         },
//       },
//     ],
//     legend: {
//       position: "right",
//       offsetY: 0,
//       height: 230,
//     },
//   };

//   const appendData = () => {
//     const newSeries = [
//       ...series,
//       Math.floor(Math.random() * (100 - 1 + 1)) + 1,
//     ];
//     setSeries(newSeries);
//   };

//   const removeData = () => {
//     const newSeries = [...series];
//     newSeries.pop();
//     setSeries(newSeries);
//   };

//   const randomize = () => {
//     const newSeries = series.map(
//       () => Math.floor(Math.random() * (100 - 1 + 1)) + 1
//     );
//     setSeries(newSeries);
//   };

//   const reset = () => {
//     setSeries([44, 55, 13, 33]);
//   };

//   return (
//     <>
//       <div>
//         <div id="chart">
//           <ApexCharts
//             options={options}
//             series={series}
//             type="donut"
//             width={200}
//           />
//         </div>

//         <div>
//           <ul className="d-flex justify-content-center">
//             <li className="mx-2 d-flex align-items-center">
//               <span class="round-12 me-2 bg-primary rounded-circle d-inline-block"></span>{" "}
//               sale
//             </li>
            
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DonutChart;



// import React, { useState } from "react";
// import ApexCharts from "react-apexcharts";

// const DonutChart = ({ DonutChartData }) => {
//   const weeklyData = DonutChartData?.week?.data || [];

//   // Extract data for the donut chart
//   const weekValue = weeklyData?.map((item) =>
//     parseInt(item?.daily_total_sales, 10)
//   );

//   const [series, setSeries] = useState([...weekValue, 440, 550, 130, 33,27]);
//   const labels = [" A", " B", " C", " D", " E", " F", " G"];
//   const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#546E7A", "#26a69a"];

//   const options = {
//     chart: {
//       width: 380,
//       type: "donut",
//     },
//     labels,
//     colors,
//     plotOptions: {
//       pie: {
//         expandOnClick: true,
//         customScale: 1,
//         offsetX: 0,
//         offsetY: 0,
//         startAngle: 0,
//         endAngle: 360,
//         donut: {
//           size: "65%",
//           borderRadius: "5%",
//           columnWidth: "4%",
//           labels: {
//             show: true,
//             name: {
//               show: true,
//               fontSize: "16px",
//               fontWeight: "bold",
//             },
//             value: {
//               show: true,
//               fontSize: "14px",
//             },
//           },
//         },
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 150,
//           },
//           legend: {
//             show: false,
//           },
//         },
//       },
//     ],
//     legend: {
//       position: "right",
//       offsetY: 0,
//       height: 230,
//     },
//   };

//   return (
//     <>
//       <div>
//         <div id="chart">
//           <ApexCharts options={options} series={series} type="donut" width={200} />
//         </div>

//         <div className="d-flex">
//           {/* <ul className=" justify-content-center list-unstyled"> */}
//             {series.map((_, index) => (
//               <div key={index} className="mx-2 d-flex align-items-center">
//                 <span
//                   className="round-12 me-2 rounded-circle d-inline-block"
//                   style={{
//                     width: "12px",
//                     height: "12px",
//                     backgroundColor: colors[index % colors.length],
//                   }}
//                 ></span>{" "}
//                 {labels[index] || `Data ${index + 1}`}
//               </div >
//             ))}
//           {/* </ul> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DonutChart;

import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = ({ DonutChartData }) => {
  // console.log('DonutChartData: ', DonutChartData);

//   const weeklyData = DonutChartData?.week?.data || [];

//   // Extract data for Monthly and Weekly datasets
//   const weekValue = weeklyData?.map((item) =>
//     parseInt(item?.daily_total_sales, 10)
//   );

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = Highcharts.chart(chartRef.current, {
        chart: {
          type: 'pie',
          custom: {},
          events: {
            render() {
              const chart = this,
                    series = chart.series[0];
              let customLabel = chart.options.chart.custom.label;

              if (!customLabel) {
                customLabel = chart.options.chart.custom.label =
                    chart.renderer.label(
                      'Weekly<br/>' +
                      '<strong>80%</strong>'
                    )
                      .css({
                        color: '#000',
                        textAnchor: 'middle',
                      })
                      .add();
              }

              const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop -
                    (customLabel.attr('height') / 2);

              customLabel.attr({
                x,
                y
              });
              // Set font size based on chart diameter
              customLabel.css({
                fontSize: `${series.center[2] / 10}px`
              });
            }
          }
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        tooltip: {
          pointFormat: ''
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 100,
            dataLabels: [{
              enabled: false,
              distance: 20,
              format: '{point.name}'
            }, {
              enabled: false,
              distance: -5,
              format: '{point.percentage:.0f}%',
              style: {
                fontSize: '0.9em'
              }
            }],
            showInLegend: true
          }
        },
        series: [{
          name: 'Registrations',
          colorByPoint: true,
          innerSize: '80%',
          data: [{
            name: 'Day 1',
            y: 23.9
          }, {
            name: 'Day 2',
            y: 12.6
          }, {
            name: 'Day 3',
            y: 37.0
          }, {
            name: 'Day 4',
            y: 26.4
          }]
        }]
      });
    }
  }, []);

  return (
    <div className="highcharts-figure">
      <div ref={chartRef} className='donutChart-style' id="container"></div>
    </div>
  );
};

export default DonutChart;
