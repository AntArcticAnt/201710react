import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
export default class CommentApp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="text-center">欢迎来到珠峰留言板</h3>
              </div>
              <div className="panel-body">
                <CommentList/>
              </div>
              <div className="panel-footer">
                <CommentInput/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}