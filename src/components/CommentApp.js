import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
//为了大家阅读代码和沟通方便，我们对方法的放置顺序有约定
//静态属性->构造函数->生命周期函数->自定义函数->render
export default class CommentApp extends Component {
  constructor(){
    super();
    //评论列表的数组
    this.state = {comments:[]};
  }
  componentDidMount(){
    this.setState({comments:localStorage.getItem('comments')?JSON.parse(localStorage.getItem('comments')):[]});
  }
  addComment = (comment)=>{
    comment.id = Date.now();
    comment.createAt = new Date();
    this.setState({comments:[...this.state.comments,comment]},()=>{
      localStorage.setItem('comments',JSON.stringify(this.state.comments));
    });
  }
  removeComment=(id)=>{
    this.setState({comments:this.state.comments.filter(item=>item.id!=id)},()=>{
      localStorage.setItem('comments',JSON.stringify(this.state.comments));
    });
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
                <CommentList
                  removeComment = {this.removeComment}
                  comments={this.state.comments}/>
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