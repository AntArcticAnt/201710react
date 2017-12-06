import React, {Component} from 'react';
export default class TodoFooter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-1">
          0
        </div>
        <div className="col-md-8 text-center">
          <button className="btn btn-md btn-default">全部</button>
          <button  className="btn btn-md btn-default">未完成</button>
          <button className="btn btn-md btn-default">已完成</button>
        </div>
        <div className="col-md-3">
          <button className="btn btn-md btn-danger">清除已完成</button>
        </div>
      </div>
    )
  }
}