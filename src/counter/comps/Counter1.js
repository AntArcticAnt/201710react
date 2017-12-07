import React, {Component} from 'react';
import {connect} from '../../react-redux';
import actions from '../store/actions/counter1';
import * as types from '../store/action-types';
//UI组件 木偶组件 傻瓜组件
class Counter1 extends Component {
  render() {
    return (
      <div>
        <p>数字:{this.props.number}</p>
        <button onClick={()=>this.props.add(3)}>+</button>
        <button onClick={()=>this.props.sub(2)}>-</button>
      </div>
    )
  }
}
//返回一个对象，这个对象的属性可能比原来状态 多，也有可能比原来的状态少
//{counter1:{number:1},counter2:{number:0}}
let mapStateToProps = state=>state.counter1;
//let mapDispatchToProps = actions;
//如果传入一个函数，则需要手工派发动作
//如果传入一个对象的话，则不用手工派发动作
export default connect(
  mapStateToProps,
  actions
)(Counter1);
/*
export default connect(
  mapStateToProps,
  (dispatch,ownProps)=>({
     add:(amount)=> dispatch({type:types.ADD1,payload:{amount}})
  })
)(Counter1);*/
