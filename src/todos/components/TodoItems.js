import React, {Component} from 'react';
import {connect} from 'react-redux';
import './TodoItems.css'
import actions from '../store/actions/todos';
class TodoItems extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.todos.map((item,index)=>(
            <li key={item.id} className="list-group-item">
              {item.text}
              <button
                onClick={()=>this.props.delTodo(item.id)}
                className="btn btn-danger btn-xs pull-right btn-del-todo">删除</button>
            </li>
          ))
        }
      </ul>
    )
  }
}
export default connect(
  state=>state,
  actions
)(TodoItems);