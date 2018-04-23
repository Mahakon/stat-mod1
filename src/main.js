import styles from './styles/default.less';

import ReactDOM from 'react-dom';
import React from 'react';
import MainForm from "./project/main-form";

const init = () => {
  function render() {
    ReactDOM.render(
      <MainForm lotPrice={109.7}
                currency={'₽'}
                lotAmount={25}/>,
      document.querySelector('#main-wrapper')
    )
  }

  render();
};

document.addEventListener('DOMContentLoaded', init);
