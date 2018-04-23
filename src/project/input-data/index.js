import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.module.less';
import PropTypes from 'prop-types';
import cx from 'classnames'
import SubmitButton from "../../base/submit-button";
import Input from "../../base/input";

@CSSModules(styles, {allowMultiple: true})
export default class InputData extends React.Component {
  static propTypes = {
    currency: PropTypes.string.required,
    onChangeNumLots: PropTypes.func.required,
    onChangeSum: PropTypes.func.required,
    sum: PropTypes.string.required,
    numLots: PropTypes.string.required
  };

  render () {
    return(
      <div styleName="container">
        <Input handleOnChange={this.props.onChangeNumLots}
               curValue={this.props.numLots}/>
        <Input title={'Сумма Продажи, ' + this.props.currency}
               numOrder={1}
               handleOnChange={this.props.onChangeSum}
               curValue={this.props.sum}/>
      </div>
    )
  };
};
