import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './label-list.less';
import DataLabel from '../base/label/DataLabel';


@CSSModules(styles)
export default class LabelList extends React.Component {
  static propTypes = {
    labelArray: PropTypes.array.required
  };

  render () {
    return(
      <div styleName="label-container">
        {this.props.labelArray.map((label, i) =>
          <DataLabel title={label.title}
                     data={label.data}
                     numOrder={i}/>)}
      </div>
    )
  };
};
