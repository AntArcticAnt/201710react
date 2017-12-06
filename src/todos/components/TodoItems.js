import React, {Component} from 'react';
import {connect} from 'react-redux';
class TodoItems extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.todos.map((item,index)=>(
            <li key={item.id} className="list-group-item">
              {item.text}
            </li>
          ))
        }
      </ul>
    )
  }
}
export default connect(
  state=>state
)(TodoItems);