import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './label-list.less';
import DataLabel from '../base/label/DataLabel';

@CSSModules(styles)
export default class LabelList extends React.Component {
  static propTypes = {
    lotPrice: PropTypes.number.required,
    currency: PropTypes.string.required,
    lotAmount: PropTypes.number.required
  };

  render () {
    const labelDataArray = [
      {
        title: '1 ЛОТ = 100 АКЦИЙ',
        content: {
          amount: this.props.lotPrice,
          units: this.props.currency
        }
      },
      {
        title: 'ДОСТУПНО ДЛЯ ПРОДАЖИ',
        content: {
          amount: this.props.lotAmount,
          units: 'лотов'
        }
      }
    ];

    return(
      <div styleName="label-container">
        {labelDataArray.map((labelData, i) =>
          <DataLabel order={i}
                     labelData={labelData}/>)}
      </div>
    )
  };
};
