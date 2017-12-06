import React, {Component} from 'react';
import PropTypes from 'prop-types';
//子组件如何接收上下文对象
//上下文不是直接就有的，而是需要主动声明并接收
export default class Title extends Component {
  //规定了本组件的上下文类型
  static contextTypes = {
    color:PropTypes.string.isRequired
  }
  //this.context是上下文对象
  render() {
    console.log(this.context);
    return (
      <div style={{color:this.context.color}}>
        Title
      </div>
    )
  }
}