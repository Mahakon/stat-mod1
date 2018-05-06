import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './submit-button.less';

@CSSModules(styles, {allowMultiple: true})
export default class SubmitButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.required,
    handleClick: PropTypes.func.required,
    invisible: PropTypes.func.required
  };

  render () {
    const { title, invisible } = this.props;

    return(
      <div styleName={cx(
        "container",
        {"__display": invisible})}>
        <button styleName="submit-button"
                onClick={this.props.handleClick}>
          <div styleName="title">
            {title}
          </div>
        </button>
      </div>
    )
  };
};
