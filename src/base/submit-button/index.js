import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.module.less';
import PropTypes from 'prop-types';
import cx from 'classnames'

@CSSModules(styles, {allowMultiple: true})
export default class SubmitButton extends React.Component {

  render () {
    return(
      <div styleName="container">
        <button styleName="submit-button">
          Продать
        </button>
      </div>
    )
  };
};
