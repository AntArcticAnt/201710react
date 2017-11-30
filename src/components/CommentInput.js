import React, {Component} from 'react';
export default class CommentInput extends Component {
  constructor() {
    super();
    this.state = {author: '', content: ''};
  }

  handleSubmit = (event) => {
    event.preventDefault();//阻止默认事件
    this.props.addComment(this.state);//调用父组件传过来的方法添加评论
    this.setState({content:''});//设置状态
  }

  handleChange = (event, key) => {
    this.setState({[key]: event.target.value});
  }

  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label col-md-2" htmlFor="author">作者</label>
          <div className="col-md-10">
            <input type="text"
                   onChange={event => this.handleChange(event, 'author')}
                   value={this.state.author} className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-2" htmlFor="content">内容</label>
          <div className="col-md-10">
            <textarea
              onChange={event => this.handleChange(event, 'content')}
              className="form-control" name="content" id="content" cols="30" rows="10"
              value={this.state.content}></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <input type="submit" className="btn btn-primary"/>
          </div>
        </div>
      </form>
    )
  }
}