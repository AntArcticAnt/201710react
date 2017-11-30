import React, {Component} from 'react';
import './Sliders.css'
import SliderItems from "./SliderItems";
export default class Sliders extends Component {
  constructor() {
    super();
    this.state = {index: 0};
  }
  turn = (step)=>{

    this.setState({index: this.state.index + step});
  }
  go = () => {
    this.timerId = setInterval(() => {
      this.turn(1);
    }, this.props.delay * 1000);
  }

  componentDidMount() {
    if(this.props.autoPlay)
      this.go();
  }

  render() {
    return (
      <div className="wrapper">
        <SliderItems
          index={this.state.index}
          speed={this.props.speed}
          images={this.props.images}/>
      </div>
    )
  }
}