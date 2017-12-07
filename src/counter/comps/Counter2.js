import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import actions from '../store/actions/counter2';
import store from '../store';
/**
 * 1. 完成reducer
 * 2. 绑定减1的事件处理函数
 * 3. 让当前组件订阅仓库状态变化事件，当仓库状态发生改变后要生渲染组件
 */
export default class Counter2 extends Component {
  constructor(){
    super();
    this.state = {number:store.getState().counter2.number};
  }
  //从 React16开始，不要再用WillMount,因为WillMount可能会触发多次
  componentDidMount(){
    this.unSubscribe = store.subscribe(()=>{
      this.setState({number:store.getState().counter2.number});
    })
  }
  //Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component.
  componentWillUnmount(){
    this.unSubscribe();
  }
  kill = ()=>{
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch(actions.add(3))}>+</button>
        <button onClick={()=>store.dispatch(actions.sub(2))}>-</button>
        <button onClick={this.kill}>kill</button>
      </div>
    )
  }
}