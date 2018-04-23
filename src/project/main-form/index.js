import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.module.less';
import PropTypes from 'prop-types';
import cx from 'classnames'
import SubmitButton from "../../base/submit-button";
import InputData from "../input-data";
import NecessaryData from "../necessary-data";

@CSSModules(styles, {allowMultiple: true})
export default class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: '',
      numLots: ''
    };
    this.handleOnChangeNumLots = this.handleOnChangeNumLots.bind(this);
    this.handlerOnChangeSum = this.handlerOnChangeSum.bind(this);
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  static propTypes = {
    lotPrice: PropTypes.number.required,
    currency: PropTypes.string,
    lotAmount: PropTypes.number.required
  };

  static defaultProps = {
    currency: '₽'
  };

  handlerOnChangeSum(sum) {
    if (sum === '' || !this.isNumeric(sum)) {
      this.setState({
        sum: '',
        numLots: ''
      })
    } else {
      if (this.isNumeric(sum)) {
        let curNumLots = (Math.floor(sum / this.props.lotPrice) >
          this.props.lotAmount) ? this.props.lotAmount :
          Math.floor(sum / this.props.lotPrice);

        this.setState({
          sum: sum,
          numLots: curNumLots
        })
      }
    }
  }

  handleOnChangeNumLots(num) {
    if (num === '' || !this.isNumeric(num)) {
      this.setState({
        sum: '',
        numLots: ''
      })
    } else {
      if (this.isNumeric(num)) {
        let curNumLots = (num > this.props.lotAmount) ? this.props.lotAmount :
          num;

        this.setState({
          sum: curNumLots * this.props.lotPrice,
          numLots: curNumLots
        })
      }
    }
  }

  render () {
    return(
      <div styleName="main-container">
        <form styleName="main-form">
          <NecessaryData lotPrice={this.props.lotPrice}
                         currency={this.props.currency}
                         lotAmount={this.props.lotAmount}/>
          <InputData currency={this.props.currency}
                     onChangeNumLots={this.handleOnChangeNumLots}
                     onChangeSum={this.handlerOnChangeSum}
                     numLots={this.state.numLots}
                     sum={this.state.sum}/>
            <SubmitButton/>
        </form>
      </div>
    )
  };
};
