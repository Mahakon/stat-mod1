import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DebounceInput } from 'react-debounce-input';

import styles from './input.less';

@CSSModules(styles, {allowMultiple: true})
export default class Input extends React.Component {
  static propTypes = {
    numOrder: PropTypes.number.required,
    title: PropTypes.string.required,
    curValue: PropTypes.string.required,
    handleOnChange: PropTypes.func.required,
    name: PropTypes.string.required
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
          <DebounceInput minLength={0}
                         debounceTimeout={500}
                         styleName="input"
                         onChange={(event) => {
                           event.preventDefault();
                           return this.props.handleOnChange(event.target)
                         }
                         }
                         name={this.props.name}
                         value={this.props.curValue}/>
        </div>
      </div>
    )
  };
};

