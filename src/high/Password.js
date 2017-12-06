import React, {Component} from 'react';
/**
 * 现在有一个需要求，当此组件加载的时候要从localStorage通过username这个key获取一个值并显示在input里
 */
export default class Password extends Component {
  constructor(){
    super();
    this.state = {value:''};
  }
  componentDidMount(){
    let value = localStorage.getItem('password')||'';
    this.setState({value});
  }
  render() {
    return (
      <input type="text" value={this.state.value}/>
    )
  }
}