/**
 * 受控组件 输入框的值受value控制
 * 非受控组件 输入框的值不受任何控制,没有给value赋值
 */
//ref的值是一个函数，当这个DOM对象挂载到页面之后执行绑定的函数,参数就是此react元素对应的真实DOM对象
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Form extends Component {
  constructor(){
    super();
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.username.value);
  }
  render() {
    //当这个input虚拟DOM转成真实DOM并插入到页面中之后，会调它元素上的ref函数，并且把这个真实DOM作为参数传到函数里
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="username" ref={input=>{
          console.log(input);
          this.username=input;
        }} type="text" required/>
        <input type="submit"/>
      </form>
    )
  }
}
ReactDOM.render(<Form/>,document.querySelector('#root'));