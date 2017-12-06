import React, {Component} from 'react';
import Header from "./Header";
import Main from "./Main";
import PropTypes from 'prop-types';
/**
 * 如果希望一个组件的属性可以让任意的子组件能拿到，就需要定义上下文
 */
export default class App extends Component {
  //规定了子上下文对象中的属性名称和类型以及是否必填
  static childContextTypes = {
     color:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
  }
  //指定上下文对象,在所有的子组件里都可以直接获取到这个对象
  getChildContext(){
    return {color:'red',name:'zfpx'}
  }
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}