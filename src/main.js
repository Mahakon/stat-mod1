import ReactDOM from 'react-dom';
import React from 'react';
import MainForm from './main-form/MainForm';

import './styles/default.less';

const init = () => {
  function render() {
    ReactDOM.render(
      <MainForm currency={'₽'}
                         lotPrice={109.7}
                         lotAmount={25}/>,
      document.querySelector('#main-wrapper')
    )
  }

  render();
};

document.addEventListener('DOMContentLoaded', init);
