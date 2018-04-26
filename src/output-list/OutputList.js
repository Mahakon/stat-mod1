import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './output-list.less';
import SubmitButton from '../base/submit-button/SubmitButton';

@CSSModules(styles, {allowMultiple: true})
export default class OutputList extends React.Component {
  static propTypes = {
    enablePurchase: PropTypes.bool.required,
    currency: PropTypes.string.required
  };

  render () {
    return(
      <div styleName="output-container">
        <SubmitButton enablePurchase={this.props.enablePurchase}/>
        <div styleName={cx(
          "comission",
          {"__invisible": !this.props.enablePurchase}
        )}>
          Включая комиссию 45 {this.props.currency}
        </div>
      </div>
    )
  };
};
