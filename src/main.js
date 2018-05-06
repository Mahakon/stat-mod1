import ReactDOM from 'react-dom';
import React from 'react';
import VideoInput from './video-input/VideoInput'

import './styles/default.less';

const init = () => {
  function render() {
    ReactDOM.render(
      <VideoInput/>,
      document.querySelector('#main-wrapper')
    )
  }

  render();
};

document.addEventListener('DOMContentLoaded', init);
