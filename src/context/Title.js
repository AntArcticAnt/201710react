import React, {Component} from 'react';
import PropTypes from 'prop-types';
//子组件如何接收上下文对象
//上下文不是直接就有的，而是需要主动声明并接收
export default class Title extends Component {
  //规定了本组件的上下文类型
  static contextTypes = {
    color:PropTypes.string.isRequired,
    setColor:PropTypes.func
  }
  //this.context是上下文对象
  render() {
    return (
      <div style={{color:this.context.color}}>
        标题
        <button onClick={()=>this.context.setColor('red')}>红</button>
        <button onClick={()=>this.context.setColor('green')}>绿</button>
      </div>
    )
  }
}