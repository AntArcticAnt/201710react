import React from 'react';
import ReactDOM from 'react-dom';
class Panel extends React.Component{
  render(){
    //children就代表使用此组件的时候传入的子组件
    //children有三种情况 1.数组 2.对象 3.undefined
    console.log(this.props.children);
    return (
      <ul>
        {
          React.Children.map(this.props.children,(item,index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    )
  }
}

ReactDOM.render(
  <Panel>
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </Panel>,
  document.querySelector('#root')
);