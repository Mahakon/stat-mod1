import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames'

import styles from './label.less';

@CSSModules(styles, {allowMultiple: true})
export default class DataLabel extends React.Component {
  static propTypes = {
    order: PropTypes.number,
    labelData: {
      title: PropTypes.string.required,
      content: {
        amount: PropTypes.number.required,
        units: PropTypes.string.required
      }
    }
  };

  render () {
    const order = this.props.order;
    const {title, content} = this.props.labelData;

    return(
      <div styleName={cx(
                       "container",
                       {"__left": !(order & 1)},
                       {"__right": (order & 1)})}>
        <div styleName="title">
          {title}
        </div>
        <div styleName="output-data">
          {content.amount + ' ' + content.units}
        </div>
      </div>
    )
  };
};

