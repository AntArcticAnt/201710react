import React from 'react';
import ReactDOM from 'react-dom';
//import {Transition} from 'react-transition-group';
const timeout = 300;//动画的持续时间
//默认样式
const defaultStyle = {
  transition: `opacity ${timeout}ms ease-in-out`,
  width: '200px',
  height: '100px',
  backgroundColor: 'lightGray'
}
const ENTERING = 'entering';//开始进入 状态字符串
const ENTERED = 'entered';//进入后   状态字符串

const transitionStyles = {
  [ENTERING]: {opacity: 0},//进入前透明度为0
  [ENTERED]: {opacity: 1},//进入后透明度为1
}

class Transition extends React.Component{
  constructor(){
    super();
    this.state = {state:''};//初始化默认状态
  }
  //组件将要接收到新的属性 in= false=true
  componentWillReceiveProps(newProps){
    //如果新的属性对象中in属性的值为true,就是说要开始显示，开始显示分成二步走，第一步把状态改为entering,也就是说透明度为0，在改完之后把状态设置为entered,也就是说透明度改为1，因为我们设置了transition,所以会有过渡动画
    if(newProps.in){
      this.setState({state:ENTERING});
      setTimeout(()=>{
        this.setState({state:ENTERED});
      },this.props.timeout)
    }

  }
  render(){
    return this.props.in?this.props.children(this.state.state):null;
  }
}

class FadePanel extends React.Component {
  constructor() {
    super();
    this.state = {show: false};
  }

  handleClick = () => {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      //state entering enter
      //Transition是如何渲染的呢？当收到新的属性后，会计算出新的状态，然后用新的状态调用子组件函数,最终渲染的其实是函数的返回值
      //子组件就是一个普通函数
      //如果 Transition 发现in=true,会走两步。第一步会把让state=entering, 调用函数，获取返回值。第二步会让state=entered,再次调用函数,获取返回值
      <div>
        <button
          onClick={this.handleClick}
        >{this.state.show ? '隐藏' : '显示'}</button>
        <Transition in={this.state.show} timeout={timeout}>
          {
            (state) => {
              return (
                <div style={{...defaultStyle,...transitionStyles[state]}}>
                  我是一个会褪色的DIV
                </div>
              )
            }
          }
        </Transition>
      </div>
    )
  }
}
ReactDOM.render(<FadePanel/>, document.querySelector('#root'));