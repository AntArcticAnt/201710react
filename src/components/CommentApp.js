import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
export default class CommentApp extends Component {
  constructor(){
    super();
    //评论列表的数组
    this.state = {comments:[
      {id:1,author:'张三',content:'今天天气真的很不错!'},
      {id:2,author:'李四',content:'嗯!'}
    ]};
  }
  addComment = (comment)=>{
    comment.id = Date.now();
    this.setState({comments:[...this.state.comments,comment]});
  }
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
                <CommentList comments={this.state.comments}/>
              </div>
              <div className="panel-footer">
                <CommentInput addComment={this.addComment}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}