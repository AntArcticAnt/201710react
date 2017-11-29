import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//如果你给一个输入框一个value值的话，那么那会变成只读的，不能修改
//如果还要编辑的话需要给input框添加一个onChange事件
class Input extends Component {
  handleChange = (event)=>{
    let percent = event.target.value;
    this.props.setPercent(percent);
  }
  render () {
    return (
      <div>
        <input
          type='number'
          onChange={this.handleChange}
          value={this.props.percent} />
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    return (
      <div>{(parseFloat(this.props.percent)*100).toFixed(2)+'%'}</div>
    )
  }
}
//如果要让两个兄弟组件之间传递数据的话，需要找到他们共同的最近的父组先
class PercentageApp extends Component {
  constructor(){
    super();
    this.state = {percent:0.00};
  }
  //定义了一个可以改变父组件状态对象中percent的方法
  setPercent = (percent)=>{
   this.setState({percent});
  }
  render () {
    return (
      <div>
        <Input setPercent={this.setPercent} percent={this.state.percent}/>
        <PercentageShower percent={this.state.percent}/>
      </div>
    )
  }
}
ReactDOM.render(<PercentageApp/>,document.querySelector('#root'));
