import React, {Component} from 'react';
import './Sliders.css'
import SliderItems from "./SliderItems";
export default class Sliders extends Component {
  render() {
    return (
      <div className="wrapper">
        <SliderItems images={this.props.images}/>
      </div>
    )
  }
}