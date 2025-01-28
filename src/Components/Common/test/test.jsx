import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {
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
                      'Total<br/>' +
                      '<strong>2 877 820</strong>'
                    )
                      .css({
                        color: '#000',
                        textAnchor: 'middle'
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
                fontSize: `${series.center[2] / 12}px`
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
          innerSize: '75%',
          data: [{
            name: 'EV',
            y: 23.9
          }, {
            name: 'Hybrids',
            y: 12.6
          }, {
            name: 'Diesel',
            y: 37.0
          }, {
            name: 'Petrol',
            y: 26.4
          }]
        }]
      });
    }
  }, []);

  return (
    <div className="highcharts-figure">
      <div ref={chartRef} id="container"></div>
    </div>
  );
};

export default PieChart;
