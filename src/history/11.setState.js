import React from 'react';
import ReactDOM from 'react-dom';
class Dog extends React.Component {
  constructor () {
    super()
    this.state = {isRunning:false,isBarking:false};
  }

  bark () {
    this.setState({isBarking:true});
  }

  run () {
    this.setState({isRunning:true});
  }
  handleClick = ()=>{
    this.bark();
    this.run();
    setTimeout(()=>{
      this.setState({isBarking:false,isRunning:false});
    },2000+Math.random()*30);
  }
  render () {
    console.log('render');
    return (<div onClick={this.handleClick}>DOG</div>)
  }
}
ReactDOM.render(<Dog/>,document.querySelector('#root'));
