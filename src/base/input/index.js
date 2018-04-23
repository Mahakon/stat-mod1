import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.module.less';
import PropTypes from 'prop-types';
import cx from 'classnames'

@CSSModules(styles, {allowMultiple: true})
export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    title: PropTypes.string,
    numOrder: PropTypes.number,
    handleOnChange: PropTypes.func.required,
    curValue: PropTypes.string.required
  };

  static defaultProps = {
    title: 'Количество лотов',
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
        <div styleName="input-view">
          <input styleName="input"
                 onChange={(event) =>
                   this.props.handleOnChange(event.target.value)
                 }
                 value={this.props.curValue}/>
        </div>
      </div>
    )
  };
};

