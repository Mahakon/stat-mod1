import React from 'react';

import OutputList from './OutputList';

export default class OutputListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: this.props.currency,
      enablePurchase: this.props.enablePurchase
    };
  }

  render () {
    return(
      <OutputList currency={this.state.currency}
                  enablePurchase={this.props.enablePurchase}/>
    )
  };
};
