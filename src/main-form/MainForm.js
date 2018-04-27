import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './main-form.less';
import InputListContainer from '../input-list/InputListContainer';
import LabelList from '../label-list/LabelList';
import OutputList from '../output-list/OutputList';

@CSSModules(styles)
export default class MainForm extends React.Component {
  static propTypes = {
    formState: PropTypes.object.required,
    handleOnValidData: PropTypes.func.required,
    handleOnInValidData: PropTypes.func.required
  };

  render () {
    return(
      <div styleName="main-container">
        <form styleName="main-form">
          <LabelList labelArray={this.props.formState.labelArray}/>
          <InputListContainer inputArray={this.props.formState.inputArray}
                              handleOnValidData=
                                {this.props.handleOnValidData}
                              handleOnInValidData=
                                {this.props.handleOnInValidData}
                              lotAmount={this.props.formState.lotAmount}
                              lotPrice={this.props.formState.lotPrice}/>
          <OutputList comission={this.props.formState.comission}
                      enablePurchase=
                        {this.props.formState.enablePurchase}
                      fullPrice={this.props.formState.fullPrice}/>
        </form>
      </div>
    )
  };
};
