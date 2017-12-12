import React from 'react';
import ReactDOM from 'react-dom';
import {Transition} from 'react-transition-group';
class FadePanel extends React.Component {
  constructor(){
    super();
    this.state = {show:false};
  }
  handleClick =()=>{
    this.setState({show:!this.state.show});
  }
  render() {
    return (
      <div>
          <button
            onClick={this.handleClick}
          >{this.state.show?'隐藏':'显示'}</button>

      </div>
    )
  }
}
ReactDOM.render(<FadePanel/>,document.querySelector('#root'));