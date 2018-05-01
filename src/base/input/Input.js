import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DebounceInput } from 'react-debounce-input';

import styles from './input.less';

@CSSModules(styles, {allowMultiple: true})
export default class Input extends React.Component {
  static propTypes = {
    order: PropTypes.number.required,
    inputData: {
      title: PropTypes.string.required,
      name: PropTypes.string.required,
      value: PropTypes.string.required,
    },
    handleOnChange: PropTypes.func.required,
  };

  render () {
    const order = this.props.order;
    const  { title, name, value } = this.props.inputData;

    return(
      <div styleName={cx(
                       "container",
                       {"__left": !(order & 1)},
                       {"__right": (order & 1)})}>

        <div styleName="title">
          {title}
        </div>
        <div styleName="input-view">
          <DebounceInput minLength={0}
                         debounceTimeout={500}
                         styleName="input"
                         name={name}
                         value={value}
                         onChange={(event) =>
                           this.props.handleOnChange(event.target)}/>
        </div>
      </div>
    )
  };
};

