import React,{Component} from 'react';
import Comment from "./Comment";
export default class CommentList extends Component{
  render(){
    return (
      <ul className="list-group">
        {
          this.props.comments.map((item,index)=>(
            <Comment removeComment={this.props.removeComment} comment={item} key={index}/>
          ))
        }
      </ul>
    )
  }
}