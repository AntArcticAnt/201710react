import React, {Component} from 'react';
export default class SliderDots extends Component {
  render() {
    return (
      <div className="dots">
        {
          this.props.images.map((item,index)=>(
            <span
              onClick={()=>this.props.turn(index-this.props.index)}
              key={index}
              className={"dot "+((index==this.props.index||(this.props.index == this.props.images.length&&index==0)?"active":""))}
            ></span>
          ))
        }
      </div>
    )
  }
}