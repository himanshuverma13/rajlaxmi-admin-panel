import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const DonutChart = () => {
  const [series, setSeries] = useState([44, 55, 13, 33]);
  
  const options = {
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 150
          },
          legend: {
            show: false
          }
        }
      }
    ],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    }
  };

  const appendData = () => {
    const newSeries = [...series, Math.floor(Math.random() * (100 - 1 + 1)) + 1];
    setSeries(newSeries);
  };

  const removeData = () => {
    const newSeries = [...series];
    newSeries.pop();
    setSeries(newSeries);
  };

  const randomize = () => {
    const newSeries = series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    setSeries(newSeries);
  };

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  };

  return (
    <div>
      <div id="chart">
        <ApexCharts options={options} series={series} type="donut" width={200} />
      </div>
      {/* <div className="buttons">
        <button id="randomize" onClick={randomize}>Randomize</button>
        <button id="add" onClick={appendData}>Add Data</button>
        <button id="remove" onClick={removeData}>Remove Data</button>
        <button id="reset" onClick={reset}>Reset</button>
      </div> */}
    </div>
  );
};

export default DonutChart;
