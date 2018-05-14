import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './graph.less';
import { Bar } from 'react-chartjs-2';
import calckf from "../utils/calckf";

@CSSModules(styles, {allowMultiple: true})
export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    const { f, k } = calckf(1000);

    console.log(f);
    this.state = {
      data: {
        labels: f,
        datasets: [
          {
            label: 'Кореллограмма',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: k
          }
        ]
      },
      options: {
        barPercentage: 1,
        scales: {
          yAxes: [{
            ticks: {
              max: 0.04,
              min: -0.04,
              stepSize: 0.005
            }
          }],
          xAxes: [{
            ticks: {
              max: 1000,
              min: 1,
              stepSize: 1
            }
          }]
        }
      }
    }
  }

  render () {
    const { data, options } = this.state;

    return(
      <div styleName="main-container">
        <Bar data={data}
                 options={options}/>
      </div>
    )
  };
}
