import React from 'react';

import MainForm from './MainForm';

import { LOTS_TITLE, SUM_TITLE } from '../consts/InputTitles';
import { LOTS_NAME, SUM_NAME } from '../consts/InputNames';

export default class MainFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lotPrice: this.props.lotPrice,
      currency: this.props.currency,
      lotAmount: this.props.lotAmount,
      enablePurchase: false,
      comission: {
        value: '',
        currnecy: ''
      },
      fullPrice: {
        value: '',
        currency: ''
      },
      inputArray: [
        {
          value: '',
          title: SUM_TITLE + this.props.currency,
          name: SUM_NAME
        },
        {
          value: '',
          title: LOTS_TITLE,
          name: LOTS_NAME
        }
      ],
      labelArray: [
        {
          title: '1 ЛОТ = 100 АКЦИЙ',
          data: {
            amount: this.props.lotPrice,
            units: this.props.currency
          }
        },
        {
          title: 'ДОСТУПНО ДЛЯ ПРОДАЖИ',
          data: {
            amount: this.props.lotAmount,
            units: 'лотов'
          }
        }
      ]
    };

    this.handleOnValidData = this.handleOnValidData.bind(this);
    this.handleOnInValidData = this.handleOnInValidData.bind(this);
  }

  getFullPrice(lotSize) {
    return new Promise((resolve, reject) => {
      resolve({
        fullPrice: {
          value: Math.floor(Math.random() * (100000 - 1)) + 1,
          currency: '₽'
        },
        comission: {
          value: Math.floor(Math.random() * (100 - 1)) + 1,
          currency: '₽'
        },
      })
    })
  }

  handleOnInValidData() {
    this.setState((prevState) => {
      let curState = {...prevState};

      curState.inputArray[0].value = '';
      curState.inputArray[1].value = '';
      curState.enablePurchase = false;
      return curState;
    })
  }

  handleOnValidData(sum, numLots) {
    this.getFullPrice(numLots)
      .then(
        ans =>
          this.setState((prevState) => {
            let curState = {...prevState};

            curState.inputArray[0].value = sum;
            curState.inputArray[1].value = numLots;
            curState.comission = ans.comission;
            curState.fullPrice = ans.fullPrice;
            curState.enablePurchase = true;
            return curState;
          })
      )
  }

  render () {
    return(
      <MainForm formState={this.state}
                handleOnValidData={this.handleOnValidData}
                handleOnInValidData={this.handleOnInValidData}/>
    )
  };
};
