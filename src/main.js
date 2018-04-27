import styles from './styles/default.less';

import ReactDOM from 'react-dom';
import React from 'react';
import MainFormContainer from './main-form/MainFormContainer';

const init = () => {
  function render() {
    const currency = '₽';
    const lotPrice = 109.7;
    const lotAmount = 25;

    ReactDOM.render(
      <MainFormContainer currency={currency}
                         lotPrice={lotPrice}
                         lotAmount={lotAmount}/>,
      document.querySelector('#main-wrapper')
    )
  }

  render();
};

document.addEventListener('DOMContentLoaded', init);
