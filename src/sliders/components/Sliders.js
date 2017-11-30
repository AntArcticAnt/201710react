import React, {Component} from 'react';
import './Sliders.css'
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
export default class Sliders extends Component {
  constructor() {
    super();
    this.state = {index: 0};
  }
  turn = (step)=>{
    let index = this.state.index + step;
    if(index >= this.props.images.length){
      index = 0;
    }
    if(index<0){
      index = this.props.images.length -1;
    }
    this.setState({index});
  }
  go = () => {
    this.timerID = setInterval(() => {
      this.turn(1);
    }, this.props.delay * 1000);
  }

  componentDidMount() {
    if(this.props.autoPlay)
      this.go();
  }

  render() {
    return (
      <div
        onMouseOver={()=>clearInterval(this.timerID)}
        onMouseOut={this.go}
        className="wrapper">
        <SliderItems
          index={this.state.index}
          speed={this.props.speed}
          images={this.props.images}/>
        <SliderArrows
          turn={this.turn}
        />
      </div>
    )
  }
}