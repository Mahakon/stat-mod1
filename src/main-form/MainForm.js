import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './main-form.less';
import SubmitButton from '../base/submit-button/SubmitButton.js';
import InputListContainer from "../input-list/InputListContainer";
import LabelList from "../label-list/LabelList";
import OutputListContainer from "../output-list/OutputListContainer";

@CSSModules(styles)
export default class MainForm extends React.Component {
  static propTypes = {
    formState: PropTypes.object.required
  };

  render () {
    return(
      <div styleName="main-container">
        <form styleName="main-form">
          <LabelList labelArray={this.props.formState.labelArray}/>
          <InputListContainer inputArray={this.props.formState.inputArray}
                              handleOnValidData=
                                {this.props.handleOnValidData}
                              lotAmount={this.props.formState.lotAmount}
                              lotPrice={this.props.formState.lotPrice}/>
          <OutputListContainer currency={this.props.formState.currency}
                               enablePurchase=
                                 {this.props.formState.enablePurchase}/>
        </form>
      </div>
    )
  };
};
