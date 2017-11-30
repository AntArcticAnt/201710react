import React, {Component} from 'react';
export default class CommentInput extends Component {
  constructor() {
    super();
    this.state = {author: '', content: ''};
  }
  //组件挂载完成
  componentDidMount(){
    //Warning: `value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.
    //警告: input框中的value属性不能为null,请考虑使用一个空字符中来清空组件或者使用非受控组件
    this.setState({author:localStorage.getItem('author')||''});
  }
  handleSubmit = (event) => {
    event.preventDefault();//阻止默认事件
    this.props.addComment(this.state);//调用父组件传过来的方法添加评论
    this.setState({content:''});//设置状态
    //在提交评论的时候，把用户名保存在localStorage里
    localStorage.setItem('author',this.state.author);
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
              value={this.state.content} autoFocus></textarea>
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