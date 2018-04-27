import React from 'react';

import InputList from './InputList';
import { LOTS_NAME, SUM_NAME } from '../consts/InputNames';

export default class InputListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  handleOnInputChange(input) {
    let curSum = '', curNumLots = '';

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
          if (!Number.isInteger(Number.parseFloat(input.value))) {
            return this.props.handleOnInValidData();
          }

          curNumLots = (input.value > this.props.lotAmount) ?
            this.props.lotAmount :
            input.value;
          curSum = curNumLots * this.props.lotPrice;
        }break;
      }

      if (curSum === 0 || curNumLots === 0) {
        return this.props.handleOnInValidData();
      }

      return this.props.handleOnValidData(curSum, curNumLots);
    }

    return this.props.handleOnInValidData();
  }

  render () {
    return(
      <InputList inputArray={this.props.inputArray}
                 handleOnInputChange={this.handleOnInputChange}/>
    )
  };
};
