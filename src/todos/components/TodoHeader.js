import React,{Component} from 'react';
import {connect} from 'react-redux';
import todos from '../store/actions/todos';
class TodoHeader extends Component{
    render(){
        return (
          <input type="text" className="form-control" placeholder="请输入你想办的事"/>
        )
    }
}
/**
 * 输入 从仓库中读出状态树
 * 输出 把对当前组件操作发射dispatch到仓库中
 */
export default connect(
  //第一个参数是一个函数，参数是合并后的状态树，返回值会成为当前组件的属性对象
   state=>state,//{todos:[],filter;'all'}
   todos
)(TodoHeader);