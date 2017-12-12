import React from 'react';
import ReactDOM from 'react-dom';
import {Transition} from 'react-transition-group';
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
      <div>
        <button
          onClick={this.handleClick}
        >{this.state.show ? '隐藏' : '显示'}</button>
        <Transition in={this.state.show}>
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