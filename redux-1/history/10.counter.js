import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
/**
 * 1. 组件的属性是由父组件传入的，状态的值是内部初始化
 * 2. 组件的属性不能修改，状态的值是可以修改的,是可以改变的
 * 3. 组件的值自己不能改，但是父组件可以改的
 * 3. 组件的状态是内部初始化的，只能组件内部修改,外部是不能修改。
 *
 * 1. 组件的属性和状态都是当前组件数据源
 * 2. 组件是属性是可以自上而下流动的。单向数据流.只能父传子，不能子传父，也不会兄弟之间传
 * 3.
 */
class Counter extends React.Component{
  //默认属性对象
  static defaultProps = {
    number:5
  }
  //静态属性是属于类的属性  Counter.propTypes
  //用来较验父组件传进来的属性的类型，如果是number就正常执行，如果不是number就报警告
  //Invalid prop `number` of type `string` supplied to `Counter`, expected `number`.
  //就像一个组件的说明书一个，表示了外部如何使用这个组件
  static propTypes = {
    number:PropTypes.number
  }
  constructor(props){
    super(props);
    this.state = {number:props.number};
  }
  handleClick = ()=>{
    //如果方法有多个setState,而且后一个state需要借助于上一个state计算出来,就只能用函数参数
   /*this.setState((prevState)=>({number:prevState.number+1}));
   this.setState((prevState)=>({number:prevState.number+2}));
   this.setState((prevState)=>({number:prevState.number+3}));*/
   this.setState({number:this.state.number+1},()=>{
     this.setState({number:this.state.number+2},()=>{
       this.setState({number:this.state.number+3},()=>{
         console.log(this.state.number);
       });
     });
   });
    console.log(this.state.number);
    /*
    为了提高性能，React可能会把多个setState调用合并成一个
    this.setState({number:1});
    this.setState({number:1});
    this.setState({number:1});
    */
  }
  render(){
    console.log('render');
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter number={"a"}/>,document.querySelector('#root'));