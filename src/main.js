import ReactDOM from 'react-dom';
import React from 'react';
import Graph from './graphs/Graph'

import './styles/default.less';

const init = () => {
  function render() {
    ReactDOM.render(
      <Graph/>,
      document.querySelector('#main-wrapper')
    )
  }

  render();
};

document.addEventListener('DOMContentLoaded', init);
