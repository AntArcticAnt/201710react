import React, {Component} from 'react';
import './Sliders.css'
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";
export default class Sliders extends Component {
  constructor() {
    super();
    this.state = {index: 0};
  }
  turn = (step)=>{
    let index = this.state.index + step;
    if(index > this.props.images.length){
       this.sliders.style.transitionDuration = '0s';
       this.sliders.style.left = 0+'px';
       //强行让浏览器重绘
       getComputedStyle(this.sliders,null).left;
       index = 1;
      this.sliders.style.transitionDuration = this.props.speed+'s';
      return this.setState({index});
    }
    if(index<0){
      this.sliders.style.transitionDuration = '0s';
      this.sliders.style.left = (this.props.images.length*-300)+'px';
      getComputedStyle(this.sliders,null).left;
      index = this.props.images.length -1;
      this.sliders.style.transitionDuration = this.props.speed+'s';
      return this.setState({index});
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
  setSliders = (sliders)=>{
    this.sliders = sliders;
  }
  render() {
    return (
      <div
        onMouseOver={()=>clearInterval(this.timerID)}
        onMouseOut={this.go}
        className="wrapper">
        <SliderItems
          setSliders = {this.setSliders}
          index={this.state.index}
          speed={this.props.speed}
          images={this.props.images}/>
        <SliderArrows
          turn={this.turn}
        />
        <SliderDots
          turn={this.turn}
          images={this.props.images}
          index={this.state.index}
        />
      </div>
    )
  }
}