import React, {Component} from 'react';
import 'moment/locale/zh-cn'//中文语言包
import moment from 'moment';
export default class Comment extends Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.comment.author}:
        {this.props.comment.content}
        <button
          onClick={()=>this.props.removeComment(this.props.comment.id)}
          className="btn btn-danger btn-xs">删除</button>
        <span className="pull-right">
          {moment(this.props.comment.createAt).fromNow()}
        </span>
      </li>
    )
  }
}