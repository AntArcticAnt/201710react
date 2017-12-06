import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class Content extends Component {
  static contextTypes = {
    color:PropTypes.string.isRequired
  }
  render() {
    return (
      <div style={{color:this.context.color}}>
        Content
      </div>
    )
  }
}