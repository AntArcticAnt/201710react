import React, {Component} from 'react';
import Header from "./Header";
import Main from "./Main";
import PropTypes from 'prop-types';
/**
 * 如果希望一个组件的属性可以让任意的子组件能拿到，就需要定义上下文
 */
export default class App extends Component {
  constructor(){
    super();
    this.state = {color:'red'};
  }
  setColor = (color)=>{
    this.setState({color});
  }
  //规定了子上下文对象中的属性名称和类型以及是否必填
  static childContextTypes = {
     color:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    setColor:PropTypes.func
  }
  //指定上下文对象,在所有的子组件里都可以直接获取到这个对象
  getChildContext(){
    return {color:this.state.color,name:'zfpx',setColor:this.setColor}
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