import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.module.less';
import PropTypes from 'prop-types';
import cx from 'classnames'

@CSSModules(styles, {allowMultiple: true})
export default class DataLabel extends React.Component {
  static propTypes = {
    title: PropTypes.string.required,
    data: {
      amount: PropTypes.number.required,
      units: PropTypes.string.required
    },
    numOrder: PropTypes.number
  };

  static defaultProps = {
    numOrder: 0
  };

  render () {
    return(
      <div styleName={cx(
                       "container",
                       {"__left": !(this.props.numOrder & 1)},
                       {"__right": (this.props.numOrder & 1)})}>
        <div styleName="title">
          {this.props.title}
        </div>
        <div styleName="output-data">
          {this.props.data.amount + ' ' + this.props.data.units}
        </div>
      </div>
    )
  };
};

