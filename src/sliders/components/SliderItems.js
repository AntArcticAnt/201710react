import React, {Component} from 'react';
export default class SliderItems extends Component {
  render() {
    let style = {
      width:(this.props.images.length+1)*300+'px',
      left:this.props.index*-300+'px',
      transitionDuration:this.props.speed+'s'
    }
    return (
      <ul ref={xx=>this.props.setSliders(xx)} className="sliders" style={style}>
        {
          this.props.images.map((item, index) => (
            <li key={index} className="slider">
              <img src={item}/>
            </li>
          ))
        }
        <li key={this.props.images.length} className="slider">
          <img src={this.props.images[0]}/>
        </li>
      </ul>
    )
  }
}