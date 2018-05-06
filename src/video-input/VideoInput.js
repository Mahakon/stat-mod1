import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './video-input.less';
import SubmitButton from "../base/submit-button/SubmitButton";

@CSSModules(styles, {allowMultiple: true})
export default class VideoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camView: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      camView: true
    });

    let video = ReactDOM.findDOMNode(this).children[1];
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(stream => {
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.log("An error occurred! " + err);
      });

    let cap = new cv.VideoCapture(video);

    let frame = new cv.Mat(video.height, video.width, cv.CV_8UC4);
    let fgmask = new cv.Mat(video.height, video.width, cv.CV_8UC1);
    let fgbg = new cv.BackgroundSubtractorMOG2(500, 16, true);

    const FPS = 30;
    function processVideo() {
      let begin = Date.now();
      cap.read(frame);
      fgbg.apply(frame, fgmask);
      cv.imshow('canvas', fgmask);
      let delay = 1000/FPS - (Date.now() - begin);
      setTimeout(processVideo, delay);
    }

    setTimeout(processVideo, 0);
  }

  render () {
    const camView = this.state.camView;

    return(
      <div styleName="main-container">
        <SubmitButton handleClick={this.handleClick}
                      title="START"
                      invisible={camView}/>
        <video id="video"
               height="400"
               width="400"
               styleName={cx(
                 "video",
                 {"__display": !camView}
               )}>
        </video>
        <canvas id="canvas"
                styleName={cx(
                  "canvas",
                  {"__display": !camView}
                )}>
        </canvas>
      </div>
    )
  };
}
