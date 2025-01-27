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



import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

const DonutChart = ({ DonutChartData }) => {
  const weeklyData = DonutChartData?.week?.data || [];

  // Extract data for the donut chart
  const weekValue = weeklyData?.map((item) =>
    parseInt(item?.daily_total_sales, 10)
  );

  const [series, setSeries] = useState([...weekValue, 440, 550, 130, 33,27]);
  const labels = [" A", " B", " C", " D", " E", " F", " G"];
  const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#546E7A", "#26a69a"];

  const options = {
    chart: {
      width: 380,
      type: "donut",
    },
    labels,
    colors,
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 150,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  };

  return (
    <>
      <div>
        <div id="chart">
          <ApexCharts options={options} series={series} type="donut" width={200} />
        </div>

        <div className="d-flex">
          {/* <ul className=" justify-content-center list-unstyled"> */}
            {series.map((_, index) => (
              <div key={index} className="mx-2 d-flex align-items-center">
                <span
                  className="round-12 me-2 rounded-circle d-inline-block"
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: colors[index % colors.length],
                  }}
                ></span>{" "}
                {labels[index] || `Data ${index + 1}`}
              </div >
            ))}
          {/* </ul> */}
        </div>
      </div>
    </>
  );
};

export default DonutChart;
