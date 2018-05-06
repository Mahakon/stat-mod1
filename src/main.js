import ReactDOM from 'react-dom';
import React from 'react';


import './styles/default.less';

const init = () => {
  function render() {
    ReactDOM.render(
      <div>hello</div>,
      document.querySelector('#main-wrapper')
    )
  }

  render();
};

document.addEventListener('DOMContentLoaded', init);
