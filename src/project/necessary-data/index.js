import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.module.less';
import PropTypes from 'prop-types';
import cx from 'classnames'
import SubmitButton from "../../base/submit-button";
import DataLabel from "../../base/label";

@CSSModules(styles, {allowMultiple: true})
export default class NecessaryData extends React.Component {
  static propTypes = {
    lotPrice: PropTypes.number.required,
    currency: PropTypes.string.required,
    lotAmount: PropTypes.number.required
  };

  render () {
    return(
      <div styleName="container">
        <DataLabel title={'1 ЛОТ = 100 АКЦИЙ'}
                   data={
                     {
                       amount: this.props.lotPrice,
                       units: this.props.currency
                     }}/>
        <DataLabel title={'ДОСТУПНО ДЛЯ ПРОДАЖИ'}
                   numOrder={1}
                   data={
                     {
                       amount: this.props.lotAmount,
                       units: 'лотов'
                     }}/>
      </div>
    )
  };
};
