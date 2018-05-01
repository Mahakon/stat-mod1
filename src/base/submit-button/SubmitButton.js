import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './submit-button.less';

@CSSModules(styles, {allowMultiple: true})
export default class SubmitButton extends React.Component {
  static propTypes = {
    enablePurchase: PropTypes.bool,
    fullPrice: PropTypes.object,
  };

  static defaultProps = {
    enablePurchase: false,
    fullPrice: {
      value: '',
      currency: ''
    }
  };

  render () {
    const enablePurchase = this.props.enablePurchase;
    const fullPrice = this.props.fullPrice;

    return(
      <div styleName="container">
        <button styleName="submit-button"
                disabled={!enablePurchase}>
          <div styleName={cx(
            "loading-container",
            {"__display": enablePurchase})}>
            <div styleName="point"></div>
          </div>
          <div styleName={cx(
            "fullprice",
            {"__display": !enablePurchase})}>
            Продать на  { fullPrice.value + ' ' +
            fullPrice.currency }
          </div>
        </button>
      </div>
    )
  };
};
