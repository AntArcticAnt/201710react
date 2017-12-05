import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class ChildCounter extends React.Component{
  //组件将要接收到新的属性
  componentWillReceiveProps(){
    console.log('ChildCounter 1.componentWillReceiveProps 组件将要接收到新的属性');
  }
  shouldComponentUpdate(props,state){
    console.log('ChildCounter 2.shouldComponentUpdate 子组件是否要更新');
   if(props.number<3){
     return true;
   }else{
     return false;
   }
  }
  render(){
    return (
      <div style={{border:'1px solid green'}}>
        <p>{this.props.number}</p>
      </div>
    )
  }
}
class Counter extends React.Component {
  //默认属性
  static defaultProps = {
    number: 0
  }
  //属性检查器，检查父组件传递给当前组件的类型
  static propTypes = {
    number: PropTypes.number.isRequired
  }
  //如果没有自定义状态或者其它私有属性，此构造函数可以不写
  constructor(props) {
    super(props);
    //定义一个状态对象，状态的属性值来自于组件的属性
    this.state = {number: this.props.number};
  }
  componentWillMount() {
    console.log('1. 组件将要挂载 componentWillMount');
  }
  //按理说状态发生修改后，组件要更新，但是此钩子函数可以让我们决定是否要更新,返回true就是可以更新，返回flase不更新
  //上一个属性对象 上一个状态对象
  shouldComponentUpdate(prevProps,prevState){
    console.log('4. 询问组件是否需要更新 shouldComponentUpdate');
    if(prevState.number<5){//如果新状态的number属性小于5的话
      return true;
    }else{
      return false;
    }
  }
  componentWillUpdate(){
    console.log('5. 组件将要更新 componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('6. 组件更新完成 componentDidUpdate');
  }
  handleClick = ()=>{
    this.setState(prevState=>({number:prevState.number+1}));
  }
  render() {
    console.log('2. 渲染 render');
    return (
      <div style={{border:'1px solid red'}}>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
        <ChildCounter number={this.state.number}/>
      </div>
    )
  }
  componentDidMount() {
    console.log('3. 组件挂载完成后 componentDidMount');
  }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));