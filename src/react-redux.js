import React from 'react';
import PropTypes from 'prop-types';
/**
 * 接收store属性，并且把store放在子组件的上下文对象上
 */
export class Provider extends React.Component{
  static propTypes = {
    children:PropTypes.element
  }
  //子组件上下文类型
  static childContextTypes = {
    store:PropTypes.object,
  }
  //获取子组件上下文对象
  getChildContext(){
   return {store:this.props.store};
  }
  //没有自己的样式，子组件长什么样就就显示什么样
  //只能有一个子组件
  render(){
      return this.props.children;
  }
}