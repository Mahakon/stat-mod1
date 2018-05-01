import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './input-list.less';
import Input from '../base/input/Input';

import { LOTS_NAME, SUM_NAME } from "../consts/InputNames";

@CSSModules(styles)
export default class InputList extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }
  static propTypes = {
    sum: PropTypes.string.required,
    lotsNum: PropTypes.string.required,
    lotPrice: PropTypes.number.required,
    lotAmount: PropTypes.number.required,
    currency: PropTypes.string.required,
    handleOnValidInputData: PropTypes.func.required,
    handleOnInValidInputData: PropTypes.func.required
  };

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  handleOnInputChange({ value, name}) {
    const {
      lotPrice,
      lotAmount,
      handleOnValidInputData,
      handleOnInValidInputData } = this.props;

    let curSum = '', curNumLots = '';

    if (value !== '' && this.isNumeric(value)) {
      switch (name) {
        case SUM_NAME: {
          curNumLots = (Math.floor(value / lotPrice) >
            lotAmount) ?
            lotAmount :
            Math.floor(value / lotPrice);
          curSum = (value > (lotAmount * lotPrice)) ?
            (lotAmount * lotPrice) :
            value;
        } break;

        case LOTS_NAME: {
          if (!Number.isInteger(Number.parseFloat(value))) {
            return handleOnInValidInputData();
          }

          curNumLots = (value > this.props.lotAmount) ?
            this.props.lotAmount :
            value;
          curSum = curNumLots * this.props.lotPrice;
        } break;
      }

      if (curSum === 0 || curNumLots === 0) {
        return handleOnInValidInputData();
      }

      return handleOnValidInputData(curSum, curNumLots);
    }

    return handleOnInValidInputData();
  }

  render () {
    const inputDataArray = [
      {
        title: 'Количество лотов',
        name: LOTS_NAME,
        value: this.props.lotsNum
      },
      {
        title: 'Сумма Продажи, ' + this.props.currency,
        name: SUM_NAME,
        value: this.props.sum
      }
    ];

    return(
      <div styleName="input-container">
        {inputDataArray.map((inputData, i) =>
          <Input key={i}
                 order={i}
                 inputData={inputData}
                 handleOnChange={this.handleOnInputChange}/>)}
      </div>
    )
  };
};
