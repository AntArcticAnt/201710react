import React, {Component} from 'react';
import * as types from '../store/action-types';
import store from '../store';
/**
 * 1. 完成reducer
 * 2. 绑定减1的事件处理函数
 * 3. 让当前组件订阅仓库状态变化事件，当仓库状态发生改变后要生渲染组件
 */
export default class Counter extends Component {
  constructor(){
    super();
    this.state = {number:store.getState().number};
  }
  //从 React16开始，不要再用WillMount,因为WillMount可能会触发多次
  componentDidMount(){
    this.unSubscribe = store.subscribe(()=>{
      this.setState({number:store.getState().number});
    })
  }
  componentWillUnmount(){
    this.unSubscribe();
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch({type:types.ADD})}>+</button>
        <button onClick={()=>store.dispatch({type:types.SUB})}>-</button>
      </div>
    )
  }
}