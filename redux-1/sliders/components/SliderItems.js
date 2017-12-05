import React, {Component} from 'react';
export default class SliderItems extends Component {
  render() {
    let style = {
      width:this.props.images.length*300+'px',
      left:this.props.index*-300+'px',
      transitionDuration:this.props.speed+'s'
    }
    return (
      <ul className="sliders" style={style}>
        {
          this.props.images.map((item, index) => (
            <li key={index} className="slider">
              <img src={item}/>
            </li>
          ))
        }
      </ul>
    )
  }
}