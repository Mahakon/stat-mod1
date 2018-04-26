import React from 'react';

import MainForm from './MainForm'

export default class MainFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;

    this.handleOnValidData = this.handleOnValidData.bind(this);
  }

  getFullPrice(lotSize) {
    return new Promise((resolve, reject) => {
      resolve({
        fullPrice: { value: 100000, currency: 'RUB' },
        comission: { value: 100, currency: 'RUB' }
      })
    })
  }

  handleOnValidData(sum, numLots) {
    this.getFullPrice(numLots)
      .then(
        ans =>
          this.setState((prevState) => {
            let curState = {...prevState};

            curState.inputArray[0].value = sum;
            curState.inputArray[1].value = numLots;
            curState.comission = ans.comission.value;
            curState.fullPrice = ans.fullPrice.value;
            curState.enablePurchase = true;
            return curState;
          }),
        err => {

        }
      )
  }

  render () {
    return(
      <MainForm formState={this.state}
                handleOnValidData={this.handleOnValidData}/>
    )
  };
};
