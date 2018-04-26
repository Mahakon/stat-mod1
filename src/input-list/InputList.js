import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './input-list.less';
import Input from "../base/input/Input";

@CSSModules(styles)
export default class InputList extends React.Component {
  static propTypes = {
    inputArray: PropTypes.array.required,
    handleOnInputChange: PropTypes.func.required
  };

  render () {
    return(
      <div styleName="input-container">
        {this.props.inputArray.map((input, i) =>
          <Input key={i}
                 title={input.title}
                 name={input.name}
                 numOrder={i}
                 curValue={input.value}
                 handleOnChange={this.props.handleOnInputChange}/>)}
      </div>
    )
  };
};
