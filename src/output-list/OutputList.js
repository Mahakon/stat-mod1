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
    comission: PropTypes.object,
    fullPrice: PropTypes.object.required
  };

  static defaultProps = {
    comission: {
      valus: '',
      currnecy: ''
    }
  };

  render () {
    return(
      <div styleName="output-container">
        <SubmitButton enablePurchase={this.props.enablePurchase}
                      fullPrice={this.props.fullPrice}/>
        <div styleName={cx(
          "comission",
          {"__invisible": !this.props.enablePurchase}
        )}>
          Включая комиссию {this.props.comission.value + ' ' +
          this.props.comission.currency}
        </div>
      </div>
    )
  };
};
