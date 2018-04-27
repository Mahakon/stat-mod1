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
      valus: '',
      currnecy: ''
    }
  };

  render () {
    return(
      <div styleName="container">
        <button styleName="submit-button"
                disabled={!this.props.enablePurchase}>
          <div styleName={cx(
            "loading-container",
            {"__display": this.props.enablePurchase})}>
            <div styleName="point"></div>
          </div>
          <div styleName={cx(
            "fullprice",
            {"__display": !this.props.enablePurchase})}>
            Продать на  {this.props.fullPrice.value + ' ' +
            this.props.fullPrice.currency}
          </div>
        </button>
      </div>
    )
  };
};
