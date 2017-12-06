import React, {Component} from 'react';
export default class TodoFooter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          0
        </div>
        <div className="col-md-8 text-center">
          <button className="btn btn-xs btn-default">全部</button>
          <button  className="btn btn-xs btn-default"  style={{marginLeft:5}}>未完成</button>
          <button className="btn btn-xs btn-default" style={{marginLeft:5}}>已完成</button>
        </div>
        <div className="col-md-2">
          <button className="btn btn-xs btn-danger">清除已完成</button>
        </div>
      </div>
    )
  }
}