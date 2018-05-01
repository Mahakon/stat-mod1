import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './main-form.less';

import OutputList from "../output-list/OutputList";
import LabelList from "../label-list/LabelList";
import InputList from "../input-list/InputList";

@CSSModules(styles)
export default class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enablePurchase: false,
      sum: '',
      lotsNum: '',
      fullPrice: {
        value: '',
        currnecy: ''
      },
      comission: {
        value: '',
        currnecy: ''
      }
    };

    this.handleOnValidInputData = this.handleOnValidInputData.bind(this);
    this.handleOnInValidInputData = this.handleOnInValidInputData.bind(this);
  }

  getFullPrice(lotSize) {
    return new Promise((resolve, reject) => {
      resolve({
        fullPrice: {
          value: Math.floor(Math.random() * (100000 - 1)) + 1,
          currency: '₽'
        },
        comission: {
          value: Math.floor(Math.random() * (100 - 1)) + 1,
          currency: '₽'
        },
      })
    })
  }

  handleOnInValidInputData() {
    this.setState({
      ...this.state,
      sum: '',
      lotsNum: '',
      enablePurchase: false
    })
  }

  handleOnValidInputData(sum, numLots) {
    this.getFullPrice(numLots)
      .then(
        ans =>
          this.setState({
            ...this.state,
            sum: sum,
            lotsNum: numLots,
            enablePurchase: true,
            fullPrice: ans.fullPrice,
            comission: ans.comission
          })
      )
  }

  render () {
    const { lotPrice, currency, lotAmount } = this.props;
    const { enablePurchase, sum, lotsNum, fullPrice, comission } = this.state;

    return(
      <div styleName="main-container">
        <form styleName="main-form">
          <LabelList lotPrice={lotPrice}
                     currency={currency}
                     lotAmount={lotAmount}/>
          <InputList currency={currency}
                     lotAmount={lotAmount}
                     lotPrice={lotPrice}
                     sum={sum}
                     lotsNum={lotsNum}
                     handleOnInValidInputData={this.handleOnInValidInputData}
                     handleOnValidInputData={this.handleOnValidInputData}/>
          <OutputList enablePurchase={enablePurchase}
                      comission={comission}
                      fullPrice={fullPrice}/>
        </form>
      </div>
    )
  };
};
