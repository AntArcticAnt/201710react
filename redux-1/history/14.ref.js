/**
 * 受控组件 输入框的值受value控制
 * 非受控组件 输入框的值不受任何控制,没有给value赋值
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Form extends Component {
  constructor(){
    super();
    this.state = {username:''};
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.username);
  }
  handleChange = (event)=>{
    this.setState({username:event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
               type="text"
               onChange={this.handleChange}
               value={this.state.username} required/>
        <input type="submit"/>
      </form>
    )
  }
}
ReactDOM.render(<Form/>,document.querySelector('#root'));