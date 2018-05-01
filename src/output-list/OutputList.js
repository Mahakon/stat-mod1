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
      value: '',
      currnecy: ''
    }
  };

  render () {
    const { enablePurchase, fullPrice, comission } = this.props;
    return(
      <div styleName="output-container">
        <SubmitButton enablePurchase={enablePurchase}
                      fullPrice={fullPrice}/>
        <div styleName={cx(
          "comission",
          {"__invisible": !enablePurchase})}>
          Включая комиссию {comission.value + ' ' +
          comission.currency}
        </div>
      </div>
    )
  };
};
