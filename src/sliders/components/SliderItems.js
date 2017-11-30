import React, {Component} from 'react';
export default class SliderItems extends Component {
  render() {
    return (
      <ul className="sliders">
        {
          this.props.images.map((item, index) => (
            <li className="slider">
              <img src={item}/>
            </li>
          ))
        }
      </ul>
    )
  }
}