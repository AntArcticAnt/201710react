import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './todos.css'
class Todos extends React.Component {
  constructor() {
    super();
    this.state = {todos: [{id: 1, title: 'hello'}, {id: 2, title: 'world'}]};
  }

  handleClick = (event) => {
    let title = prompt('请输入待办事项');
    this.setState({todos: [...this.state.todos, {id: Date.now(), title}]});
  }

  render() {
    //classNames是存放一个类名，
    return (
      <div>
        <ul>
          <TransitionGroup>
            {
              this.state.todos.map((item, index) => (
                <CSSTransition
                  classNames="fade"
                  timeout={500}
                  key={item.id}
                >
                  <li >{item.title}</li>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </ul>
        <button onClick={this.handleClick}>添加</button>
      </div>
    )
  }
}
ReactDOM.render(<Todos/>, document.querySelector('#root'));