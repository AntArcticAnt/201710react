import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
class Todos extends React.Component {
  constructor() {
    super();
    this.state = {todos: [{id: 1, title: 'hello'}, {id: 2, title: 'world'}]};
  }
  handleClick = (event)=>{
    let title = prompt('请输入待办事项');
    this.setState({todos:[...this.state.todos,{id:Date.now(),title}]});
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.todos.map((item, index) => (
              <li key={item.id}>{item.title}</li>
            ))
          }
        </ul>
        <button onClick={this.handleClick}>添加</button>
      </div>
    )
  }
}
ReactDOM.render(<Todos/>,document.querySelector('#root'));