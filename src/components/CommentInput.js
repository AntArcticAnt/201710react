import React, {Component} from 'react';
export default class CommentInput extends Component {
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-md-2" htmlFor="author">作者</label>
          <div className="col-md-10">
            <input type="text" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-md-2" htmlFor="content">内容</label>
          <div className="col-md-10">
            <textarea className="form-control" name="content" id="content" cols="30" rows="10"></textarea>
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