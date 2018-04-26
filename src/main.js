import styles from './styles/default.less';

import ReactDOM from 'react-dom';
import React from 'react';
import { LOTS_TITLE, SUM_TITLE } from './consts/InputTitles';
import { LOTS_NAME, SUM_NAME } from './consts/InputNames';
import MainFormContainer from './main-form/MainFormContainer';

const init = () => {
  function render() {
    const currency = '₽';
    const lotPrice = 109.7;
    const lotAmount = 25;
    const state = {
      lotPrice: lotPrice,
      currency: currency,
      lotAmount: lotAmount,
      enablePurchase: false,
      comission: '',
      fullPrice: '',
      inputArray: [
        {
          value: '',
          title: SUM_TITLE + currency,
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
            amount: lotPrice,
            units: currency
          }
        },
        {
          title: 'ДОСТУПНО ДЛЯ ПРОДАЖИ',
          data: {
            amount: lotAmount,
            units: 'лотов'
          }
        }
      ]
    };

    ReactDOM.render(
      <MainFormContainer state={state}/>,
      document.querySelector('#main-wrapper')
    )
  }

  render();
};

document.addEventListener('DOMContentLoaded', init);
