import React,{Component} from 'react';
export default class CommentList extends Component{
  render(){
    return (
      <ul className="list-group">
        {
          this.props.comments.map((item,index)=>(
            <li className="list-group-item" key={index}>{item.author}:{item.content}</li>
          ))
        }
      </ul>
    )
  }
}