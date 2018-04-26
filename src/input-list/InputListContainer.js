import React from 'react';

import InputList from "./InputList";
import {LOTS_NAME, SUM_NAME} from "../consts/InputNames";

export default class InputListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputArray: this.props.inputArray
    };

    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  handleOnInputChange(input) {
    let curSum = '', curNumLots = '';
    console.log(input.value);

    if (input.value !== '' && this.isNumeric(input.value)) {
      switch (input.name) {
        case SUM_NAME: {
          curNumLots = (Math.floor(input.value / this.props.lotPrice) >
            this.props.lotAmount) ?
            this.props.lotAmount :
            Math.floor(input.value / this.props.lotPrice);
          curSum = (input.value > (this.props.lotAmount * this.props.lotPrice)) ?
            (this.props.lotAmount * this.props.lotPrice) :
            input.value;
        }break;
        case LOTS_NAME: {
          curNumLots = (input.value > this.props.lotAmount) ?
            this.props.lotAmount :
            input.value;
          curSum = curNumLots * this.props.lotPrice;
        }break;
      }

      return this.props.handleOnValidData(curSum, curNumLots);
    }
    this.setState((prevState) => {
      let curState = {...prevState};

      curState.inputArray[0].value = curSum;
      curState.inputArray[1].value = curNumLots;
      return curState;
    })

  }

  render () {
    return(
      <InputList inputArray={this.state.inputArray}
                 handleOnInputChange={this.handleOnInputChange}/>
    )
  };
};
