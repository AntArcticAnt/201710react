import React, {Component} from 'react';
import * as types from '../store/action-types';
import store from '../store';
/**
 * 1. 完成reducer
 * 2. 绑定减1的事件处理函数
 * 3. 让当前组件订阅仓库状态变化事件，当仓库状态发生改变后要生渲染组件
 */
export default class Counter extends Component {
  render() {
    return (
      <div>
        <p>{store.getState().number}</p>
        <button onClick={()=>store.dispatch({type:types.ADD})}>+</button>
        <button>-</button>
      </div>
    )
  }
}