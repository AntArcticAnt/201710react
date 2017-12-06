import React,{Component} from 'react';
import {connect} from 'react-redux';
import todos from '../store/actions/todos';
class TodoHeader extends Component{
    render(){
      //todos filter addTodo
      console.log(this.props);
      return (
          <input type="text" className="form-control" placeholder="请输入你想办的事"/>
        )
    }
}
/**
 * 输入 从仓库中读出状态树
 * 输出 把对当前组件操作发射dispatch到仓库中
 */
//把仓库中的状态树映射为当前组件的属性对象
let mapStateToProps = state=>state;//{todos,filter}
//把发射动作方法映射为当前组件的属性对象
let mapDispatchToProps = todos;
//最终当前组件实例的属性对象this.props等于 state和todos属性的合集
export default connect(
  //第一个参数是一个函数，参数是合并后的状态树，返回值会成为当前组件的属性对象
  mapStateToProps,//{todos:[],filter;'all'}
  mapDispatchToProps
)(TodoHeader);