import React, {Component} from 'react';
import {connect} from '../../react-redux';
import actions from '../store/actions/counter1';

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
export default connect(
  mapStateToProps,
  actions
)(Counter1);