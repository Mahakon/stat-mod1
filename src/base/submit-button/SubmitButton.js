import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './submit-button.less';

@CSSModules(styles, {allowMultiple: true})
export default class SubmitButton extends React.Component {
  static propTypes = {
    formValid: PropTypes.bool
  };

  static defaultProps = {
    formValid: false
  };

  render () {
    return(
      <div styleName="container">
        <button styleName="submit-button"
                disabled={!this.props.formValid}>
          <div styleName="loading-container">
            <div styleName="point"></div>
          </div>
        </button>
      </div>
    )
  };
};
